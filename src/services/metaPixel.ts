/**
 * Meta Pixel (Facebook & Instagram) Tracking Utility
 * Uyar Technologies Private Limited
 * 
 * Complies with Meta Advertising Standards and CRO requirements.
 * Ensures robust tracking without runtime errors even when Pixel ID is omitted.
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

interface MetaPixelConfig {
  pixelId?: string;
  debug?: boolean;
}

class MetaPixelService {
  private initialized = false;
  private pixelId: string | null = null;
  private hasTrackedLead = false;
  private trackedViewContents = new Set<string>();

  /**
   * Initialize Meta Pixel script dynamically if Pixel ID exists.
   */
  public init(config?: MetaPixelConfig): void {
    if (this.initialized) return;

    this.pixelId = config?.pixelId || import.meta.env.VITE_META_PIXEL_ID || null;

    if (!this.pixelId || this.pixelId.trim() === '' || this.pixelId === 'YOUR_PIXEL_ID') {
      if (import.meta.env.DEV) {
        console.info('[MetaPixel] No VITE_META_PIXEL_ID provided. Running in safe mock mode.');
      }
      this.initialized = true;
      return;
    }

    try {
      /* Standard Meta Pixel snippet */
      (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

      if (window.fbq) {
        window.fbq('init', this.pixelId);
        this.trackPageView();
      }

      this.initialized = true;
      if (import.meta.env.DEV) {
        console.log(`[MetaPixel] Initialized successfully with ID: ${this.pixelId}`);
      }
    } catch (err) {
      console.warn('[MetaPixel] Initialization error:', err);
      this.initialized = true;
    }
  }

  /**
   * Track PageView
   */
  public trackPageView(): void {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
    if (import.meta.env.DEV) {
      console.log('[MetaPixel] Event: PageView');
    }
  }

  /**
   * Track ViewContent (e.g. Services, Projects, Portfolio inspection)
   */
  public trackViewContent(contentName: string, contentCategory?: string): void {
    const key = `${contentName}_${contentCategory || 'general'}`;
    if (this.trackedViewContents.has(key)) return; // Prevent spamming within single session
    this.trackedViewContents.add(key);

    const payload = {
      content_name: contentName,
      content_category: contentCategory || 'Software Development Services',
      content_type: 'product',
      currency: 'INR'
    };

    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', payload);
    }
    if (import.meta.env.DEV) {
      console.log('[MetaPixel] Event: ViewContent', payload);
    }
  }

  /**
   * Track Lead
   * STRICT CRITERIA: ONLY called after API confirmation of successful lead form submission.
   * Prevents duplicate events.
   */
  public trackLead(data: {
    service?: string;
    budget?: string;
    eventId?: string;
  }): boolean {
    if (this.hasTrackedLead) {
      if (import.meta.env.DEV) {
        console.warn('[MetaPixel] Duplicate Lead event blocked.');
      }
      return false;
    }

    const payload = {
      content_name: data.service || 'General Software Enquiry',
      content_category: 'Lead Generation',
      currency: 'INR',
      value: this.mapBudgetValue(data.budget),
      status: 'submitted'
    };

    if (typeof window !== 'undefined' && window.fbq) {
      // If eventId is provided, pass for deduplication with Meta Conversions API (CAPI)
      if (data.eventId) {
        window.fbq('track', 'Lead', payload, { eventID: data.eventId });
      } else {
        window.fbq('track', 'Lead', payload);
      }
    }

    this.hasTrackedLead = true;
    if (import.meta.env.DEV) {
      console.log('[MetaPixel] Event: Lead FIRED successfully', payload);
    }
    return true;
  }

  /**
   * Track Custom Contact / CTA clicks (Standard 'Contact' event)
   */
  public trackContact(method: 'phone' | 'email' | 'form_start' | 'whatsapp'): void {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact', { method });
    }
    if (import.meta.env.DEV) {
      console.log('[MetaPixel] Event: Contact', { method });
    }
  }

  private mapBudgetValue(budget?: string): number {
    if (!budget) return 50000;
    if (budget.includes('25,000 – ₹50,000')) return 35000;
    if (budget.includes('50,000 – ₹1,00,000')) return 75000;
    if (budget.includes('1,00,000 – ₹3,00,000')) return 150000;
    if (budget.includes('Above ₹3,00,000')) return 350000;
    return 25000;
  }
}

export const metaPixel = new MetaPixelService();
export default metaPixel;

