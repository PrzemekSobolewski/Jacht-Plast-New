import Headroom from "react-headroom";
import Link from "next/link";
import { useRouter } from "next/router";
import { Nav, Wrapper } from "./HeaderNav.styles";

import Image from "next/image";
import logo from "@/public/images/logo.png";

export const HeaderNav = () => {
  const router = useRouter();

  return (
    <header>
      <Headroom style={{ backgroundColor: "white" }}>
        <Wrapper>
          <Image
            src={logo.src}
            className="header-logo"
            width={104}
            height={86}
            alt={"Logo of Jacht Plast company"}
            onClick={() => router.push("/")}
          />
          <Nav>
            <Link href="/" className={router.pathname === "/" ? "pressed" : ""}>
              O Nas
            </Link>
            <Link
              href="/produkcja"
              className={router.pathname === "/produkcja" ? "pressed" : ""}
            >
              Produkcja
            </Link>
            <Link
              href="/transport-jachtow"
              className={
                router.pathname === "/transport-jachtow" ? "pressed" : ""
              }
            >
              Transport
            </Link>
            <Link
              href="/kontakt"
              className={router.pathname === "/kontakt" ? "pressed" : ""}
            >
              Kontakt
            </Link>
          </Nav>
        </Wrapper>
      </Headroom>
    </header>
  );
};
