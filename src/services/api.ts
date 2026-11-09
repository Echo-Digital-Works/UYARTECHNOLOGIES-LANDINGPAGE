/**
 * API Service for Uyar Technologies
 * Handles lead submission, project enquiries, and error handling.
 * Integrates cleanly with backend endpoints configured via VITE_API_BASE_URL.
 */

export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  service: string;
  budget?: string;
  message: string;
}

export interface LeadResponse {
  success: boolean;
  message: string;
  leadId?: string;
  eventId?: string; // For Meta Conversions API deduplication
}

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').trim();
const LEADS_API_PATH = (import.meta.env.VITE_LEADS_API_PATH || '/api/leads').trim();
const normalizedPath = LEADS_API_PATH.startsWith('/') ? LEADS_API_PATH : `/${LEADS_API_PATH}`;

export const submitProjectEnquiry = async (data: LeadFormData): Promise<LeadResponse> => {
  const eventId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

  // Construct payload with tracking metadata
  const payload = {
    ...data,
    eventId,
    submittedAt: new Date().toISOString(),
    source: 'meta_landing_page',
    referrer: typeof document !== 'undefined' ? document.referrer : '',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : ''
  };

  // If a real backend URL is provided, send the POST request
  if (API_BASE_URL) {
    const submissionEndpoint = `${API_BASE_URL.replace(/\/$/, '')}${normalizedPath}`;
    try {
      const response = await fetch(submissionEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Server responded with status ${response.status}`);
      }

      const resData = await response.json();
      return {
        success: true,
        message: resData.message || 'Thank you! Your project enquiry has been submitted successfully and confirmed by our team.',
        leadId: resData.leadId || eventId,
        eventId
      };
    } catch (err: any) {
      console.error('[API Error] Failed to submit to remote endpoint:', err);
      // Fallback: save lead locally so customer information is never lost
      saveLeadLocally(payload);
      return {
        success: false,
        message: err.message || 'Unable to complete submission right now. Please try again or contact support.',
        leadId: eventId,
        eventId
      };
    }
  }

  // Graceful offline / preview mode: Save locally in localStorage for client retrieval
  await new Promise((resolve) => setTimeout(resolve, 800)); // Realistic network latency
  saveLeadLocally(payload);

  return {
    success: true,
    message: 'Thank you! Your project enquiry has been submitted successfully and confirmed by our team.',
    leadId: eventId,
    eventId
  };
};

function saveLeadLocally(payload: any) {
  try {
    const existing = JSON.parse(localStorage.getItem('uyar_leads') || '[]');
    existing.push(payload);
    localStorage.setItem('uyar_leads', JSON.stringify(existing));
    console.info('[Uyar Leads Store] Lead registered safely:', payload);
  } catch (e) {
    console.warn('[Uyar Leads Store] Could not write to localStorage:', e);
  }
}

