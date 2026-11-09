/**
 * API Service for Uyar Technologies
 * Submits project enquiries directly to Project A Backend (Express + MySQL).
 * Configured via VITE_API_BASE_URL and VITE_LEADS_API_PATH.
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
  leadId?: string | number;
  eventId?: string; // For Meta Conversions API & idempotency deduplication
}

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').trim();
const LEADS_API_PATH = (import.meta.env.VITE_LEADS_API_PATH || '/api/v1/leads/public').trim();
const normalizedPath = LEADS_API_PATH.startsWith('/') ? LEADS_API_PATH : `/${LEADS_API_PATH}`;

const MAX_RETRIES = 2;
const REQUEST_TIMEOUT_MS = 15000;

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

  if (!API_BASE_URL) {
    console.error('[API Config Error] VITE_API_BASE_URL is not configured. Please set VITE_API_BASE_URL to your Project A Backend URL.');
    saveLeadLocally(payload);
    return {
      success: false,
      message: 'Enquiry service is temporarily unavailable. Please try again or call us directly at +91 79040 75373.',
      eventId
    };
  }

  const submissionEndpoint = `${API_BASE_URL.replace(/\/+$/, '')}${normalizedPath}`;
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch(submissionEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Event-ID': eventId,
          'X-Idempotency-Key': eventId
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      const resData = await response.json().catch(() => ({}));

      if (!response.ok) {
        // Do not retry 4xx client/validation/rate-limit errors
        if (response.status >= 400 && response.status < 500) {
          return {
            success: false,
            message: resData.message || `Please check your form details (${response.status}).`,
            eventId
          };
        }
        throw new Error(resData.message || `Server responded with status ${response.status}`);
      }

      return {
        success: true,
        message: resData.message || 'Thank you! Your project enquiry has been submitted successfully and confirmed by our team.',
        leadId: resData.leadId || eventId,
        eventId
      };
    } catch (err: any) {
      clearTimeout(timeoutId);
      lastError = err instanceof Error ? err : new Error(String(err));

      if (attempt < MAX_RETRIES) {
        await new Promise((resolve) => setTimeout(resolve, 800 * (attempt + 1)));
      }
    }
  }

  console.error('[API Error] Failed to submit directly to Project A backend:', lastError);
  saveLeadLocally(payload);
  return {
    success: false,
    message: lastError?.name === 'AbortError'
      ? 'Request timed out. Please try again or contact us at +91 79040 75373.'
      : lastError?.message || 'Unable to complete submission right now. Please try again or contact support.',
    eventId
  };
};

function saveLeadLocally(payload: unknown) {
  try {
    const existing = JSON.parse(localStorage.getItem('uyar_leads') || '[]');
    existing.push(payload);
    localStorage.setItem('uyar_leads', JSON.stringify(existing));
  } catch (e) {
    console.warn('[Uyar Leads Store] Could not write to localStorage:', e);
  }
}
