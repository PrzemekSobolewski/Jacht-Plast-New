import {
  SmallSeparatorRight,
  Content,
  Desc,
  FlexWrapper,
  HeroSection,
  InfoBox,
  InfoBoxesWrapper,
  InfoIcon,
  InfoTitle,
  Link,
  MainDesc,
  Separator,
  Subtitle,
  Text,
  Title,
  ColoredSection,
  Wrapper,
  WrapperRight,
  SmallSeparatorLeft,
  ImageContainer,
  Section,
  ContactSection,
} from "./MainPage.style";
import { BLACK, MAIN_BLUE, WHITE } from "@/styles/colors";
import { Container } from "@/components/Container/Container.styles";

import useWindowDimensions from "@/hooks/useWindowDimension";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import transportIcon from "@/public/icons/transport-icon.svg";
import productionIcon from "@/public/icons/production-icon.svg";
import repairIcon from "@/public/icons/repair-icon.svg";
import specialistIcon from "@/public/icons/specialist-icon.svg";
import ramTransport from "@/public/images/ram-transport.webp";

export const MainPage = () => {
  const { height, width } = useWindowDimensions();

  const handleReadMoreClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 700,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <HeroSection>
        <Container>
          <Wrapper>
            <Image
              src={logo.src}
              width={104}
              height={86}
              alt={"Logo of Jacht Plast company"}
            />
            <Separator />
            <Title>Jacht Plast</Title>
            <Text>
              Twój zaufany partner w transporcie jachtów i łodzi motorowych
            </Text>
            <Link onClick={handleReadMoreClick}>czytaj dalej</Link>
          </Wrapper>
        </Container>
      </HeroSection>
      <section>
        <Container>
          <InfoBoxesWrapper>
            <InfoBox>
              <InfoIcon>
                <Image
                  src={transportIcon.src}
                  width={width <= 828 ? 30 : 36}
                  height={width <= 828 ? 30 : 36}
                  alt={"Transport specjalistyczny"}
                />
              </InfoIcon>
              <InfoTitle>Transport</InfoTitle>
              <Desc>
                Specjalizujemy się w transporcie jachtów i łodzi motorowych na
                terenie Polski oraz Europy. Nasza flota składa się z
                niezawodnych ciężarówek oraz specjalistycznych przyczep, dzięki
                którym jesteśmy w stanie dostarczyć Twój jacht w każde miejsce z
                zachowaniem najwyższych standardów bezpieczeństwa.
              </Desc>
            </InfoBox>
            <InfoBox>
              <InfoIcon>
                <Image
                  src={productionIcon.src}
                  width={width <= 828 ? 30 : 36}
                  height={width <= 828 ? 30 : 36}
                  alt={"Jacht żaglowy"}
                />
              </InfoIcon>
              <InfoTitle>Produkcja</InfoTitle>
              <Desc>
                Od początku naszej działalności stawiamy na doskonałą jakość
                produktów i usług. Dzięki temu możemy z dumą powiedzieć, że
                łodzie, które wychodzą spod naszej ręki, są jednymi z
                najlepszych na rynku. Korzystamy z najlepszych materiałów i
                technologii, aby zapewnić klientom nie tylko piękny wygląd, ale
                także niezawodność i bezpieczeństwo podczas żeglugi.
              </Desc>
            </InfoBox>
            <InfoBox>
              <InfoIcon>
                <Image
                  src={repairIcon.src}
                  width={width <= 828 ? 30 : 36}
                  height={width <= 828 ? 30 : 36}
                  alt={"Narzędzia robotnicze"}
                />
              </InfoIcon>
              <InfoTitle>Renowacje</InfoTitle>
              <Desc>
                Jeśli masz już swój jacht lub łódź motorową, ale wymaga ona
                renowacji, to jesteśmy do Twojej dyspozycji. Dzięki naszemu
                doświadczeniu i wiedzy jesteśmy w stanie przywrócić Twóją łódź
                do pierwotnego stanu lub dostosować go do Twoich indywidualnych
                potrzeb. Zajmujemy się nie tylko naprawą i malowaniem, ale także
                modernizacją i instalacją nowych systemów.
              </Desc>
            </InfoBox>
            <InfoBox>
              <InfoIcon>
                <Image
                  src={specialistIcon.src}
                  width={width <= 828 ? 30 : 36}
                  height={width <= 828 ? 30 : 36}
                  alt={"Wyspecjalizowana kadra pracownicza"}
                />
              </InfoIcon>
              <InfoTitle>Doświadczona Załoga</InfoTitle>
              <Desc>
                Nasi klienci cenią nas przede wszystkim za profesjonalne
                podejście do każdego zlecenia oraz indywidualne podejście do
                potrzeb klienta. Jesteśmy elastyczni i gotowi do dostosowania
                się do wymagań nawet najbardziej wymagających klientów.
              </Desc>
            </InfoBox>
          </InfoBoxesWrapper>
          <WrapperRight>
            <Content textAlign="right" color={BLACK}>
              <Subtitle>
                Specjalizujemy się w<br />
                <strong>produkcji i transporcie łodzi</strong>
              </Subtitle>
              <SmallSeparatorRight color={MAIN_BLUE} />
              <MainDesc>
                Jesteśmy doświadczoną i dynamicznie rozwijającą się firmą.
                Łodzie naszej produkcji to połączenie najnowszych technologii
                oraz ręcznej pracy najlepszych specjalistów w branży. Dzięki
                temu nasze jednostki charakteryzują się nie tylko wyjątkową
                estetyką, ale także doskonałymi właściwościami pływackimi oraz
                niezawodnością.
              </MainDesc>
            </Content>
          </WrapperRight>
        </Container>
      </section>
      <ColoredSection>
        <Container>
          <FlexWrapper>
            <Content textAlign="left" color={WHITE}>
              <Subtitle>Nie ma dla nas rzeczy niemożliwych!</Subtitle>
              <SmallSeparatorLeft color={WHITE} />
              <MainDesc>
                Oferujemy kompleksową obsługę transportu jachtów oraz łodzi
                motorowych, w tym przygotowanie do transportu (odłączenie
                masztu, zabezpieczenie pokładu i wyposażenia), organizację
                odpowiednich dokumentów i formalności celnych oraz bezpłatną
                wycenę transportu.
              </MainDesc>
            </Content>
            <ImageContainer>
              <Image
                src={ramTransport.src}
                fill={true}
                alt="transport jachtu wyjazd w siedziby firmy Jacht Plast"
              />
            </ImageContainer>
          </FlexWrapper>
        </Container>
      </ColoredSection>
      <Section>
        <Container>
          <FlexWrapper>
            <ImageContainer>
              <Image
                src={ramTransport.src}
                fill={true}
                alt="transport jachtu wyjazd w siedziby firmy Jacht Plast"
              />
            </ImageContainer>
            <Content textAlign="right" color={BLACK}>
              <Subtitle>
                Szukasz niezawodnej firmy zajmującej się{" "}
                <strong>przewozem jachtów?</strong>
              </Subtitle>
              <SmallSeparatorRight color={MAIN_BLUE} />
              <MainDesc>
                Skontaktuj się z nami już dziś. Zaufaj naszej wiedzy i
                doświadczeniu, a my zadbamy o to, aby Twoja łódź dotarła na
                miejsce szybko, bezpiecznie i w najlepszej kondycji. Jesteśmy
                Twoim najlepszym wyborem w transporcie jachtów na terenie Polski
                i Europy.
              </MainDesc>
            </Content>
          </FlexWrapper>
        </Container>
      </Section>
      <ContactSection>
        <Subtitle>Śmiało, napisz do nas!</Subtitle>
        <Link href="mailto:jachtplast@gmail.com">jachtplast@gmail.com</Link>
      </ContactSection>
    </>
  );
};
