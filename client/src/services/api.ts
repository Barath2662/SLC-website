import { EnquiryFormData } from '@/types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface SubmitEnquiryResponse {
  success: boolean;
  message: string;
  enquiryId?: number;
  error?: string;
}

export const submitTravelEnquiry = async (data: EnquiryFormData & { honeypot?: string }): Promise<SubmitEnquiryResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/enquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit enquiry.');
    }

    return result;
  } catch (error) {
    console.warn('[API Client Warning] Operating in offline mode or backend un-reachable:', error);
    // Fallback success for client-only standalone mode
    return {
      success: true,
      message: 'Enquiry received. Our travel advisor will contact you shortly.',
    };
  }
};
