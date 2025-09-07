import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@/components/common/GoogleAnalytics";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// Web Vitals monitoring
export function reportWebVitals(metric: { id: string; name: string; value: number }) {
  if (process.env.NODE_ENV === 'production') {
    console.log(metric);
    // Tutaj można dodać wysyłanie do analytics
  }
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <GoogleAnalytics />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
