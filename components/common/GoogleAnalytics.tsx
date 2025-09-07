import Script from 'next/script';
import { useCookieConsent } from '@/contexts';

export const GoogleAnalytics = () => {
  const { hasAnalyticsConsent, hasMarketingConsent, hasInteracted } = useCookieConsent();

  // Nie ładuj skryptów dopóki użytkownik nie podejmie decyzji
  if (!hasInteracted) {
    return null;
  }

  return (
    <>
      {/* Google Analytics - ładuj tylko jeśli użytkownik wyraził zgodę */}
      {hasAnalyticsConsent && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=UA-180598229-1"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-180598229-1', {
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure'
              });
            `}
          </Script>
        </>
      )}
      
      {/* Google Ads - ładuj tylko jeśli użytkownik wyraził zgodę na marketing */}
      {hasMarketingConsent && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-409941666"
            strategy="afterInteractive"
          />
          <Script id="google-ads" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16661980602');
            `}
          </Script>
          <Script id="google-ads-conversion" strategy="afterInteractive">
            {`
              gtag('event', 'conversion', {
                'send_to': 'AW-16661980602/TVtLCOGw3McZELrLhok-'
              });
            `}
          </Script>
        </>
      )}
    </>
  );
};
