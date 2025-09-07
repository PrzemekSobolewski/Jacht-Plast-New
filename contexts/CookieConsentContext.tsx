import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';

interface CookieConsent {
  analytics: boolean;
  marketing: boolean;
  necessary: boolean;
}

interface CookieConsentContextType {
  consent: CookieConsent | null;
  showBanner: boolean;
  hasInteracted: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  acceptSelected: (consent: Partial<CookieConsent>) => void;
  resetConsent: () => void;
  showSettings: () => void;
  hasAnalyticsConsent: boolean;
  hasMarketingConsent: boolean;
}

interface CookieConsentState {
  consent: CookieConsent | null;
  showBanner: boolean;
  hasInteracted: boolean;
}

const COOKIE_CONSENT_KEY = 'jacht-plast-cookie-consent';
const COOKIE_CONSENT_VERSION = '1.0';

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

interface CookieConsentProviderProps {
  children: ReactNode;
}

export const CookieConsentProvider: React.FC<CookieConsentProviderProps> = ({ children }) => {
  const [state, setState] = useState<CookieConsentState>({
    consent: null,
    showBanner: false,
    hasInteracted: false
  });

  // Sprawdź zapisane preferencje przy ładowaniu
  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    
    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent) as {
          version: string;
          consent: CookieConsent;
          timestamp: number;
        };
        if (parsed.version === COOKIE_CONSENT_VERSION && parsed.consent) {
          setState({
            consent: parsed.consent,
            showBanner: false,
            hasInteracted: true
          });
          return;
        }
      } catch (error) {
        console.error('Błąd podczas wczytywania preferencji cookies:', error);
      }
    }
    
    // Pokaż baner jeśli nie ma zapisanych preferencji
    setState(prev => ({
      ...prev,
      showBanner: true
    }));
  }, []);

  const saveConsent = useCallback((consent: CookieConsent) => {
    const consentData = {
      consent,
      version: COOKIE_CONSENT_VERSION,
      timestamp: Date.now()
    };
    
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    
    setState({
      consent,
      showBanner: false,
      hasInteracted: true
    });
  }, []);

  const acceptAll = useCallback(() => {
    const fullConsent: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    saveConsent(fullConsent);
  }, [saveConsent]);

  const rejectAll = useCallback(() => {
    const minimalConsent: CookieConsent = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    saveConsent(minimalConsent);
  }, [saveConsent]);

  const acceptSelected = useCallback((consent: Partial<CookieConsent>) => {
    const fullConsent: CookieConsent = {
      necessary: true, // Zawsze wymagane
      analytics: consent.analytics || false,
      marketing: consent.marketing || false
    };
    saveConsent(fullConsent);
  }, [saveConsent]);

  const resetConsent = useCallback(() => {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    setState({
      consent: null,
      showBanner: true,
      hasInteracted: false
    });
  }, []);

  const showSettings = useCallback(() => {
    setState(prev => ({
      ...prev,
      showBanner: true
    }));
  }, []);

  const contextValue: CookieConsentContextType = {
    consent: state.consent,
    showBanner: state.showBanner,
    hasInteracted: state.hasInteracted,
    acceptAll,
    rejectAll,
    acceptSelected,
    resetConsent,
    showSettings,
    hasAnalyticsConsent: state.consent?.analytics || false,
    hasMarketingConsent: state.consent?.marketing || false
  };

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};

// Export dla kompatybilności wstecznej
export type { CookieConsent, CookieConsentContextType };
