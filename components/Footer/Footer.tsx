import { useRouter } from "next/router";
import { FaFacebookSquare } from "react-icons/fa";
import { Container } from "../Container/Container.styles";
import {
  Border,
  FbLink,
  FooterItem,
  FooterItemContent,
  Link,
  SocialLinksWrapper,
  StyledFooter,
  Title,
  Wrapper,
} from "./Footer.styles";

export const Footer = () => {
  const router = useRouter();
  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <FooterItem>
            <Title>KONTAKT</Title>
            <Border />
            <FooterItemContent>
              Tel/fax (48) 375 67 35
              <br />
              Tel. kom. <a href="tel:601 256 133">601 256 133</a>
              <br />
              E-mail:{" "}
              <a href="mailto:jachtplast@gmail.com">jachtplast@gmail.com</a>
              <br />
              <br />
              Godziny pracy:
              <br /> Poniedziałek - Piątek
              <br /> 8:00 - 17:00
            </FooterItemContent>
          </FooterItem>
          <FooterItem>
            <Title>DANE FIRMY</Title>
            <Border />
            <FooterItemContent>
              PHUP JACHT-PLAST
              <br />
              ul. Przemysłowa 4<br />
              26-340 Drzewica
              <br />
              <br />
              NIP: 799-13-31-976
            </FooterItemContent>
          </FooterItem>
          <FooterItem>
            <Title>SZYBKIE LINKI</Title>
            <Border />
            <FooterItemContent>
              <Link onClick={() => router.push("/")}>O Nas</Link>
              <Link onClick={() => router.push("/transport-jachtow")}>
                Transport
              </Link>
              <Link onClick={() => router.push("/galeria")}>Galeria</Link>
              <Link onClick={() => router.push("/produkcja")}>Produkcja</Link>
              <Link onClick={() => router.push("/kontakt")}>Kontakt</Link>
            </FooterItemContent>
          </FooterItem>
          <FooterItem>
            <Title>DOWIEDZ SIĘ WIĘCEJ</Title>
            <Border />
            <FooterItemContent>
              <SocialLinksWrapper>
                <FbLink
                  href={
                    "https://www.facebook.com/Jacht-Plast-Zdzis%C5%82aw-Sobolewski-1328748387208685/"
                  }
                  target={"_blank"}
                >
                  <FaFacebookSquare />
                </FbLink>
              </SocialLinksWrapper>
            </FooterItemContent>
          </FooterItem>
        </Wrapper>
      </Container>
    </StyledFooter>
  );
};
