import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@/components/common/GoogleAnalytics";
import { CookieBanner, CookieSettingsButton } from "@/components/CookieBanner";
import { CookieConsentProvider } from "@/contexts";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// Web Vitals monitoring
export function reportWebVitals() {
  if (process.env.NODE_ENV === 'production') {
    // Tutaj można dodać wysyłanie do analytics
  }
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        {/* Podstawowe meta tagi */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Jacht Plast" />
        <meta name="robots" content="index, follow" />
        
        {/* Theme colors for browsers */}
        <meta name="theme-color" content="#2b9bba" />
        <meta name="msapplication-TileColor" content="#1f4e79" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* Favicon - multiple formats for better compatibility */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/icon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icon-512x512.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS prefetch dla zewnętrznych domen */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Geolokalizacja firmy */}
        <meta name="geo.region" content="PL-26" />
        <meta name="geo.placename" content="Drzewica" />
        <meta name="geo.position" content="51.3833;20.0167" />
        <meta name="ICBM" content="51.3833, 20.0167" />
      </Head>
      <CookieConsentProvider>
        <GoogleAnalytics />
        <CookieBanner />
        <CookieSettingsButton />
        {getLayout(<Component {...pageProps} />)}
      </CookieConsentProvider>
    </>
  );
}
