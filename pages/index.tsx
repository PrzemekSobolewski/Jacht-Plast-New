import { HeaderNav } from "@/components/Header/HeaderNav";
import { MainPage } from "modules/MainPage/MainPage";
import Head from "next/head";
import dynamic from "next/dynamic";

// Lazy loading komponentów
const DynamicFooter = dynamic(() => import("@/components/Footer/Footer").then(mod => ({ default: mod.Footer })), {
  loading: () => <div style={{ height: '400px' }}>Ładowanie...</div>,
  ssr: true
});

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jacht Plast",
    "description": "Profesjonalna produkcja jachtów, transport jachtów i produkcja laminatów. Doświadczenie, jakość i niezawodność.",
    "url": "https://jacht-plast.pl",
    "logo": "https://jacht-plast.pl/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+48-601-256-133",
      "contactType": "customer service",
      "email": "jachtplast@gmail.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Przemysłowa 4",
      "addressLocality": "Drzewica",
      "postalCode": "26-340",
      "addressCountry": "PL"
    },
    "sameAs": [
      "https://www.facebook.com/jachtplast"
    ]
  };

  return (
    <>
      <Head>
        <title>Jacht Plast - Produkcja i Transport Jachtów | Laminaty FRP</title>
        <meta 
          name="description" 
          content="Jacht Plast - profesjonalna produkcja jachtów, transport jachtów oraz wytwarzanie laminatów kompozytowych. Doświadczenie od lat, najwyższa jakość usług w branży nautycznej." 
        />
        <meta 
          name="keywords" 
          content="produkcja jachtów, transport jachtów, laminaty kompozytowe, naprawa jachtów, FRP, żywica poliestrowa, Drzewica, polska stocznia" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Jacht Plast" />
        
        {/* Preload kluczowych zasobów */}
        <link rel="preload" href="/_next/static/css/app.css" as="style" />
        <link rel="preload" href="/images/ram-transport.webp" as="image" />
        <link rel="preload" href="/_next/static/chunks/framework.js" as="script" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Jacht Plast - Produkcja i Transport Jachtów" />
        <meta property="og:description" content="Profesjonalna produkcja jachtów, transport jachtów oraz wytwarzanie laminatów kompozytowych. Doświadczenie od lat." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jacht-plast.pl" />
        <meta property="og:image" content="https://jacht-plast.pl/images/logo.png" />
        <meta property="og:locale" content="pl_PL" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jacht Plast - Produkcja i Transport Jachtów" />
        <meta name="twitter:description" content="Profesjonalna produkcja jachtów, transport jachtów oraz wytwarzanie laminatów kompozytowych." />
        <meta name="twitter:image" content="https://jacht-plast.pl/images/logo.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://jacht-plast.pl" />
        
        {/* Favicon */}
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Additional SEO tags */}
        <meta name="geo.region" content="PL-26" />
        <meta name="geo.placename" content="Drzewica" />
        <meta name="geo.position" content="51.3833;20.0167" />
        <meta name="ICBM" content="51.3833, 20.0167" />
      </Head>
      <HeaderNav />
      <main>
        <MainPage />
      </main>
      <DynamicFooter />
    </>
  );
}
