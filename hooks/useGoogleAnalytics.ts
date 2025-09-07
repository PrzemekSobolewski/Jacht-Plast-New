import { useCallback } from 'react';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, string | number | boolean>
    ) => void;
  }
}

export const useGoogleAnalytics = () => {
  const trackEvent = useCallback((
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      const config: Record<string, string | number | boolean> = {
        event_category: category,
      };
      
      if (label) config.event_label = label;
      if (value !== undefined) config.value = value;
      
      window.gtag('event', action, config);
    }
  }, []);

  const trackPageView = useCallback((url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'UA-180598229-1', {
        page_path: url,
      });
    }
  }, []);

  const trackConversion = useCallback((conversionId?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId || 'AW-16661980602/TVtLCOGw3McZELrLhok-'
      });
    }
  }, []);

  const trackContactForm = useCallback(() => {
    trackEvent('form_submit', 'Contact', 'Contact Form');
  }, [trackEvent]);

  const trackPhoneClick = useCallback(() => {
    trackEvent('click', 'Contact', 'Phone Number');
  }, [trackEvent]);

  const trackEmailClick = useCallback(() => {
    trackEvent('click', 'Contact', 'Email Address');
  }, [trackEvent]);

  const trackYachtView = useCallback((yachtName: string) => {
    trackEvent('view_item', 'Yacht', yachtName);
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackConversion,
    trackContactForm,
    trackPhoneClick,
    trackEmailClick,
    trackYachtView,
  };
};
