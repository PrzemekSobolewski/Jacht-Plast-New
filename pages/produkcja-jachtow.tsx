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
    description: "Sportowa łódź motorowa z 2009 roku z napędem strumieniowym Scott i silnikiem Volvo Penta. NAVIA oferuje duży pokład dla 10 osób oraz komfortową kabinę z łóżkiem dla 3-4 osób.",
    specifications: {
      length: "7.5 m",
      beam: "2.99 m",
      draft: "0.3 m",
      berths: "3-4",
      capacity: "10 osób"
    },
    features: [
      "Trymklapy dla optymalnej pracy kadłuba",
      "Głębokościomierz i temperatura wody Raymarine",
      "Duży pokład na 10 osób",
      "Komfortowa kabina z łóżkiem dla 3-4 osób",
      "Kompaktowe wymiary: 7.5m x 2.99m",
      "Sportowy charakter łodzi motorowej",
      "Doskonała do rekreacji wodnej"
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
    description: "Kompaktowy cruiser o długości 7 metrów, idealny do żeglugi przybrzeżnej i wypraw weekendowych. LAGUNA 700 oferuje doskonałe proporcje i komfortowe warunki dla załogi 5-6 osób.",
    specifications: {
      length: "7.00 m",
      beam: "2.49 m",
      draft: "0.40 m",
      engine: "8 - 30 KM",
      berths: "5-6",
      cabinHeight: "2.00 m",
      category: "C lub B"
    },
    features: [
      "Kompaktowe wymiary - długość 7m, szerokość 2.49m",
      "Płytkie zanurzenie 0.40m - dostęp do płytkich akwenów",
      "Wysoka kabina 2.00m zapewniająca komfort",
      "Elastyczna moc silnika 8-30 KM",
      "Miejsce dla 5-6 osób na pokładzie",
      "Kategoria projektowa C lub B",
      "Idealne proporcje dla cruisingu",
      "Doskonałe właściwości morskie",
      "Komfortowe warunki na pokładzie",
      "Wszechstronne zastosowanie",
      "Łatwość manewrowania",
      "Ekonomiczne zużycie paliwa"
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
    description: "Nowoczesny cruiser motorowy zaprojektowany z myślą o komforcie i funkcjonalności. NAVIGATHOR 30 oferuje dwie zamykane sypialnie i wysoką kabinę dla załogi 6 osób.",
    specifications: {
      length: "8.4 m",
      beam: "3.2 m",
      draft: "0.6 m",
      engine: "30 KM",
      berths: "4+2",
      cabinHeight: "2.0 m"
    },
    features: [
      "Nowoczesny cruiser motorowy dla 6 osób",
      "Dwie zamykane sypialnie dla prywatności",
      "Wysoka kabina 2.0m zapewniająca komfort",
      "Silnik 30 KM o optymalnej mocy",
      "Głębinowy ster z kołem sterowym",
      "Układ koi 4+2 dla różnych potrzeb",
      "Płytkie zanurzenie 0.6m",
      "Szeroka konstrukcja 3.2m dla stabilności",
      "Doskonałe warunki bytowe",
      "Funkcjonalne rozplanowanie wnętrza",
      "Łatwość obsługi i manewrowania",
      "Idealne do cruisingu przybrzeżnego"
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
    description: "Luksusowy jacht motorowy o imponujących rozmiarach, zaprojektowany dla najbardziej wymagających armatorów. ILLUMINATUS oferuje przestronne wnętrze z trzema zamykanymi sypialniami i najwyższą jakość wykończenia dla załogi 7 osób.",
    specifications: {
      length: "12.22 m",
      beam: "3.4 m",
      draft: "0.8 / 1.0 m",
      fuel: "330 l",
      water: "440 l",
      berths: "6+1",
      cabinHeight: "1.9 m",
      wasteWater: "560 l"
    },
    features: [
      "Luksusowy jacht motorowy o imponujących rozmiarach",
      "Trzy zamykane sypialnie dla maksymalnego komfortu",
      "Przestronne wnętrze z wysokością kabiny 1.9m",
      "Głębinowy ster z kołem sterowym",
      "Duże zbiorniki: woda 440l, paliwo 330l",
      "Zbiornik fekaliów 560l dla długich rejsów",
      "Optymalne zanurzenie 0.8-1.0m",
      "Układ koi 6+1 dla załogi 7 osób",
      "Najwyższa jakość wykończenia",
      "Doskonałe warunki bytowe",
      "Idealne proporcje długości do szerokości"
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
    description: "Przestronny jacht żaglowy z obrotowym mieczem, oferujący komfortowe warunki dla załogi 10 osób. DREAMER łączy w sobie funkcjonalność żaglówki z wygodą trzech zamykanych sypialni.",
    specifications: {
      length: "9.69 m",
      beam: "2.98 m",
      draft: "0.46 / 1.65 m",
      berths: "8+2",
      cabinHeight: "1.9 m",
      sails: "39 m²"
    },
    features: [
      "Przestronny jacht żaglowy dla 10 osób",
      "Trzy zamykane sypialnie dla maksymalnego komfortu",
      "Obrotowy miecz dla lepszej manewrowości",
      "Głębinowy ster z kołem sterowym",
      "Wysokość kabiny 1.9m zapewniająca komfort",
      "Powierzchnia żagli 39 m² dla doskonałych osiągów",
      "Układ koi 8+2 dla dużej załogi",
      "Zanurzenie zmienne 0.46-1.65m",
      "Optymalne proporcje kadłuba",
      "Doskonałe warunki bytowe",
      "Funkcjonalność żaglówki z komfortem jachtu"
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
    description: "Elegancki jacht żaglowy łączący klasyczną linię kadłuba z nowoczesnym wykonaniem. MAGNAM oferuje wysmakowane wnętrze, doskonałe warunki bytowe i przyjemność żeglowania dla załogi 2-8 osób w zależności od wersji.",
    specifications: {
      length: "8.18 m",
      beam: "2.98 m",
      draft: "0.46 / 1.63 m",
      displacement: "od 3500 kg",
      engine: "max 22,1 kW",
      ballast: "880 / 120 kg",
      berths: "6+1",
      cabinHeight: "1.87 m",
      sails: "21.3 / 14.5 m²",
      category: "B"
    },
    features: [
      "Klasyczna linia kadłuba w nowoczesnym wykonaniu",
      "Przestronny salon z dobrze wyposażonym kambuzem",
      "Dwie zamykane kabiny: dziobowa i rufowa",
      "Duża kabina sanitarna z WC i prysznicem",
      "Ergonomiczny kokpit z wysokimi oparciami",
      "Zamykana platforma rufowa dla bezpieczeństwa",
      "Doskonała wentylacja całego jachtu",
      "Łatwy dostęp do osprzętu pokładowego",
      "Duża ilość schowków i miejsca do przechowywania",
      "Dostępny w wersjach: mieczowej, falszkilowej i kilowej",
      "Kategoria projektowa B lub C",
      "Optymalizowany dla 2-4 osób (wersja armatorska) lub 6-8 osób (czarter)"
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
    description: "Kompaktowy jacht żaglowy idealny do transportu i łatwego prowadzenia. VERSUS łączy w sobie bezpieczeństwo, doskonałe parametry nautyczne i luksusowe wykończenie, oferując wygodne warunki dla załogi 5-6 osób.",
    specifications: {
      length: "7.50 m",
      beam: "2.54 m",
      draft: "0.35 / 1.51 m",
      displacement: "2460 kg",
      engine: "max 14.7 kW",
      ballast: "500 / 120 kg",
      berths: "5-6",
      cabinHeight: "1.85 m",
      sails: "20.5 / 13.2 m²",
      category: "B / C"
    },
    features: [
      "Idealny do transportu - szerokość 2.49m bez specjalnych zezwoleń",
      "Łatwy w prowadzeniu nawet przez jedną osobę",
      "Dynamiczny i bezpieczny w żegludze",
      "Doskonałe parametry nautyczne",
      "Odwrócona dziobnica zapewniająca stabilność",
      "Doskonała widoczność z kokpitu",
      "Przestronna kabina sanitarna z WC i prysznicem",
      "Ergonomiczna kuchnia",
      "Luksusowo wykończone przestronne wnętrze",
      "Wygodne pełnowymiarowe koje",
      "Duża ilość miejsca do przechowywania",
      "Dostępny w wersjach: mieczowej, falszkilowej i kilowej",
      "Kategoria projektowa B lub C w zależności od balastowania"
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
    description: "Kompaktowy jacht żaglowy o klasycznej linii kadłuba z doskonałymi parametrami nautycznymi. Dostępny w dwóch wersjach długości (6.84m i 7.20m), oferuje ergonomiczne wnętrze i łatwość transportu dla załogi 4-6 osób.",
    specifications: {
      length: "6.84 m / 7.20 m",
      beam: "2.53 m",
      draft: "0.3 / 1.4 m",
      displacement: "1700 kg",
      engine: "max 16 kW",
      ballast: "400 / 90 kg",
      berths: "4-6",
      cabinHeight: "1.72 m",
      sails: "13.4 / 9.2 m²",
      category: "B / C"
    },
    features: [
      "Idealny do transportu - szerokość kadłuba 2.50m",
      "Łatwy transport po Europie bez specjalnych zezwoleń",
      "Klasyczna linia kadłuba",
      "Doskonałe parametry nautyczne",
      "Doskonała ergonomia",
      "Otwarty koncept zabudowy wnętrza",
      "Możliwość wydzielenia zamykanej kabiny dziobowej",
      "Wydzielona kabina sanitarna z WC i prysznicem",
      "Wygodne pełnowymiarowe koje dla 4 osób",
      "Bezpieczny, ergonomiczny kokpit",
      "Świetna wentylacja jachtu",
      "Dostępny w wersjach: mieczowej, falszkilowej i kilowej",
      "Kategoria projektowa B lub C",
      "Dwie wersje długości: 6.84m i 7.20m"
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
    description: "Kompaktowy jacht żaglowy o niewielkiej klasycznej sylwetce z nowoczesnym przestronnym wnętrzem. MASTER oferuje zwinność w żegludze, bezpieczeństwo i doskonałą ergonomię dla załogi 4 osób.",
    specifications: {
      length: "5.50 m",
      beam: "2.50 m",
      draft: "0.29 / 1.3 m",
      displacement: "1280 kg",
      engine: "14.7 kW",
      ballast: "250 / 70 kg",
      berths: "4",
      cabinHeight: "1.72 m",
      sails: "13 / 7.5 m²",
      category: "C"
    },
    features: [
      "Niewielka klasyczna sylwetka",
      "Nowoczesne przestronne wnętrze",
      "Zwinność podczas żeglugi",
      "Wysoki poziom bezpieczeństwa",
      "Doskonała ergonomia",
      "Kabina sanitarna z WC",
      "Mesa z doskonale wyposażonym kambuzem",
      "Pełnowymiarowe koje dla 4 osób",
      "Wygodny i bezpieczny kokpit",
      "Certyfikacja P20 - żegluga do 20 mil od brzegu",
      "Certyfikat CE Germanischer Lloyd",
      "Przeznaczony na wody śródlądowe i morza",
      "Dostępny w wersji mieczowej",
      "Wersja kilowa w przygotowaniu"
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
    "description": "Profesjonalna produkcja luksusowych jachtów motorowych. Oferujemy pełną gamę modeli od sportowych cruiserów po luksusowe jachty.",
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
          content="produkcja jachtów, jachty motorowe, NAVIA, LAGUNA, ILLUMINATUS, jachty, luxury yachts, custom yachts" 
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Produkcja Jachtów | Luksusowe Jachty Motorowe | Jacht-Plast" />
        <meta property="og:description" content="Ekskluzywna kolekcja luksusowych jachtów motorowych. Od sportowych cruiserów po jachty oceaniczne." />
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
                  Od kompaktowych cruiserów po luksusowe jachty - nasze portfolio obejmuje 
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
