import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCookie, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useCookieConsent } from '@/contexts';
import * as S from './CookieBanner.styles';

interface CookieSettings {
  analytics: boolean;
  marketing: boolean;
}

export const CookieBanner: React.FC = () => {
  const {
    showBanner,
    consent,
    acceptAll,
    rejectAll,
    acceptSelected
  } = useCookieConsent();

  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    analytics: consent?.analytics || false,
    marketing: consent?.marketing || false
  });

  // Aktualizuj ustawienia gdy zmieniają się zgody
  React.useEffect(() => {
    setSettings({
      analytics: consent?.analytics || false,
      marketing: consent?.marketing || false
    });
  }, [consent]);

  // Resetuj zaawansowane ustawienia gdy banner się pokazuje
  React.useEffect(() => {
    if (showBanner) {
      setShowAdvancedSettings(false);
    }
  }, [showBanner]);

  const handleAcceptAll = useCallback(() => {
    acceptAll();
  }, [acceptAll]);

  const handleRejectAll = useCallback(() => {
    rejectAll();
  }, [rejectAll]);

  const handleAcceptSelected = useCallback(() => {
    acceptSelected({
      analytics: settings.analytics,
      marketing: settings.marketing
    });
  }, [acceptSelected, settings]);

  const toggleAdvancedSettings = useCallback(() => {
    setShowAdvancedSettings(prev => !prev);
  }, []);

  const handleToggle = useCallback((type: keyof CookieSettings) => {
    setSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  }, []);

  const categories = [
    {
      id: 'necessary',
      title: 'Niezbędne cookies',
      description: 'Te pliki cookie są konieczne do prawidłowego funkcjonowania strony internetowej i nie można ich wyłączyć.',
      required: true,
      enabled: true
    },
    {
      id: 'analytics',
      title: 'Analityczne cookies',
      description: 'Pomagają nam zrozumieć, jak korzystasz z naszej strony, dzięki czemu możemy ją ulepszać. Zbieramy anonimowe dane o odwiedzinach.',
      required: false,
      enabled: settings.analytics
    },
    {
      id: 'marketing',
      title: 'Marketingowe cookies',
      description: 'Używane do wyświetlania reklam dopasowanych do Twoich zainteresowań na tej i innych stronach internetowych.',
      required: false,
      enabled: settings.marketing
    }
  ];

  return (
    <AnimatePresence>
      {showBanner && (
        <S.CookieBannerOverlay $isVisible={showBanner}>
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <S.CookieBannerContainer $isVisible={showBanner}>
              <S.CookieHeader>
                <S.CookieIcon>
                  <FaCookie />
                </S.CookieIcon>
                <S.CookieTitle>Ustawienia cookies</S.CookieTitle>
              </S.CookieHeader>

              <S.CookieDescription>
                Używamy plików cookie, aby zapewnić najlepsze doświadczenia na naszej stronie internetowej. 
                Niektóre są niezbędne do funkcjonowania strony, inne pomagają nam zrozumieć, jak z niej korzystasz, 
                aby móc ją ulepszać. Możesz zarządzać swoimi preferencjami poniżej.
              </S.CookieDescription>

              <S.CookieDescription>
                Więcej informacji znajdziesz w naszej{' '}
                <S.PrivacyLink href="/polityka-cookies" target="_blank">
                  polityce cookies
                </S.PrivacyLink>.
              </S.CookieDescription>

              <S.CookieSettingsHeader onClick={toggleAdvancedSettings}>
                <span>Ustawienia zaawansowane</span>
                {showAdvancedSettings ? <FaChevronUp /> : <FaChevronDown />}
              </S.CookieSettingsHeader>

              <S.CookieSettingsContainer $isExpanded={showAdvancedSettings}>
                <S.CookieSettingsContent>
                  {categories.map((category) => (
                    <S.CookieCategory key={category.id}>
                      <S.CategoryHeader>
                        <S.CategoryTitle>{category.title}</S.CategoryTitle>
                        <S.ToggleSwitch $disabled={category.required}>
                          <S.ToggleInput
                            type="checkbox"
                            checked={category.enabled}
                            disabled={category.required}
                            onChange={() => !category.required && handleToggle(category.id as keyof CookieSettings)}
                          />
                          <S.ToggleSlider
                            $checked={category.enabled}
                            $disabled={category.required}
                          />
                        </S.ToggleSwitch>
                      </S.CategoryHeader>
                      <S.CategoryDescription>
                        {category.description}
                      </S.CategoryDescription>
                    </S.CookieCategory>
                  ))}
                </S.CookieSettingsContent>
              </S.CookieSettingsContainer>

              <S.CookieButtonsContainer>
                <S.CookieButton
                  $variant="primary"
                  onClick={handleAcceptAll}
                  as={motion.button}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Akceptuj wszystkie
                </S.CookieButton>
                
                {showAdvancedSettings && (
                  <S.CookieButton
                    $variant="secondary"
                    onClick={handleAcceptSelected}
                    as={motion.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Akceptuj wybrane
                  </S.CookieButton>
                )}
                
                <S.CookieButton
                  $variant="text"
                  onClick={handleRejectAll}
                  as={motion.button}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Odrzuć wszystkie
                </S.CookieButton>
              </S.CookieButtonsContainer>
            </S.CookieBannerContainer>
          </motion.div>
        </S.CookieBannerOverlay>
      )}
    </AnimatePresence>
  );
};
