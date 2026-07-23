import React, { useState } from 'react';
import { Phone, MessageSquare, CheckCircle2, ShieldCheck, Send, Calendar, MapPin, Users, Car } from 'lucide-react';
import { BRAND_DETAILS } from '@/constants/brand';
import { EnquiryFormData } from '@/types';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { submitTravelEnquiry } from '@/services/api';
import { useContactModal } from '@/context/ContactModalContext';

export interface UniversalEnquiryFormProps {
  initialVehicle?: string;
  initialDestination?: string;
  initialService?: string;
  formTitle?: string;
  formSubtitle?: string;
}

const VEHICLE_OPTIONS = [
  { value: 'Not Sure Yet', label: 'Not Sure Yet (Advisor Will Recommend)' },
  { value: 'Hatchback', label: 'Hatchback (4 Passengers)' },
  { value: 'Sedan', label: 'Sedan (4 Passengers)' },
  { value: 'SUV', label: 'SUV (6-7 Passengers)' },
  { value: 'MVP', label: 'MVP (6-7 Passengers)' },
  { value: 'Tempo Traveller 12 Seater', label: 'Tempo Traveller (12 Seater)' },
  { value: 'Tempo Traveller 15 Seater', label: 'Tempo Traveller (15 Seater)' },
  { value: 'Tempo Traveller 18-20 Seater', label: 'Tempo Traveller (18-20 Seater)' },
  { value: 'Force Urbania Executive', label: 'Force Urbania Luxury (12-20 Seater)' },
  { value: 'Coach 21 Seater', label: 'Coach (21 Seater)' },
  { value: 'Mini Bus 29-35 Seater', label: 'Mini Bus (29 & 35 Seater)' },
  { value: 'Large Bus 40+ Seater', label: 'Large Bus (40+ Seater)' },
];

const TRIP_TYPE_OPTIONS = [
  { value: 'Airport Transfer', label: 'Airport Transfer' },
  { value: 'Outstation Trip', label: 'Outstation Trip / Round Trip' },
  { value: 'Family Tour', label: 'Family Holiday / Vacation' },
  { value: 'Temple / Pilgrimage Tour', label: 'Temple / Pilgrimage Visit' },
  { value: 'Wedding Event', label: 'Wedding Transportation' },
  { value: 'Corporate Travel', label: 'Corporate / Business Travel' },
  { value: 'Industrial Visit', label: 'Industrial Visit / College Tour' },
  { value: 'Local Sightseeing', label: 'Local Coimbatore Sightseeing' },
  { value: 'Other', label: 'Other Special Journey' },
];

export const UniversalEnquiryForm: React.FC<UniversalEnquiryFormProps> = ({
  initialVehicle,
  initialDestination,
  initialService,
  formTitle = 'Request a Travel Quote',
  formSubtitle = 'Fill in your journey details. Our travel advisor will contact you within 15–30 minutes with the best travel plan.',
}) => {
  const { openCallModal, openWhatsAppModal } = useContactModal();

  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    pickupLocation: '',
    destination: initialDestination || '',
    travelDate: '',
    vehicleCategory: initialVehicle || '',
    passengerCount: '',
    tripType: initialService || '',
    message: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validatePhone = (phoneStr: string) => {
    const cleaned = phoneStr.replace(/\D/g, '');
    if (cleaned.length !== 10) {
      setPhoneError('Please enter a valid 10-digit Indian mobile number.');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      return;
    }

    if (!validatePhone(formData.phone)) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await submitTravelEnquiry({
        ...formData,
        honeypot,
      });

      if (res.success) {
        setIsSuccess(true);
      } else {
        alert(res.error || 'Failed to submit enquiry.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Please call us directly at 9443914314.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-dark-card border border-gold-500/40 rounded-3xl p-8 sm:p-10 text-center space-y-6 gold-border-glow animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">
            Enquiry Received
          </span>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
            Thank You, {formData.name}!
          </h3>
          <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
            Thank you for choosing <strong className="text-white">{BRAND_DETAILS.name}</strong>. Our travel advisor will contact you shortly at <span className="text-gold-400 font-semibold">{formData.phone}</span> with the best travel plan.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="primary"
            size="md"
            className="w-full sm:w-auto"
            onClick={openCallModal}
            leftIcon={<Phone className="w-4 h-4" />}
          >
            Click to Call
          </Button>

          <Button
            variant="secondary"
            size="md"
            className="w-full sm:w-auto"
            onClick={() => openWhatsAppModal(`Hello Srii Lakshmi Cab, I submitted an enquiry for ${formData.destination || 'a trip'}. Please update me.`)}
            leftIcon={<MessageSquare className="w-4 h-4 text-emerald-400" />}
          >
            WhatsApp Us
          </Button>
        </div>

        <p className="text-[11px] text-slate-500">
          Average response time: 15–30 minutes during business hours (24x7 Support).
        </p>
      </div>
    );
  }

  return (
    <div className="bg-dark-card border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-6">
      <div>
        <h3 className="font-serif font-bold text-2xl text-white mb-2">{formTitle}</h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{formSubtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Hidden Honeypot Field for anti-spam */}
        <input
          type="text"
          name="website_url_hp"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Your Name"
            placeholder="Enter your full name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <Input
            label="Mobile Phone Number"
            placeholder="10-digit mobile number"
            type="tel"
            required
            error={phoneError}
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (phoneError) validatePhone(e.target.value);
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Pickup Location"
            placeholder="e.g. Singanallur, Coimbatore / Airport"
            required
            leftIcon={<MapPin className="w-4 h-4" />}
            value={formData.pickupLocation}
            onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
          />

          <Input
            label="Destination"
            placeholder="e.g. Ooty / Munnar / Local / Airport"
            required
            leftIcon={<MapPin className="w-4 h-4 text-gold-500" />}
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Input
            label="Travel Date"
            type="date"
            required
            leftIcon={<Calendar className="w-4 h-4" />}
            value={formData.travelDate}
            onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
          />

          <Select
            label="Preferred Vehicle"
            options={VEHICLE_OPTIONS}
            placeholder="Select Vehicle Category"
            leftIcon={<Car className="w-4 h-4" />}
            value={formData.vehicleCategory}
            onChange={(e) => setFormData({ ...formData, vehicleCategory: e.target.value })}
          />

          <Select
            label="Trip Type"
            options={TRIP_TYPE_OPTIONS}
            placeholder="Select Journey Purpose"
            leftIcon={<Users className="w-4 h-4" />}
            value={formData.tripType}
            onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
          />
        </div>

        <Textarea
          label="Additional Details (Optional)"
          placeholder="Mention passenger count, luggage details, or special requests..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full shadow-xl"
          isLoading={isSubmitting}
          rightIcon={<Send className="w-4 h-4" />}
        >
          Submit Travel Enquiry
        </Button>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400 text-center">
          <span className="flex items-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-500 shrink-0" />
            <span>Your contact info is strictly confidential.</span>
          </span>
          <span>•</span>
          <span>No advance payment required to enquire.</span>
        </div>
      </form>
    </div>
  );
};
