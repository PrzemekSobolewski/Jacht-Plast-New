import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaBuilding
} from "react-icons/fa";
import { HeaderNav } from "@/components/Header/HeaderNav";
import { Footer } from "@/components/Footer/Footer";
import { Container } from "@/components/Container/Container.styles";
import {
  ContactPageContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  ContactSection,
  ContactGrid,
  MapSection,
  MapContainer,
  MapWrapper,
  InfoCard,
  InfoIcon,
  InfoTitle,
  InfoText,
  SectionTitle,
  SectionSubtitle
} from "@/modules/ContactPage/ContactPage.styles";

export default function Kontakt() {
  const { trackPhoneClick, trackEmailClick } = useGoogleAnalytics();
  
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [mapRef, mapInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handlePhoneClick = () => {
    trackPhoneClick();
  };

  const handleEmailClick = () => {
    trackEmailClick();
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontakt - Jacht Plast",
    "description": "Skontaktuj się z firmą Jacht Plast. Profesjonalna produkcja jachtów, transport i laminaty kompozytowe.",
    "mainEntity": {
      "@type": "Organization",
      "name": "PHUP Jacht-Plast",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ul. Przemysłowa 4",
        "addressLocality": "Drzewica",
        "postalCode": "26-340",
        "addressCountry": "PL"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+48-601-256-133",
        "contactType": "customer service",
        "email": "jachtplast@gmail.com",
        "availableLanguage": "Polish"
      },
      "openingHours": "Mo-Fr 08:00-17:00"
    }
  };

  return (
    <>
      <Head>
        <title>Kontakt - Jacht Plast | Produkcja i Transport Jachtów</title>
        <meta 
          name="description" 
          content="Skontaktuj się z firmą Jacht Plast. Oferujemy profesjonalną produkcję jachtów, transport jachtów oraz laminaty kompozytowe. Drzewica, ul. Przemysłowa 4." 
        />
        <meta 
          name="keywords" 
          content="kontakt jacht plast, produkcja jachtów kontakt, transport jachtów drzewica, laminaty kompozytowe kontakt, stocznia polska" 
        />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Kontakt - Jacht Plast | Produkcja i Transport Jachtów" />
        <meta property="og:description" content="Skontaktuj się z firmą Jacht Plast. Profesjonalna produkcja jachtów, transport jachtów oraz laminaty kompozytowe." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jacht-plast.pl/kontakt" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.jacht-plast.pl/kontakt" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "PHUP Jacht-Plast",
              "image": "https://www.jacht-plast.pl/images/logo.png",
              "telephone": "+48-601-256-133",
              "email": "jachtplast@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ul. Przemysłowa 4",
                "addressLocality": "Drzewica",
                "postalCode": "26-340",
                "addressCountry": "PL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.4492078,
                "longitude": 20.4618076
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "17:00"
              }
            }),
          }}
        />
      </Head>

      <HeaderNav />
      
      <ContactPageContainer>
        {/* Hero Section */}
        <HeroSection ref={heroRef}>
          <Container>
            <HeroContent>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <HeroTitle>Kontakt</HeroTitle>
                <HeroSubtitle>
                  Jesteśmy do Twojej dyspozycji
                </HeroSubtitle>
              </motion.div>
            </HeroContent>
          </Container>
        </HeroSection>

        {/* Contact Info Section */}
        <ContactSection>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SectionTitle>Informacje Kontaktowe</SectionTitle>
              <SectionSubtitle>
                Skontaktuj się z nami w dogodny dla Ciebie sposób
              </SectionSubtitle>
            </motion.div>

            <ContactGrid>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <InfoCard>
                  <InfoIcon>
                    <FaPhone />
                  </InfoIcon>
                  <InfoTitle>Telefon</InfoTitle>
                  <InfoText>
                    <a href="tel:+48601256133" onClick={handlePhoneClick}>+48 601 256 133</a>
                  </InfoText>
                </InfoCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <InfoCard>
                  <InfoIcon>
                    <FaEnvelope />
                  </InfoIcon>
                  <InfoTitle>Email</InfoTitle>
                  <InfoText>
                    <a href="mailto:jachtplast@gmail.com" onClick={handleEmailClick}>
                      jachtplast@gmail.com
                    </a>
                  </InfoText>
                </InfoCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <InfoCard>
                  <InfoIcon>
                    <FaMapMarkerAlt />
                  </InfoIcon>
                  <InfoTitle>Adres</InfoTitle>
                  <InfoText>
                    ul. Przemysłowa 4<br />
                    26-340 Drzewica<br />
                    Polska
                  </InfoText>
                </InfoCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <InfoCard>
                  <InfoIcon>
                    <FaClock />
                  </InfoIcon>
                  <InfoTitle>Godziny Pracy</InfoTitle>
                  <InfoText>
                    Poniedziałek - Piątek<br />
                    8:00 - 17:00
                  </InfoText>
                </InfoCard>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <InfoCard>
                  <InfoIcon>
                    <FaBuilding />
                  </InfoIcon>
                  <InfoTitle>Dane Firmy</InfoTitle>
                <InfoText>
                  <strong>PHUP JACHT-PLAST</strong><br />
                  NIP: 799-13-31-976<br />
                  REGON: 100284787
                </InfoText>
              </InfoCard>
              </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
              <InfoCard>
                <InfoIcon>
                  <FaMapMarkerAlt />
                </InfoIcon>
                <InfoTitle>Lokalizacja</InfoTitle>
                <InfoText>
                  Nasza firma znajduje się<br />
                  w Drzewicy, w województwie<br />
                  łódzkim, przy drodze krajowej.
                </InfoText>
              </InfoCard>
              </motion.div>
            </ContactGrid>
          </Container>
        </ContactSection>

        {/* Map Section */}
        <MapSection ref={mapRef}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mapInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle>Znajdź Nas</SectionTitle>
              <SectionSubtitle>
                PHUP Jacht-Plast, ul. Przemysłowa 4, 26-340 Drzewica
              </SectionSubtitle>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={mapInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <MapContainer>
                <MapWrapper>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9945.949450330274!2d20.4618076!3d51.4492078!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x72536c3f299847fc!2sPHUP%20JACHT-PLAST!5e0!3m2!1spl!2spl!4v1571140334742!5m2!1spl!2spl"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokalizacja PHUP Jacht-Plast"
                    aria-label="Mapa Google pokazująca lokalizację firmy PHUP Jacht-Plast w Drzewicy"
                  />
                </MapWrapper>
              </MapContainer>
            </motion.div>
          </Container>
        </MapSection>
      </ContactPageContainer>

      <Footer />
    </>
  );
}
