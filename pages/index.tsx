import { Footer } from "@/components/Footer/Footer";
import { HeaderNav } from "@/components/Header/HeaderNav";
import { MainPage } from "modules/MainPage/MainPage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jacht Plast</title>
        <meta name="description" content="Jacht Plast" />
      </Head>
      <HeaderNav />
      <MainPage />
      <Footer />
    </>
  );
}
