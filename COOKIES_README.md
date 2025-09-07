# System Zarządzania Cookies - Jacht Plast

## Przegląd
System zarządzania cookies zgodny z GDPR został zaimplementowany na stronie Jacht Plast. System wykorzystuje React Context API do globalnego zarządzania stanem i zapewnia zgodność z przepisami prawa.

## Architektura

### 🏗️ **Context API Architecture**
System został zbudowany w oparciu o React Context API dla lepszego zarządzania globalnym stanem:

- **CookieConsentProvider** - Główny provider Context API
- **useCookieConsent** - Hook do dostępu do funkcjonalności cookies
- **Centralized State Management** - Jednolite zarządzanie stanem w całej aplikacji

## Komponenty

### 1. CookieConsentContext (`/contexts/CookieConsentContext.tsx`)
- **Provider** zarządzający globalnym stanem zgodne na cookies
- Przechowuje preferencje w localStorage z wersjonowaniem
- Zapewnia funkcje do akceptacji/odrzucenia cookies
- Centralizuje logikę biznesową związaną z cookies

### 2. CookieBanner (`/components/CookieBanner/`)
- Główny komponent banera cookies
- Responsywny design dopasowany do strony  
- Ustawienia zaawansowane z możliwością granularnej kontroli
- Animacje przy pokazywaniu/ukrywaniu

### 3. CookieSettingsButton (`/components/CookieBanner/CookieSettingsButton.tsx`)
- Floating button do ponownego otwarcia ustawień
- Pokazuje się tylko po podjęciu decyzji przez użytkownika
- Pozwala na zmianę preferencji w dowolnym momencie

### 4. GoogleAnalytics (`/components/common/GoogleAnalytics.tsx`)
- Warunkowe ładowanie skryptów GA i Google Ads
- Ładuje się tylko przy zgodzie użytkownika
- Zintegrowane z Context API

### 5. Strona Polityki Cookies (`/pages/polityka-cookies.tsx`)
- Kompletna polityka prywatności i cookies
- Szczegółowe informacje o wykorzystywanych plikach
- Instrukcje zarządzania cookies w przeglądarce

## Rodzaje Cookies

### Niezbędne (zawsze aktywne)
- Zarządzanie sesjami
- Bezpieczeństwo
- Preferencje językowe
- Zarządzanie zgodami

### Analityczne (opcjonalne)
- Google Analytics
- Statystyki odwiedzin
- Analiza ruchu na stronie

### Marketingowe (opcjonalne)
- Google Ads
- Remarketing
- Śledzenie konwersji

## Integracja

### W _app.tsx
```tsx
import { CookieConsentProvider } from "@/contexts";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <CookieConsentProvider>
      <GoogleAnalytics />
      <CookieBanner />
      <CookieSettingsButton />
      {getLayout(<Component {...pageProps} />)}
    </CookieConsentProvider>
  );
}
```

### W komponentach
```tsx
import { useCookieConsent } from "@/contexts";

const MyComponent = () => {
  const { 
    consent, 
    hasAnalyticsConsent, 
    hasMarketingConsent,
    showSettings 
  } = useCookieConsent();
  
  return (
    // Twój komponent
  );
};
```

### W stopce (Footer.tsx)
```tsx
<FooterLinks>
  <FooterLink href="/polityka-cookies">
    Polityka Cookies
  </FooterLink>
  <FooterLink onClick={handleCookieSettingsClick}>
    Ustawienia Cookies
  </FooterLink>
</FooterLinks>
```

## Funkcjonalności

### Dla użytkowników
- Jasny komunikat o wykorzystaniu cookies
- Możliwość wyboru kategorii cookies
- Łatwe zarządzanie preferencjami
- Link do pełnej polityki prywatności
- Możliwość zmiany ustawień w dowolnym momencie

### Dla deweloperów
- Automatyczne sprawdzanie zgodne przed ładowaniem skryptów
- Hook do sprawdzania zgodne w komponenach
- TypeScript support
- Zoptymalizowane pod kątem performance

## Zgodność z GDPR

✅ Informacja o przetwarzaniu danych  
✅ Możliwość wyrażenia/wycofania zgody  
✅ Granularna kontrola nad kategoriami cookies  
✅ Przejrzysta polityka prywatności  
✅ Łatwy dostęp do zarządzania preferencjami  
✅ Brak ładowania skryptów śledzących bez zgody  

## Testowanie

### Scenariusze testowe
1. **Pierwsza wizyta** - banner powinien się pokazać
2. **Akceptacja wszystkich** - wszystkie skrypty powinny się załadować
3. **Odrzucenie wszystkich** - tylko niezbędne cookies
4. **Wybór kategorii** - tylko wybrane skrypty się ładują
5. **Zmiana ustawień** - możliwość modyfikacji w każdym momencie
6. **Wersjonowanie** - aktualizacja polityki powoduje ponowny banner

### Developer Tools
- Sprawdź localStorage dla klucza `jacht-plast-cookie-consent`
- Monitoruj Network tab czy skrypty GA ładują się zgodnie z preferencjami
- Sprawdź Console dla błędów

## Konfiguracja

### Identyfikatory Google
- Google Analytics: `UA-180598229-1`
- Google Ads: `AW-16661980602`
- Konwersje: `AW-16661980602/TVtLCOGw3McZELrLhok-`

### Czas przechowywania
- Cookies sesji: do zamknięcia przeglądarki
- Cookies niezbędne: 12 miesięcy
- Cookies analityczne: 24 miesiące
- Cookies marketingowe: 24 miesiące

## Aktualizacje

Przy aktualizacji polityki cookies:
1. Zaktualizuj `COOKIE_CONSENT_VERSION` w `useCookieConsent.ts`
2. Zaktualizuj datę w `/pages/polityka-cookies.tsx`
3. Użytkownicy zobaczą ponownie banner przy następnej wizycie
