import nodemailer from 'nodemailer';
import { EnquiryRecord } from '../database/db';

const GMAIL_USER = process.env.GMAIL_USER || 'cabsriilakshmi@gmail.com';
const GMAIL_PASS = process.env.GMAIL_PASSWORD || '';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
});

export const sendEnquiryNotificationEmail = async (enquiry: EnquiryRecord) => {
  // If credentials are not configured, log email notification locally
  if (!GMAIL_PASS) {
    console.log('[Email Service Log] New Travel Enquiry Received:', enquiry);
    return;
  }

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; background-color: #0e0f12; color: #ffffff; padding: 24px; border-radius: 12px;">
      <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 8px;">
        🚖 New Travel Enquiry — Srii Lakshmi Cab
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px; color: #e2e8f0;">
        <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Customer Name:</td><td style="padding: 8px;">${enquiry.name}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Phone Number:</td><td style="padding: 8px; color: #d4af37; font-weight: bold;">${enquiry.phone}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Pickup Location:</td><td style="padding: 8px;">${enquiry.pickup}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Destination:</td><td style="padding: 8px;">${enquiry.destination}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Travel Date:</td><td style="padding: 8px;">${enquiry.travel_date}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Vehicle Required:</td><td style="padding: 8px;">${enquiry.vehicle || 'Not Specified'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Trip Type:</td><td style="padding: 8px;">${enquiry.trip_type || 'General'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Additional Notes:</td><td style="padding: 8px;">${enquiry.message || 'None'}</td></tr>
      </table>
      <p style="font-size: 12px; color: #94a3b8; margin-top: 24px;">
        Sent automatically from Srii Lakshmi Cab Website Lead Generation System.
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Srii Lakshmi Cab Website" <${GMAIL_USER}>`,
    to: GMAIL_USER,
    subject: `New Travel Enquiry: ${enquiry.name} — ${enquiry.destination}`,
    html: htmlContent,
  });
};
