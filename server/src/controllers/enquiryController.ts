import { Request, Response } from 'express';
import { saveEnquiry, getEnquiries, EnquiryRecord } from '../database/db';
import { sendEnquiryNotificationEmail } from '../services/emailService';

export const handleCreateEnquiry = async (req: Request, res: Response) => {
  try {
    const { name, phone, pickupLocation, destination, travelDate, vehicleCategory, tripType, passengerCount, message, honeypot } = req.body;

    // 1. Honeypot Anti-Spam Check
    if (honeypot) {
      return res.status(400).json({ error: 'Spam submission detected.' });
    }

    // 2. Mandatory Validation
    if (!name || !phone || !pickupLocation || !destination || !travelDate) {
      return res.status(400).json({ error: 'Name, phone, pickup, destination, and travel date are required.' });
    }

    // 3. 10-digit Indian Mobile Validation
    const cleanedPhone = phone.replace(/\D/g, '');
    if (cleanedPhone.length !== 10) {
      return res.status(400).json({ error: 'Please provide a valid 10-digit Indian mobile number.' });
    }

    const enquiryRecord: EnquiryRecord = {
      name,
      phone: cleanedPhone,
      pickup: pickupLocation,
      destination,
      travel_date: travelDate,
      vehicle: vehicleCategory,
      trip_type: tripType,
      passengers: passengerCount,
      message,
    };

    // 4. Save in SQLite Database
    const id = saveEnquiry(enquiryRecord);

    // 5. Trigger Gmail Notification (Asynchronous)
    sendEnquiryNotificationEmail(enquiryRecord).catch((err) =>
      console.error('[Email Notification Warning]', err)
    );

    return res.status(201).json({
      success: true,
      message: 'Enquiry saved successfully. A travel advisor will contact you shortly.',
      enquiryId: id,
    });
  } catch (error) {
    console.error('[Enquiry Handler Error]', error);
    return res.status(500).json({ error: 'Internal server error while processing enquiry.' });
  }
};

export const handleListEnquiries = (_req: Request, res: Response) => {
  try {
    const records = getEnquiries(50);
    return res.json({ success: true, enquiries: records });
  } catch (error) {
    console.error('[Get Enquiries Error]', error);
    return res.status(500).json({ error: 'Failed to retrieve enquiries.' });
  }
};
