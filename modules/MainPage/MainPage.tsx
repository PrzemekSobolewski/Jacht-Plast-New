import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaAnchor, 
  FaShip, 
  FaTruck, 
  FaCog, 
  FaChevronDown,
  FaPlay,
  FaCheck,
} from "react-icons/fa";
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  ScrollIndicator,
  ServicesSection,
  SectionTitle,
  SectionSubtitle,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  AboutSection,
  AboutContent,
  AboutText,
  AboutStats,
  StatItem,
  StatNumber,
  StatLabel,
  FeaturesList,
  FeatureItem,
  ContactSection,
  ContactCard,
  ContactInfo,
  MainContainer,
  VideoSection,
  VideoContainer,
  PlayButton,
  VideoOverlay
} from "./MainPage.style";
import { Container } from "@/components/Container/Container.styles";
import Image from "next/image";
import ramTransport from "@/public/images/ram-transport.webp";
import { CTAButton } from "@/components/common/Buttons.styles";

export const MainPage = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <FaShip />,
      title: "Produkcja Jachtów",
      description: "Projektowanie i budowa jachtów na indywidualne zamówienie z wykorzystaniem najnowszych technologii kompozytowych."
    },
    {
      icon: <FaTruck />,
      title: "Transport Jachtów",
      description: "Profesjonalny transport jachtów po całej Europie z pełnym ubezpieczeniem i najwyższymi standardami bezpieczeństwa."
    },
    {
      icon: <FaCog />,
      title: "Laminaty FRP",
      description: "Produkcja wysokiej jakości laminatów z włókna szklanego dla branży morskiej, automotive i przemysłowej."
    },
    {
      icon: <FaAnchor />,
      title: "Serwis i Naprawa",
      description: "Kompleksowy serwis, naprawa i modernizacja jachtów oraz elementów kompozytowych."
    }
  ];

  const features = [
    "Doświadczenie od wielu lat w branży nautycznej",
    "Najwyższa jakość materiałów i wykonania",
    "Indywidualne podejście do każdego projektu",
    "Certyfikowane procesy produkcyjne",
    "Transport z pełnym ubezpieczeniem",
    "Gwarancja na wszystkie usługi"
  ];

  return (
    <MainContainer>
      {/* Hero Section */}
      <HeroSection ref={heroRef}>
        <Container>
          <HeroContent>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <HeroTitle>
                Jacht Plast
                <span>Profesjonalna Produkcja i Transport Jachtów</span>
              </HeroTitle>
              <HeroSubtitle>
                Lider w dziedzinie kompozytów nautycznych
              </HeroSubtitle>
              <HeroDescription>
                Specjalizujemy się w produkcji jachtów, transporcie oraz wytwarzaniu 
                wysokiej jakości laminatów kompozytowych. Działamy z pasją od lat, 
                łącząc tradycyjne rzemiosło z nowoczesnymi technologiami.
              </HeroDescription>
              <CTAButton 
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToServices}
              >
                Poznaj Nasze Usługi
              </CTAButton>
            </motion.div>
          </HeroContent>
          
          <ScrollIndicator 
            as={motion.div}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToServices}
          >
            <FaChevronDown />
          </ScrollIndicator>
        </Container>
      </HeroSection>

      {/* Services Section */}
      <ServicesSection id="services" ref={servicesRef}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>Nasze Specjalizacje</SectionTitle>
            <SectionSubtitle>
              Kompleksowe usługi w branży nautycznej i kompozytowej
            </SectionSubtitle>
          </motion.div>

          <ServicesGrid>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard
                  as={motion.div}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceCard>
              </motion.div>
            ))}
          </ServicesGrid>
        </Container>
      </ServicesSection>

      {/* About Section */}
      <AboutSection ref={aboutRef}>
        <Container>
          <AboutContent>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle>O Firmie Jacht Plast</SectionTitle>
              <AboutText>
                <strong>PHUP Jacht-Plast</strong> to firma z wieloletnim doświadczeniem w branży 
                nautycznej, specjalizująca się w produkcji jachtów oraz elementów kompozytowych. 
                Nasze zaangażowanie w jakość i innowacje sprawia, że jesteśmy zaufanym partnerem 
                dla klientów z całej Europy.
              </AboutText>
              
              <FeaturesList>
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <FeatureItem>
                      <FaCheck />
                      {feature}
                    </FeatureItem>
                  </motion.div>
                ))}
              </FeaturesList>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AboutStats>
                <StatItem>
                  <StatNumber>15+</StatNumber>
                  <StatLabel>Lat Doświadczenia</StatLabel>
                </StatItem>
                <StatItem>
                  <StatNumber>500+</StatNumber>
                  <StatLabel>Zrealizowanych Projektów</StatLabel>
                </StatItem>
                <StatItem>
                  <StatNumber>100%</StatNumber>
                  <StatLabel>Zadowolonych Klientów</StatLabel>
                </StatItem>
              </AboutStats>

              <VideoSection>
                <VideoContainer>
                  <Image
                    src={ramTransport}
                    alt="Transport jachtów - Jacht Plast"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={false}
                    loading="lazy"
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
                  <VideoOverlay>
                    <PlayButton
                      as={motion.button}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaPlay />
                    </PlayButton>
                  </VideoOverlay>
                </VideoContainer>
              </VideoSection>
            </motion.div>
          </AboutContent>
        </Container>
      </AboutSection>

      {/* Contact Section */}
      <ContactSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle style={{ color: 'white' }}>
              Skontaktuj się z Nami
            </SectionTitle>
            <SectionSubtitle style={{ color: '#E8F4F8' }}>
              Jesteśmy gotowi pomóc w realizacji Twojego projektu
            </SectionSubtitle>

            <ContactCard>
              <ContactInfo>
                <h3>Zapraszamy do Kontaktu</h3>
                <p>
                  Nasz zespół ekspertów jest gotowy odpowiedzieć na Twoje pytania 
                  i pomóc w realizacji nawet najbardziej wymagających projektów.
                </p>
                <ul>
                  <li><strong>Telefon:</strong> +48 601 256 133</li>
                  <li><strong>Email:</strong> jachtplast@gmail.com</li>
                  <li><strong>Adres:</strong> ul. Przemysłowa 4, 26-340 Drzewica</li>
                </ul>
              </ContactInfo>
            </ContactCard>
          </motion.div>
        </Container>
      </ContactSection>
    </MainContainer>
  );
};
