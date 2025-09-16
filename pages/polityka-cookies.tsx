import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { HeaderNav } from '@/components/Header/HeaderNav';
import { Footer } from '@/components/Footer/Footer';
import { Container } from '@/components/Container/Container.styles';
import { HeroSection, HeroContent, HeroTitle, HeroSubtitle } from '@/components/common/HeroSection.styles';
import { 
  PRIMARY_BLUE, 
  NAVY, 
  GRAY, 
  WHITE, 
  OFF_WHITE, 
  ACCENT_BLUE,
  LIGHT_BLUE 
} from '@/styles/colors';

const PolicySection = styled.section`
  padding: 80px 0;
  background: ${WHITE};
`;

const PolicyContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const PolicyTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${NAVY};
  margin: 40px 0 20px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid ${ACCENT_BLUE};
`;

const PolicySubtitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${PRIMARY_BLUE};
  margin: 30px 0 15px 0;
`;

const PolicyText = styled.p`
  color: ${GRAY};
  line-height: 1.7;
  margin: 0 0 20px 0;
  font-size: 16px;
`;

const PolicyList = styled.ul`
  color: ${GRAY};
  line-height: 1.7;
  margin: 0 0 20px 0;
  padding-left: 20px;

  li {
    margin-bottom: 10px;
  }
`;

const InfoBox = styled.div`
  background: ${OFF_WHITE};
  border: 1px solid ${LIGHT_BLUE};
  border-radius: 12px;
  padding: 25px;
  margin: 30px 0;
  border-left: 4px solid ${ACCENT_BLUE};
`;

const ContactInfo = styled.div`
  background: ${PRIMARY_BLUE};
  color: ${WHITE};
  padding: 30px;
  border-radius: 12px;
  margin: 40px 0;
  text-align: center;

  h3 {
    color: ${WHITE};
    margin-bottom: 15px;
  }

  p {
    color: ${WHITE};
    opacity: 0.9;
    margin: 8px 0;
  }
`;

const LastUpdated = styled.div`
  background: ${OFF_WHITE};
  padding: 20px;
  border-radius: 8px;
  margin-top: 40px;
  text-align: center;
  font-size: 14px;
  color: ${GRAY};
`;

const PolitykaCookiesPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Polityka Cookies - Jacht Plast",
    "description": "Polityka prywatności i cookies firmy Jacht Plast. Dowiedz się jak wykorzystujemy pliki cookies na naszej stronie.",
    "url": "https://www.jacht-plast.pl/polityka-cookies",
    "mainEntity": {
      "@type": "Organization",
      "name": "PHUP Jacht-Plast"
    }
  };

  return (
    <>
      <Head>
        <title>Polityka Cookies - Jacht Plast</title>
        <meta 
          name="description" 
          content="Polityka prywatności i cookies firmy Jacht Plast. Dowiedz się jak wykorzystujemy pliki cookies i jak zarządzać preferencjami na naszej stronie." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.jacht-plast.pl/polityka-cookies" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <HeaderNav />

      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Polityka Cookies</HeroTitle>
            <HeroSubtitle>
              Informacje o wykorzystaniu plików cookies na stronie Jacht Plast
            </HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>

      <PolicySection>
        <Container>
          <PolicyContent>
            <PolicyTitle>1. Informacje ogólne</PolicyTitle>
            <PolicyText>
              Niniejsza Polityka Cookies wyjaśnia, jak firma PHUP Jacht-Plast z siedzibą w Drzewicy 
              przy ul. Przemysłowej 4, 26-340 Drzewica (dalej: &ldquo;my&rdquo;, &ldquo;nas&rdquo;, &ldquo;nasze&rdquo;) wykorzystuje 
              pliki cookies i podobne technologie na stronie internetowej jacht-plast.pl.
            </PolicyText>

            <PolicyTitle>2. Czym są pliki cookies?</PolicyTitle>
            <PolicyText>
              Pliki cookies to małe pliki tekstowe, które są zapisywane na Twoim urządzeniu 
              (komputerze, tablecie, smartfonie) podczas odwiedzania strony internetowej. 
              Pozwalają one stronie &ldquo;zapamiętać&rdquo; Twoje działania i preferencje przez określony 
              czas, dzięki czemu nie musisz wprowadzać ich ponownie przy każdej wizycie.
            </PolicyText>

            <PolicyTitle>3. Rodzaje wykorzystywanych cookies</PolicyTitle>
            
            <PolicySubtitle>3.1 Cookies niezbędne</PolicySubtitle>
            <PolicyText>
              Te pliki cookies są konieczne do prawidłowego funkcjonowania strony. 
              Nie można ich wyłączyć bez wpływu na funkcjonalność strony.
            </PolicyText>
            <PolicyList>
              <li>Cookies zarządzania sesjami użytkownika</li>
              <li>Cookies bezpieczeństwa</li>
              <li>Cookies preferencji językowych</li>
              <li>Cookies zarządzania zgodami</li>
            </PolicyList>

            <PolicySubtitle>3.2 Cookies analityczne</PolicySubtitle>
            <PolicyText>
              Pomagają nam zrozumieć, jak odwiedzający korzystają z naszej strony, 
              zbierając informacje anonimowo.
            </PolicyText>
            <PolicyList>
              <li>Google Analytics - analiza ruchu na stronie</li>
              <li>Dane o najpopularniejszych stronach</li>
              <li>Informacje o źródłach ruchu</li>
              <li>Statystyki czasu spędzonego na stronie</li>
            </PolicyList>

            <PolicySubtitle>3.3 Cookies marketingowe</PolicySubtitle>
            <PolicyText>
              Służą do wyświetlania reklam dopasowanych do Twoich zainteresowań.
            </PolicyText>
            <PolicyList>
              <li>Google Ads - reklamy w sieci Google</li>
              <li>Remarketing - wyświetlanie reklam na innych stronach</li>
              <li>Śledzenie konwersji z reklam</li>
            </PolicyList>

            <InfoBox>
              <PolicySubtitle>Ważna informacja</PolicySubtitle>
              <PolicyText style={{ margin: 0 }}>
                Cookies analityczne i marketingowe są wykorzystywane tylko wtedy, 
                gdy wyrazisz na to zgodę. Możesz w każdej chwili zmienić swoje preferencje 
                lub wycofać zgodę.
              </PolicyText>
            </InfoBox>

            <PolicyTitle>4. Zarządzanie cookies</PolicyTitle>
            <PolicyText>
              Możesz zarządzać swoimi preferencjami dotyczącymi cookies na kilka sposobów:
            </PolicyText>
            <PolicyList>
              <li>Za pomocą banera cookies na naszej stronie</li>
              <li>Poprzez ustawienia przeglądarki internetowej</li>
              <li>Kontaktując się z nami bezpośrednio</li>
            </PolicyList>

            <PolicySubtitle>4.1 Ustawienia przeglądarki</PolicySubtitle>
            <PolicyText>
              Większość przeglądarek automatycznie akceptuje pliki cookies, ale możesz 
              zmienić ustawienia, aby odrzucać cookies lub otrzymywać powiadomienia 
              przed ich zapisaniem:
            </PolicyText>
            <PolicyList>
              <li>Chrome: Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie</li>
              <li>Firefox: Ustawienia → Prywatność i bezpieczeństwo</li>
              <li>Safari: Preferencje → Prywatność</li>
              <li>Edge: Ustawienia → Pliki cookie i uprawnienia witryn</li>
            </PolicyList>

            <PolicyTitle>5. Zewnętrzne usługi</PolicyTitle>
            <PolicyText>
              Nasza strona wykorzystuje następujące zewnętrzne usługi, które mogą 
              ustawiać własne pliki cookies:
            </PolicyText>
            <PolicyList>
              <li>Google Analytics - analiza ruchu na stronie</li>
              <li>Google Ads - wyświetlanie i zarządzanie reklamami</li>
              <li>Google Fonts - czcionki internetowe</li>
            </PolicyList>

            <PolicyTitle>6. Okres przechowywania</PolicyTitle>
            <PolicyText>
              Różne rodzaje cookies są przechowywane przez różne okresy:
            </PolicyText>
            <PolicyList>
              <li>Cookies sesji - usuwane po zamknięciu przeglądarki</li>
              <li>Cookies niezbędne - do 12 miesięcy</li>
              <li>Cookies analityczne - do 24 miesięcy</li>
              <li>Cookies marketingowe - do 24 miesięcy</li>
            </PolicyList>

            <PolicyTitle>7. Twoje prawa</PolicyTitle>
            <PolicyText>
              Zgodnie z obowiązującymi przepisami masz prawo do:
            </PolicyText>
            <PolicyList>
              <li>Informacji o przetwarzanych danych</li>
              <li>Dostępu do swoich danych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Przenośności danych</li>
              <li>Sprzeciwu wobec przetwarzania</li>
              <li>Wycofania zgody w dowolnym momencie</li>
            </PolicyList>

            <PolicyTitle>8. Zmiany w polityce</PolicyTitle>
            <PolicyText>
              Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Cookies. 
              O wszelkich istotnych zmianach będziemy informować poprzez umieszczenie 
              odpowiedniego komunikatu na stronie internetowej.
            </PolicyText>

            <ContactInfo>
              <h3>Kontakt w sprawie cookies i prywatności</h3>
              <p>Email: jachtplast@gmail.com</p>
              <p>Telefon: +48 601 256 133</p>
              <p>Adres: ul. Przemysłowa 4, 26-340 Drzewica</p>
            </ContactInfo>

            <LastUpdated>
              <strong>Ostatnia aktualizacja:</strong> 7 września 2025
            </LastUpdated>
          </PolicyContent>
        </Container>
      </PolicySection>

      <Footer />
    </>
  );
};

export default PolitykaCookiesPage;
