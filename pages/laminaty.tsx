import React, { useRef, useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  FaCog, 
  FaIndustry, 
  FaCheckCircle, 
  FaClock,
  FaPhone,
  FaEnvelope,
  FaTools,
  FaShieldAlt,
  FaRuler,
  FaPalette,
  FaTimes,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import { HeaderNav } from '@/components/Header/HeaderNav';
import { Footer } from '@/components/Footer/Footer';
import { Container } from '@/components/Container/Container.styles';
import {
  LaminatesPageContainer,
  ServicesSection,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  AboutSection,
  AboutContent,
  AboutGrid,
  AboutTextCard,
  AboutImageCard,
  ProcessSection,
  ProcessGrid,
  ProcessStep,
  StepNumber,
  StepTitle,
  StepDescription,
  SpecsSection,
  SpecsGrid,
  SpecCard,
  SpecIcon,
  SpecTitle,
  SpecDescription,
  GallerySection,
  GalleryGrid,
  GalleryItem,
  GalleryImage,
  ContactSection,
  ContactCard,
  ContactInfo,
  ContactButton,
  LightboxOverlay,
  LightboxContent,
  LightboxImage,
  LightboxClose,
  LightboxNav,
  LightboxCounter
} from '@/modules/LaminatesPage/LaminatesPage.styles';
import { FeatureItem, FeaturesList, HeroContent, HeroSection, HeroSubtitle, HeroTitle, SectionSubtitle, SectionTitle } from '@/components/common';

const LaminatyPage: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const processRef = useRef(null);
  const specsRef = useRef(null);
  const galleryRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" });
  const isSpecsInView = useInView(specsRef, { once: true, margin: "-100px" });
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  // Zdjęcia laminatów
  const laminatesImages = [
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-23.jpg", alt: "Realizacja laminatów - zdjęcie 1" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-24.jpg", alt: "Realizacja laminatów - zdjęcie 2" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-24_1.jpg", alt: "Realizacja laminatów - zdjęcie 3" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-24_2.jpg", alt: "Realizacja laminatów - zdjęcie 4" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-24_3.jpg", alt: "Realizacja laminatów - zdjęcie 5" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-24_4.jpg", alt: "Realizacja laminatów - zdjęcie 6" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-24_5.jpg", alt: "Realizacja laminatów - zdjęcie 7" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-24_6.jpg", alt: "Realizacja laminatów - zdjęcie 8" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-25.jpg", alt: "Realizacja laminatów - zdjęcie 9" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-25_1.jpg", alt: "Realizacja laminatów - zdjęcie 10" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-25_2.jpg", alt: "Realizacja laminatów - zdjęcie 11" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-25_3.jpg", alt: "Realizacja laminatów - zdjęcie 12" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-25_4.jpg", alt: "Realizacja laminatów - zdjęcie 13" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-25_5.jpg", alt: "Realizacja laminatów - zdjęcie 14" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-25_6.jpg", alt: "Realizacja laminatów - zdjęcie 15" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-25_7.jpg", alt: "Realizacja laminatów - zdjęcie 16" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-25_8.jpg", alt: "Realizacja laminatów - zdjęcie 17" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-26.jpg", alt: "Realizacja laminatów - zdjęcie 18" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-26_1.jpg", alt: "Realizacja laminatów - zdjęcie 19" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-26_2.jpg", alt: "Realizacja laminatów - zdjęcie 20" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-26_3.jpg", alt: "Realizacja laminatów - zdjęcie 21" },
    { src: "/images/laminaty/PHOTO-2025-09-07-12-00-26_4.jpg", alt: "Realizacja laminatów - zdjęcie 22" },
  ];

  const openLightbox = useCallback((index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % laminatesImages.length);
  }, [laminatesImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + laminatesImages.length) % laminatesImages.length);
  }, [laminatesImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextImage, prevImage]);

  const services = [
    {
      icon: <FaCog />,
      title: "Produkcja na Zamówienie",
      description: "Wykonujemy laminaty według indywidualnych specyfikacji i projektów klientów, dostosowując się do każdych wymagań."
    },
    {
      icon: <FaIndustry />,
      title: "Nowoczesne Technologie",
      description: "Wykorzystujemy najnowsze technologie laminowania i wysokiej jakości materiały kompozytowe."
    },
    {
      icon: <FaCheckCircle />,
      title: "Kontrola Jakości",
      description: "Każdy element przechodzi rygorystyczną kontrolę jakości, zapewniając najwyższe standardy wykonania."
    },
    {
      icon: <FaClock />,
      title: "Terminowość",
      description: "Dotrzymujemy uzgodnionych terminów realizacji, planując produkcję zgodnie z potrzebami klientów."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Konsultacja i Projekt",
      description: "Omawiamy wymagania, analizujemy projekt i dobieramy odpowiednie materiały oraz technologię."
    },
    {
      number: "02", 
      title: "Przygotowanie Formy",
      description: "Tworzymy lub przygotowujemy formę do laminowania zgodnie z projektem i specyfikacją."
    },
    {
      number: "03",
      title: "Proces Laminowania", 
      description: "Wykonujemy laminat używając wysokiej jakości żywic i włókien, kontrolując każdy etap procesu."
    },
    {
      number: "04",
      title: "Wykończenie i Kontrola",
      description: "Dokonujemy wykończenia powierzchni, kontroli jakości i przygotowania do dostawy."
    }
  ];

  const specifications = [
    {
      icon: <FaRuler />,
      title: "Wymiary",
      description: "Wykonujemy laminaty o różnych wymiarach, dostosowanych do potrzeb projektu"
    },
    {
      icon: <FaShieldAlt />,
      title: "Wytrzymałość",
      description: "Wysokiej jakości materiały kompozytowe zapewniają doskonałą wytrzymałość mechaniczną"
    },
    {
      icon: <FaPalette />,
      title: "Wykończenie",
      description: "Różnorodne opcje wykończenia powierzchni - od matowego po wysokopolerowane"
    },
    {
      icon: <FaTools />,
      title: "Zastosowania",
      description: "Laminaty do przemysłu morskiego, automotive, budownictwa i innych branż"
    }
  ];

  const features = [
    "Wieloletnie doświadczenie w produkcji kompozytów",
    "Indywidualne podejście do każdego projektu",
    "Wysokiej jakości materiały i żywice",
    "Nowoczesne technologie laminowania",
    "Kontrola jakości na każdym etapie",
    "Konkurencyjne ceny",
    "Terminowa realizacja zleceń",
    "Doradztwo techniczne"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Produkcja Laminatów na Zamówienie",
    "description": "Profesjonalna produkcja laminatów kompozytowych na zamówienie z wieloletnim doświadczeniem",
    "provider": {
      "@type": "Organization",
      "name": "Jacht Plast",
      "url": "https://www.jacht-plast.pl"
    },
    "areaServed": "Poland",
    "serviceType": "Manufacturing"
  };

  return (
    <>
      <Head>
        <title>Laminaty na Zamówienie - Produkcja Kompozytów | Jacht Plast</title>
        <meta 
          name="description" 
          content="Profesjonalna produkcja laminatów kompozytowych na zamówienie. Wysokiej jakości materiały, nowoczesne technologie i indywidualne podejście do każdego projektu." 
        />
        <meta 
          name="keywords" 
          content="laminaty na zamówienie, produkcja kompozytów, laminaty przemysłowe, materiały kompozytowe, laminowanie, żywice, włókna" 
        />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Laminaty na Zamówienie - Produkcja Kompozytów | Jacht Plast" />
        <meta property="og:description" content="Profesjonalna produkcja laminatów kompozytowych na zamówienie z wieloletnim doświadczeniem" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jacht-plast.pl/laminaty" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Laminaty na Zamówienie - Jacht Plast" />
        <meta name="twitter:description" content="Profesjonalna produkcja laminatów kompozytowych na zamówienie" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <LaminatesPageContainer>
        <HeaderNav />
        
        {/* Hero Section */}
        <HeroSection ref={heroRef}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <HeroContent>
                <HeroTitle>Laminaty na Zamówienie</HeroTitle>
                <HeroSubtitle>
                  Profesjonalna produkcja laminatów kompozytowych według 
                  indywidualnych specyfikacji i projektów
                </HeroSubtitle>
              </HeroContent>
            </motion.div>
          </Container>
        </HeroSection>

        {/* Services Section */}
        <ServicesSection ref={servicesRef}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle>Nasze Usługi</SectionTitle>
              <SectionSubtitle>
                Kompleksowa produkcja laminatów z zastosowaniem nowoczesnych technologii
              </SectionSubtitle>
            </motion.div>

            <ServicesGrid>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ServiceCard>
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
              <AboutGrid>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8 }}
                >
                  <AboutTextCard>
                    <SectionTitle>Doświadczenie w Produkcji Kompozytów</SectionTitle>
                    <h3>Specjalizujemy się w produkcji wysokiej jakości laminatów kompozytowych 
                    na zamówienie, łącząc tradycyjne rzemiosło z nowoczesnymi technologiami.</h3>
                    
                    <p>Nasza firma posiada wieloletnie doświadczenie w pracy z materiałami 
                    kompozytowymi, co pozwala nam realizować projekty o różnym stopniu 
                    złożoności. Współpracujemy z klientami z różnych branż, dostarczając 
                    rozwiązania dostosowane do ich specyficznych potrzeb.</p>
                    
                    <FeaturesList>
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <FeatureItem>
                            <FaCheckCircle />
                            {feature}
                          </FeatureItem>
                        </motion.div>
                      ))}
                    </FeaturesList>
                  </AboutTextCard>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <AboutImageCard>
                    <div className="placeholder">
                      <FaIndustry />
                      <p>Nowoczesna technologia laminowania</p>
                    </div>
                  </AboutImageCard>
                </motion.div>
              </AboutGrid>
            </AboutContent>
          </Container>
        </AboutSection>

        {/* Process Section */}
        <ProcessSection ref={processRef}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle>Proces Produkcji</SectionTitle>
              <SectionSubtitle>
                Precyzyjny proces produkcji gwarantujący najwyższą jakość produktu
              </SectionSubtitle>
            </motion.div>

            <ProcessGrid>
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <ProcessStep>
                    <StepNumber>{step.number}</StepNumber>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </ProcessStep>
                </motion.div>
              ))}
            </ProcessGrid>
          </Container>
        </ProcessSection>

        {/* Specifications Section */}
        <SpecsSection ref={specsRef}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isSpecsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle>Specyfikacja i Zastosowania</SectionTitle>
              <SectionSubtitle>
                Wszechstronne rozwiązania dla różnych branż i zastosowań
              </SectionSubtitle>
            </motion.div>

            <SpecsGrid>
              {specifications.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isSpecsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <SpecCard>
                    <SpecIcon>{spec.icon}</SpecIcon>
                    <SpecTitle>{spec.title}</SpecTitle>
                    <SpecDescription>{spec.description}</SpecDescription>
                  </SpecCard>
                </motion.div>
              ))}
            </SpecsGrid>
          </Container>
        </SpecsSection>

        {/* Gallery Section - Placeholder */}
        <GallerySection ref={galleryRef}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isGalleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle>Galeria Realizacji</SectionTitle>
              <SectionSubtitle>
                Zobacz nasze najnowsze realizacje w dziedzinie produkcji laminatów
              </SectionSubtitle>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isGalleryInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GalleryGrid>
                {laminatesImages.map((image, index) => (
                  <GalleryItem
                    key={index}
                    as={motion.div}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isGalleryInView ? { opacity: 1, scale: 1 } : {}}
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
            </motion.div>
          </Container>
        </GallerySection>

        {/* Contact Section */}
        <ContactSection>
          <Container>
            <SectionTitle>Skontaktuj się z nami</SectionTitle>
            <SectionSubtitle>
              Omówimy szczegóły Twojego projektu i przygotujemy indywidualną ofertę
            </SectionSubtitle>
            
            <ContactCard>
              <ContactInfo>
                <h3>Potrzebujesz laminatów na zamówienie?</h3>
                <p>
                  Skontaktuj się z nami, aby omówić wymagania projektu. 
                  Przygotujemy dla Ciebie indywidualną wycenę i doradzimy 
                  najlepsze rozwiązania techniczne.
                </p>
                
                <div>
                  <p><FaPhone /> +48 601 256 133</p>
                  <p><FaEnvelope /> jachtplast@gmail.com</p>
                </div>
              </ContactInfo>
              
              <ContactButton href="/kontakt">
                Zapytaj o Ofertę
              </ContactButton>
            </ContactCard>
          </Container>
        </ContactSection>

        <Footer />
      </LaminatesPageContainer>

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
                  src={laminatesImages[currentImage].src}
                  alt={laminatesImages[currentImage].alt}
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
                  {currentImage + 1} / {laminatesImages.length}
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

export default React.memo(LaminatyPage);
