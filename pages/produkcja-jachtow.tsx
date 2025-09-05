import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import * as S from '../modules/ProductionPage/ProductionPage.styles';
import { Container } from '../components/Container/Container.styles';
import { HeaderNav } from '../components/Header/HeaderNav';
import { Footer as FooterComponent } from '../components/Footer/Footer';
import  YachtModelCard  from '../components/YachtModelCard/YachtModelCard';
import type { YachtModelData } from '../types/YachtModel';

// Komponenty Header i Footer

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

// Lightbox z obsługą klawiatury
const Lightbox: React.FC<LightboxProps> = ({ isOpen, images, currentIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <S.LightboxContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
          <S.LightboxImage>
            <Image
              src={images[currentIndex]}
              alt={`Produkcja jachtu ${currentIndex + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              sizes="90vw"
              priority
            />
          </S.LightboxImage>
          
          <S.LightboxControls>
            <S.LightboxButton onClick={onPrev}>
              ←
            </S.LightboxButton>
            <S.LightboxCounter>
              {currentIndex + 1} / {images.length}
            </S.LightboxCounter>
            <S.LightboxButton onClick={onNext}>
              →
            </S.LightboxButton>
          </S.LightboxControls>
          
          <S.LightboxClose onClick={onClose}>
            ✕
          </S.LightboxClose>
        </S.LightboxContent>
      </motion.div>
    </AnimatePresence>
  );
};

const yachtModels: YachtModelData[] = [
  {
    name: "NAVIA",
    folder: "navia",
    description: "Elegancki jacht motorowy zaprojektowany z myślą o komforcie i stylu. NAVIA łączy w sobie nowoczesne rozwiązania techniczne z klasyczną estetyką, oferując wyjątkowe doświadczenia na wodzie.",
    specifications: {
      length: "10.5 m",
      beam: "3.2 m",
      draft: "0.9 m",
      displacement: "4.5 t",
      engine: "2 x 150 KM",
      fuel: "800 l",
      water: "200 l",
      berths: "6+2"
    },
    features: [
      "Dwusilnikowy napęd diesla",
      "Przestronny kokpit z teak-deckiem",
      "Klimatyzacja w całej jednostce",
      "Nowoczesny system nawigacji",
      "Pełne wyposażenie kuchni",
      "Luksusowe wykończenia wnętrza"
    ],
    images: [],
    imageNames: [
        "navia_1.jpg",
        "navia_2.jpg",
        "navia_3.jpg",
        "navia_4.jpg",
        "navia_5.jpg",
        "navia_6.jpg",
        "navia_7.jpg",
        "navia_8.jpg",
        "navia_9.JPG",
        "navia_10.JPG",
        "navia_11.JPG",
    ],
  },
  {
    name: "LAGUNA 700 Cruiser",
    folder: "laguna",
    description: "Wszechstronny cruiser idealny do długich rejsów i eksplloracji. LAGUNA 700 oferuje doskonałe właściwości morskie oraz komfortowe warunki życia na pokładzie.",
    specifications: {
      length: "21.3 m",
      beam: "5.5 m",
      draft: "1.4 m",
      displacement: "18 t",
      engine: "2 x 435 KM",
      fuel: "2000 l",
      water: "600 l",
      berths: "8+2"
    },
    features: [
      "Flybridge z jacuzzi",
      "Salon z panoramicznymi oknami",
      "VIP kabina właściciela",
      "Profesjonalne wyposażenie kuchni",
      "System stabilizacji Zero Speed",
      "Platforma kąpielowa hydrauliczna"
    ],
    images: [],
    imageNames: [
        "laguna_1.jpg",
        "laguna_2.jpg",
        "laguna_3.jpg",
        "laguna_4.jpg",
        "laguna_5.jpg",
        "laguna_6.jpg",
        "laguna_7.jpg",
        "laguna_8.jpg",
        "laguna_9.jpg",
    ]
  },
  {
    name: "NAVIGATHOR 30",
    folder: "navigathor",
    description: "Sportowy cruiser łączący osiągi z elegancją. NAVIGATHOR 30 to doskonały wybór dla miłośników dynamicznej żeglugi bez kompromisów w kwestii komfortu.",
    specifications: {
      length: "9.2 m",
      beam: "2.9 m",
      draft: "0.8 m",
      displacement: "3.2 t",
      engine: "1 x 250 KM",
      fuel: "400 l",
      water: "120 l",
      berths: "4+2"
    },
    features: [
      "Sportowy design hull",
      "Składany hardtop",
      "Ergonomiczny kokpit",
      "Kompaktowa kabina z pełnym wyposażeniem",
      "System audio Bose",
      "LED oświetlenie podwodne"
    ],
    images: [],
    imageNames: [
        "navigathor_1.webp",
        "navigathor_2.webp",
        "navigathor_3.webp",
        "navigathor_4.webp",
        "navigathor_5.webp",
        "navigathor_6.webp",
        "navigathor_7.webp",
        "navigathor_8.webp",
        "navigathor_9.webp",
    ]
  },
  {
    name: "TES 393 ILLUMINATUS",
    folder: "illuminatis",
    description: "Luksusowy jacht oceaniczny zaprojektowany dla najbardziej wymagających armatorów. ILLUMINATUS to połączenie najwyższej jakości wykonania z przełomowymi rozwiązaniami technicznymi.",
    specifications: {
      length: "39.3 m",
      beam: "8.2 m",
      draft: "2.8 m",
      displacement: "185 t",
      engine: "2 x 1800 KM",
      fuel: "15000 l",
      water: "2000 l",
      berths: "12+6"
    },
    features: [
      "Helipad na górnym pokładzie",
      "Spa z sauną i hammam",
      "Wine cellar z klimatyzacją",
      "Kino domowe z systemem 7.1",
      "Beach club z barM",
      "Garage dla tender 8m"
    ],
    images: [],
    imageNames: [
        "illuminatus_1.webp",
        "illuminatus_2.webp",
        "illuminatus_3.webp",
        "illuminatus_4.webp",
        "illuminatus_5.webp",
        "illuminatus_6.webp",
        "illuminatus_7.webp",
        "illuminatus_8.webp",
        "illuminatus_9.webp",
    ]
  },
  {
    name: "TES 32 DREAMER",
    folder: "dreamer",
    description: "Kompaktowy ale luksusowy cruiser idealny dla weekendowych escapad. DREAMER oferuje wszystkie udogodnienia większych jachtów w przystępnej formie.",
    specifications: {
      length: "10.8 m",
      beam: "3.4 m",
      draft: "1.1 m",
      displacement: "6.2 t",
      engine: "2 x 200 KM",
      fuel: "600 l",
      water: "180 l",
      berths: "6"
    },
    features: [
      "Retractable sunroof",
      "Outdoor galley na kokpicie",
      "Master cabin z en-suite",
      "Elektryczne windy kotwiczne",
      "Wodoodporny system audio",
      "Podświetlane schodki"
    ],
    images: [],
    imageNames: [
        "dreamer_1.webp",
        "dreamer_2.webp",
        "dreamer_3.webp",
        "dreamer_4.webp",
        "dreamer_5.webp",
    ]
  },
  {
    name: "TES 28 MAGNAM",
    folder: "magnam",
    description: "Sportowy day cruiser zaprojektowany dla maksymalnej przyjemności z żeglugi. MAGNAM to idealne połączenie wydajności i stylu.",
    specifications: {
      length: "8.6 m",
      beam: "2.7 m",
      draft: "0.7 m",
      displacement: "2.8 t",
      engine: "1 x 300 KM",
      fuel: "350 l",
      water: "80 l",
      berths: "4"
    },
    features: [
      "Carbon fiber akcenty",
      "Sportowe fotele z podgrzewaniem",
      "Premium sound system",
      "Składane siedzenia słoneczne",
      "Quickshift transmission",
      "RGB ambient lighting"
    ],
    images: [],
    imageNames: [
        "magnam_1.webp",
        "magnam_2.webp",
        "magnam_3.webp",
        "magnam_4.webp",
        "magnam_5.jpg",
        "magnam_6.jpg",
        "magnam_7.jpg",
        "magnam_8.webp",
        "magnam_9.webp",
        "magnam_10.webp"
    ]
  },
  {
    name: "TES 246 VERSUS",
    folder: "versus",
    description: "Nowoczesny family cruiser zaprojektowany z myślą o bezpieczeństwie i komforcie całej rodziny. VERSUS to idealny wybór na family adventures.",
    specifications: {
      length: "7.5 m",
      beam: "2.5 m",
      draft: "0.6 m",
      displacement: "2.1 t",
      engine: "1 x 200 KM",
      fuel: "250 l",
      water: "60 l",
      berths: "4"
    },
    features: [
      "Bezpieczne poręcze dla dzieci",
      "Antypoślizgowa powierzchnia",
      "Shower na platformie kąpielowej",
      "Lodówka z zamrażarką",
      "GPS z funkcją SOS",
      "Kanopy bimini"
    ],
    images: [],
    imageNames: [
        "versus_1.webp",
        "versus_2.webp",
        "versus_3.webp",
        "versus_4.webp",
        "versus_5.webp",
        "versus_6.webp",
        "versus_7.webp",
        "versus_8.webp"
    ]
  },
  {
    name: "TES 678 BT-TES 720",
    folder: "bt_tes",
    description: "Flagowy model łączący tradycyjne rzemiosło z najnowszymi technologiami. BT-TES 720 to szczyt inżynierii morskiej w ofercie stoczni.",
    specifications: {
      length: "22.0 m",
      beam: "5.8 m",
      draft: "1.6 m",
      displacement: "28 t",
      engine: "2 x 715 KM",
      fuel: "3000 l",
      water: "800 l",
      berths: "10+4"
    },
    features: [
      "Tri-deck configuration",
      "Owner's deck z jacuzzi",
      "Professional galley z chef station",
      "Crew quarters z separate entrance",
      "Stabilizatory fin",
      "Tender garage 6m"
    ],
    images: [],
    imageNames: [
        "20161221_152308.webp",
        "20161221_152450.webp",
        "20170119_145630.webp",
        "20170119_145652.webp",
        "20170120_141338.webp",
        "20170120_141427.webp",
        "20170411_113316.webp",
        "20180507_123208.webp",
    ]
  },
  {
    name: "TES 550 MASTER",
    folder: "master",
    description: "Wszechstronny motor yacht idealny do charter i prywatnego użytku. MASTER oferuje doskonały stosunek przestrzeni do długości.",
    specifications: {
      length: "16.8 m",
      beam: "4.9 m",
      draft: "1.3 m",
      displacement: "22 t",
      engine: "2 x 550 KM",
      fuel: "1800 l",
      water: "500 l",
      berths: "8+2"
    },
    features: [
      "Flybridge z wet bar",
      "Hydraulic swim platform",
      "Guest cabins z en-suite",
      "Skylounge z panoramic windows",
      "Bow thruster",
      "Generator 21kW"
    ],
    images: [],
    imageNames: [
        "master_1.webp",
        "master_2.webp",
        "master_3.webp",
        "master_4.webp",
        "master_5.webp",
        "master_6.webp",
        "master_7.webp",
    ]
  },
  {
    name: "Custom Projects",
    folder: "diffrent",
    description: "Unikalne projekty realizowane na indywidualne zamówienie klientów. Każdy projekt to wyjątkowa interpretacja marzeń o idealnym jachcie.",
    specifications: {
      length: "Na zamówienie",
      beam: "Na zamówienie",
      draft: "Na zamówienie"
    },
    features: [
      "Indywidualny design",
      "Custom layout",
      "Wybór materiałów premium",
      "Personalizowane wykończenia",
      "Unique features",
      "Full customization"
    ],
    images: []
  }
];

const ProdukcjaJachtowPage: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [modelsWithImages, setModelsWithImages] = useState<YachtModelData[]>([]);

  // Refs for animations
  const introRef = useRef(null);
  const navRef = useRef(null);
  const isIntroInView = useInView(introRef, { once: true, margin: "-100px" });
  const isNavInView = useInView(navRef, { once: true, margin: "-50px" });

  // Ref for scroll to model
  const modelRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Load images dynamically
  useEffect(() => {
    const loadImages = () => {
      const updatedModels = yachtModels.map(model => {
        const images: string[] = [];
        
        // Use predefined image names if available
        if (model.imageNames) {
          model.imageNames.forEach(imageName => {
            images.push(`/images/production/${model.folder}/${imageName}`);
          });
        }
        
        return { ...model, images };
      });
      
      setModelsWithImages(updatedModels);
    };

    loadImages();
  }, []);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  const scrollToModel = (modelName: string) => {
    const element = modelRefs.current[modelName];
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setSelectedModel(modelName);
    }
  };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Produkcja Jachtów - Jacht-Plast",
    "description": "Profesjonalna produkcja luksusowych jachtów motorowych. Oferujemy pełną gamę modeli od sportowych cruiserów po luksusowe superjachty.",
    "provider": {
      "@type": "Organization",
      "name": "Jacht-Plast",
      "url": "https://jacht-plast.pl"
    },
    "serviceType": "Yacht Manufacturing",
    "areaServed": "Europe",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Yacht Models",
      "itemListElement": modelsWithImages.map((model) => ({
        "@type": "Offer",
        "name": model.name,
        "description": model.description,
        "category": "Luxury Yacht"
      }))
    }
  };

  return (
    <>
      <Head>
        <title>Produkcja Jachtów | Luksusowe Jachty Motorowe | Jacht-Plast</title>
        <meta 
          name="description" 
          content="Profesjonalna produkcja luksusowych jachtów motorowych. Modele NAVIA, LAGUNA, ILLUMINATUS, DREAMER i inne. Najwyższa jakość wykonania i indywidualne projekty." 
        />
        <meta 
          name="keywords" 
          content="produkcja jachtów, jachty motorowe, NAVIA, LAGUNA, ILLUMINATUS, superjachty, luxury yachts, custom yachts" 
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Produkcja Jachtów | Luksusowe Jachty Motorowe | Jacht-Plast" />
        <meta property="og:description" content="Ekskluzywna kolekcja luksusowych jachtów motorowych. Od sportowych cruiserów po superjachty oceaniczne." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jacht-plast.pl/produkcja-jachtow" />
        <meta property="og:image" content="https://jacht-plast.pl/images/production/navia/1.webp" />
        <link rel="canonical" href="https://jacht-plast.pl/produkcja-jachtow" />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <HeaderNav />

      <S.Container>
        {/* Hero Section */}
        <S.HeroSection>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <S.HeroContent>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <S.HeroTitle>
                    Produkcja Jachtów
                  </S.HeroTitle>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <S.HeroSubtitle>
                    Tworzymy luksusowe jachty motorowe najwyższej jakości, łącząc tradycyjne rzemiosło z najnowszymi technologiami morskimi
                  </S.HeroSubtitle>
                </motion.div>
              </S.HeroContent>
            </motion.div>
          </Container>
        </S.HeroSection>

        <Container>
          {/* Introduction */}
          <S.IntroSection ref={introRef}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isIntroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <S.IntroText>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={isIntroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Nasze Portfolio Jachtów
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Jacht-Plast specjalizuje się w produkcji ekskluzywnych jachtów motorowych, 
                  które łączą w sobie elegancję, funkcjonalność i najwyższą jakość wykonania. 
                  Każdy model w naszej ofercie reprezentuje lata doświadczenia w branży morskiej 
                  oraz pasję do tworzenia wyjątkowych jednostek pływających.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Od kompaktowych cruiserów po luksusowe superjachty - nasze portfolio obejmuje 
                  szeroką gamę modeli dostosowanych do różnych potrzeb i oczekiwań armatorów.
                </motion.p>
              </S.IntroText>
            </motion.div>
          </S.IntroSection>
          </Container>

          {/* Model Navigation */}
          <S.ModelNavigation ref={navRef}>
            <S.ModelNavigationContent>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={isNavInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Wybierz Model
            </motion.h3>
            <S.ModelButtons>
              {modelsWithImages.map((model, index) => (
                <motion.div
                  key={model.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isNavInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: isNavInView ? index * 0.1 : 0,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <S.ModelButton
                    $active={selectedModel === model.name}
                    onClick={() => scrollToModel(model.name)}
                  >
                    {model.name}
                  </S.ModelButton>
                </motion.div>
              ))}
            </S.ModelButtons>
            </S.ModelNavigationContent>
          </S.ModelNavigation>
            <Container>
          {/* Yacht Models */}
          <S.ModelsSection>
            {modelsWithImages.map((model, modelIndex) => (
              <YachtModelCard
                key={model.name}
                model={model}
                index={modelIndex}
                isLast={modelIndex === modelsWithImages.length - 1}
                onImageClick={openLightbox}
                modelRefs={modelRefs}
              />
            ))}
          </S.ModelsSection>

         
        </Container>
         {/* Call to Action */}
          <S.CTASection>
            <S.CTAContent>
              <h2>Zainteresowany Naszymi Jachtami?</h2>
              <p>
                Skontaktuj się z nami, aby omówić szczegóły wybranego modelu, 
                możliwości customizacji lub realizację indywidualnego projektu.
              </p>
              <S.CTAButtons>
                <S.CTAButton href="/kontakt" $primary>
                  Skontaktuj się z nami
                </S.CTAButton>
                <S.CTAButton href="/transport-jachtow">
                  Zobacz Transport
                </S.CTAButton>
              </S.CTAButtons>
            </S.CTAContent>
          </S.CTASection>
      </S.Container>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={currentImageIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />

      <FooterComponent />
    </>
  );
};

export default React.memo(ProdukcjaJachtowPage);
