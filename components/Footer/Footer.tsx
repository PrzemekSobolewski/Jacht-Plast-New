import { motion } from "framer-motion";
import { 
  FaFacebookSquare, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaAnchor,
  FaShip,
  FaCog
} from "react-icons/fa";
import { Container } from "../Container/Container.styles";
import {
  StyledFooter,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterText,
  ContactItem,
  SocialLinks,
  SocialLink,
  ServiceItem,
  FooterBottom,
  Copyright,
  BackToTop,
  CompanyInfo,
  ServicesGrid
} from "./Footer.styles";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <FooterSection>
            <FooterTitle>
              <FaAnchor />
              Jacht Plast
            </FooterTitle>
            <FooterText>
              Profesjonalna firma zajmująca się produkcją jachtów, transportem oraz 
              wytwarzaniem wysokiej jakości laminatów kompozytowych. 
              Działamy na rynku od lat, gwarantując najwyższą jakość usług.
            </FooterText>
            <CompanyInfo>
              <strong>PHUP JACHT-PLAST</strong><br />
              NIP: 799-13-31-976
            </CompanyInfo>
          </FooterSection>

          <FooterSection>
            <FooterTitle>
              <FaMapMarkerAlt />
              Kontakt
            </FooterTitle>
            <ContactItem>
              <FaPhone />
              <div>
                <strong>Telefon:</strong><br />
                <a href="tel:+48375673">+48 375 67 35</a><br />
                <a href="tel:+48601256133">+48 601 256 133</a>
              </div>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <div>
                <strong>Email:</strong><br />
                <a href="mailto:jachtplast@gmail.com">jachtplast@gmail.com</a>
              </div>
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt />
              <div>
                <strong>Adres:</strong><br />
                ul. Przemysłowa 4<br />
                26-340 Drzewica
              </div>
            </ContactItem>
            <ContactItem>
              <FaClock />
              <div>
                <strong>Godziny pracy:</strong><br />
                Poniedziałek - Piątek<br />
                8:00 - 17:00
              </div>
            </ContactItem>
          </FooterSection>

          <FooterSection>
            <FooterTitle>
              <FaCog />
              Nasze Usługi
            </FooterTitle>
            <ServicesGrid>
              <ServiceItem>
                <FaShip />
                <div>
                  <strong>Produkcja Jachtów</strong>
                  <p>Projektowanie i budowa jachtów na zamówienie</p>
                </div>
              </ServiceItem>
              <ServiceItem>
                <FaAnchor />
                <div>
                  <strong>Transport Jachtów</strong>
                  <p>Bezpieczny transport jachtów po całej Europie</p>
                </div>
              </ServiceItem>
              <ServiceItem>
                <FaCog />
                <div>
                  <strong>Laminaty FRP</strong>
                  <p>Produkcja wysokiej jakości laminatów kompozytowych</p>
                </div>
              </ServiceItem>
              <ServiceItem>
                <FaCog />
                <div>
                  <strong>Serwis i Naprawa</strong>
                  <p>Kompleksowy serwis i naprawa jachtów</p>
                </div>
              </ServiceItem>
            </ServicesGrid>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Śledź Nas</FooterTitle>
            <FooterText>
              Bądź na bieżąco z naszymi projektami i nowościami w branży nautycznej.
            </FooterText>
            <SocialLinks>
              <SocialLink 
                href="https://www.facebook.com/jachtplast" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook Jacht Plast"
              >
                <FaFacebookSquare />
                Facebook
              </SocialLink>
            </SocialLinks>
            <BackToTop
              as={motion.button}
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Wróć na górę strony"
            >
              ↑ Na górę
            </BackToTop>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © {currentYear} Jacht Plast. Wszystkie prawa zastrzeżone. 
            Projektowanie i produkcja jachtów oraz laminatów kompozytowych.
          </Copyright>
        </FooterBottom>
      </Container>
    </StyledFooter>
  );
};
