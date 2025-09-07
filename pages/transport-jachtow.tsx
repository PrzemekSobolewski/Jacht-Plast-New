import { useState, useEffect, memo } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics";
import { 
  FaTruck, 
  FaShieldAlt, 
  FaRoute, 
  FaPhone, 
  FaEnvelope,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaCheck,
  FaEuroSign,
  FaWeight,
  FaRuler
} from "react-icons/fa";
import { HeaderNav } from "@/components/Header/HeaderNav";
import { Footer } from "@/components/Footer/Footer";
import { Container } from "@/components/Container/Container.styles";
import {
  TransportPageContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  ServicesSection,
  SectionTitle,
  SectionSubtitle,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  GallerySection,
  GalleryGrid,
  GalleryItem,
  GalleryImage,
  LightboxOverlay,
  LightboxContent,
  LightboxImage,
  LightboxClose,
  LightboxNav,
  LightboxCounter,
  AboutSection,
  AboutContent,
  AboutText,
  FeaturesList,
  FeatureItem,
  SpecsSection,
  SpecsGrid,
  SpecCard,
  SpecIcon,
  SpecTitle,
  SpecValue,
  ContactSection,
  ContactCard,
  ContactInfo,
  ContactButton
} from "@/modules/TransportPage/TransportPage.styles";

// Galeria zdjęć
const transportImages = [
  { src: "/images/transport/1-transport.jpeg", alt: "Transport jachtu żaglowego" },
  { src: "/images/transport/12 - transport.jpeg", alt: "Profesjonalny transport łodzi" },
  { src: "/images/transport/123-transport.jpeg", alt: "Transport jachtu motorowego" },
  { src: "/images/transport/20170919_101948.webp", alt: "Transport jachtu - wrzesień 2017" },
  { src: "/images/transport/20180811_075157.webp", alt: "Poranek - transport jachtu" },
  { src: "/images/transport/20190304_124020.webp", alt: "Transport jachtu - marzec 2019" },
  { src: "/images/transport/20190410_131058.webp", alt: "Transport jachtu - kwiecień 2019" },
  { src: "/images/transport/20190415_074359.webp", alt: "Wczesny transport - kwiecień 2019" },
  { src: "/images/transport/20190424_134418.webp", alt: "Transport jachtu - kwiecień 2019" },
  { src: "/images/transport/20190425_085103.webp", alt: "Transport jachtu rano" },
  { src: "/images/transport/20190425_191434.webp", alt: "Transport jachtu wieczorem" },
  { src: "/images/transport/20190425_191515.webp", alt: "Wieczorny transport jachtu" },
  { src: "/images/transport/20190429_115653.webp", alt: "Transport jachtu - koniec kwietnia" },
  { src: "/images/transport/20190515_073912.webp", alt: "Wczesny transport - maj 2019" },
  { src: "/images/transport/20190523_095858.webp", alt: "Transport jachtu - maj 2019" },
  { src: "/images/transport/20190527_103133.webp", alt: "Transport jachtu - koniec maja" },
  { src: "/images/transport/20191004_101454.webp", alt: "Transport jachtu - październik 2019" },
  { src: "/images/transport/20191005_102032.webp", alt: "Transport jachtu - październik 2019" }
];

const TransportJachtowComponent = () => {
  const { trackEvent } = useGoogleAnalytics();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
    trackEvent('gallery_image_view', 'Transport Gallery', `Image ${index + 1}`);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % transportImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + transportImages.length) % transportImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const services = [
    {
      icon: <FaTruck />,
      title: "Transport Krajowy i Międzynarodowy",
      description: "Świadczymy usługi z zakresu krajowego i międzynarodowego transportu towarów. Obsługujemy całą Europę z pełnym ubezpieczeniem."
    },
    {
      icon: <FaShieldAlt />,
      title: "Profesjonalny i Ubezpieczony",
      description: "Zapewniamy w pełni profesjonalny i ubezpieczony transport jachtów żaglowych i łodzi motorowych oraz pojazdów."
    },
    {
      icon: <FaRoute />,
      title: "Elastyczne Opcje Transportu",
      description: "Dysponujemy samochodami dostosowanymi do przewozu jednostek do 12 m długości i masie 8 ton oraz mniejszych, poniżej 3,5 tony."
    },
    {
      icon: <FaCheck />,
      title: "Pełna Dokumentacja",
      description: "Posiadamy wymagane w transporcie drogowym zezwolenia i ubezpieczenia ładunku. Wszystkie formalności załatwiamy za Ciebie."
    }
  ];

  const specifications = [
    {
      icon: <FaRuler />,
      title: "Maksymalna Długość",
      value: "12 metrów"
    },
    {
      icon: <FaWeight />,
      title: "Maksymalna Masa",
      value: "8 ton"
    },
    {
      icon: <FaTruck />,
      title: "Flota Pojazdów",
      value: "Specialized trailers"
    },
    {
      icon: <FaEuroSign />,
      title: "Wycena",
      value: "Indywidualna"
    }
  ];

  const features = [
    "Wieloletnie doświadczenie w transporcie jachtów",
    "Pełne ubezpieczenie ładunku i odpowiedzialności cywilnej",
    "Specjalistyczne przyczepy do transportu jachtów",
    "Doświadczona kadra kierowców",
    "Elastyczne terminy realizacji",
    "Konkurencyjne ceny",
    "Obsługa całej Europy",
    "Pomoc w formalności celnych i dokumentacyjnych"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Transport Jachtów",
    "description": "Profesjonalny transport jachtów żaglowych i motorowych w Polsce i Europie",
    "provider": {
      "@type": "Organization",
      "name": "Jacht Plast",
      "url": "https://jacht-plast.pl"
    },
    "areaServed": "Europe",
    "serviceType": "Transport"
  };

  return (
    <>
      <Head>
        <title>Transport Jachtów - Profesjonalny Transport po Całej Europie | Jacht Plast</title>
        <meta 
          name="description" 
          content="Profesjonalny transport jachtów żaglowych i motorowych. Krajowy i międzynarodowy transport z pełnym ubezpieczeniem. Do 12m długości i 8 ton masy." 
        />
        <meta 
          name="keywords" 
          content="transport jachtów, transport łodzi, przewóz jachtów, transport morski, transport żaglówek, transport motorówek, Polska, Europa" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Transport Jachtów - Profesjonalny Transport po Całej Europie" />
        <meta property="og:description" content="Profesjonalny transport jachtów żaglowych i motorowych z pełnym ubezpieczeniem" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jacht-plast.pl/transport-jachtow" />
        <meta property="og:image" content="https://jacht-plast.pl/images/transport/1-transport.jpeg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Transport Jachtów - Jacht Plast" />
        <meta name="twitter:description" content="Profesjonalny transport jachtów po całej Europie" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <TransportPageContainer>
        <HeaderNav />
        
        {/* Hero Section */}
        <HeroSection ref={heroRef}>
          <Container>
            <HeroContent
              as={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <HeroTitle>Transport Jachtów</HeroTitle>
              <HeroSubtitle>
                Profesjonalny i bezpieczny transport jachtów żaglowych i motorowych 
                po całej Polsce i Europie
              </HeroSubtitle>
            </HeroContent>
          </Container>
        </HeroSection>

        {/* Services Section */}
        <ServicesSection ref={servicesRef}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle>Nasze Usługi Transportowe</SectionTitle>
              <SectionSubtitle>
                Kompleksowa obsługa transportu jachtów z wieloletnim doświadczeniem
              </SectionSubtitle>
            </motion.div>

            <ServicesGrid>
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  as={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </Container>
        </ServicesSection>

        {/* About Section */}
        <AboutSection>
          <Container>
            <AboutContent>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <SectionTitle>Doświadczenie i Profesjonalizm</SectionTitle>
                <AboutText>
                  <h3>Nasza firma posiada wieloletnie doświadczenie w budowie i naprawie 
                  jachtów żaglowych i motorowych, co daje nam wiedzę o potrzebach klientów 
                  zainteresowanych transportem swoich jednostek.</h3>
                  
                  <p>Dzięki naszemu doświadczeniu w branży nautycznej, rozumiemy jak cenne 
                  są Twoje jachty i łodzie. Każdy transport traktujemy z najwyższą starannością, 
                  zapewniając bezpieczeństwo i profesjonalną obsługę na każdym etapie.</p>
                </AboutText>
                
                <FeaturesList>
                  {features.map((feature, index) => (
                    <FeatureItem
                      key={index}
                      as={motion.li}
                      initial={{ opacity: 0, x: -20 }}
                      animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <FaCheck />
                      {feature}
                    </FeatureItem>
                  ))}
                </FeaturesList>
              </motion.div>
            </AboutContent>
          </Container>
        </AboutSection>

        {/* Specifications Section */}
        <SpecsSection>
          <Container>
            <SectionTitle>Specyfikacja Techniczna</SectionTitle>
            <SectionSubtitle>
              Parametry naszej floty transportowej
            </SectionSubtitle>
            
            <SpecsGrid>
              {specifications.map((spec, index) => (
                <SpecCard
                  key={index}
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <SpecIcon>{spec.icon}</SpecIcon>
                  <SpecTitle>{spec.title}</SpecTitle>
                  <SpecValue>{spec.value}</SpecValue>
                </SpecCard>
              ))}
            </SpecsGrid>
          </Container>
        </SpecsSection>

        {/* Gallery Section */}
        <GallerySection ref={galleryRef}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle>Galeria Transportów</SectionTitle>
              <SectionSubtitle>
                Zobacz nasze realizacje - każdy transport to historia sukcesu
              </SectionSubtitle>
            </motion.div>

            <GalleryGrid>
              {transportImages.map((image, index) => (
                <GalleryItem
                  key={index}
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  onClick={() => openLightbox(index)}
                >
                  <GalleryImage>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </GalleryImage>
                </GalleryItem>
              ))}
            </GalleryGrid>
          </Container>
        </GallerySection>

        {/* Contact Section */}
        <ContactSection>
          <Container>
            <SectionTitle>Skontaktuj się z nami</SectionTitle>
            <SectionSubtitle>
              Ustalamy indywidualne ceny w zależności od zakresu usługi
            </SectionSubtitle>
            
            <ContactCard>
              <ContactInfo>
                <h3>Potrzebujesz transportu jachtu?</h3>
                <p>
                  Skontaktuj się z nami telefonicznie lub mailowo. 
                  Odpowiadamy na wszystkie pytania i przygotowujemy 
                  indywidualną wycenę dla Twojego transportu.
                </p>
                
                <div>
                  <p><FaPhone /> +48 601 256 133</p>
                  <p><FaEnvelope /> jachtplast@gmail.com</p>
                </div>
              </ContactInfo>
              
              <ContactButton href="/kontakt">
                Uzyskaj Wycenę
              </ContactButton>
            </ContactCard>
          </Container>
        </ContactSection>

        <Footer />
      </TransportPageContainer>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <LightboxOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <LightboxContent
              as={motion.div}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <LightboxClose onClick={closeLightbox}>
                <FaTimes />
              </LightboxClose>
              
              <LightboxImage>
                <Image
                  src={transportImages[currentImage].src}
                  alt={transportImages[currentImage].alt}
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </LightboxImage>
              
              <LightboxNav>
                <button onClick={prevImage}>
                  <FaChevronLeft />
                </button>
                <LightboxCounter>
                  {currentImage + 1} / {transportImages.length}
                </LightboxCounter>
                <button onClick={nextImage}>
                  <FaChevronRight />
                </button>
              </LightboxNav>
            </LightboxContent>
          </LightboxOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(TransportJachtowComponent);
