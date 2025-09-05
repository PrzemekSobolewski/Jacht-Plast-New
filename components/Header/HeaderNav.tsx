import { useState, useEffect, memo } from "react";
import Headroom from "react-headroom";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";
import {
  Wrapper,
  Logo,
  NavLinks,
  NavLink,
  MobileMenuButton,
  MobileMenu,
  ContactInfo,
  ContactItem,
  HeaderContainer,
  TopBar,
  MainNav,
  DesktopNav,
  MobileNavLink,
  Overlay
} from "./HeaderNav.styles";
import Image from "next/image";
import logo from "@/public/images/logo.png";

const HeaderNavComponent = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "/", label: "O Nas", active: router.pathname === "/" },
    { href: "/produkcja-jachtow", label: "Produkcja", active: router.pathname === "/produkcja" },
    { href: "/transport-jachtow", label: "Transport", active: router.pathname === "/transport-jachtow" },
    { href: "/laminaty", label: "Laminaty", active: router.pathname === "/laminaty" },
    { href: "/kontakt", label: "Kontakt", active: router.pathname === "/kontakt" },
  ];

  return (
    <HeaderContainer>
      <TopBar>
        <Wrapper>
          <ContactInfo>
            <ContactItem>
              <FaPhone />
              <a href="tel:+48601256133">+48 601 256 133</a>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <a href="mailto:jachtplast@gmail.com">jachtplast@gmail.com</a>
            </ContactItem>
          </ContactInfo>
        </Wrapper>
      </TopBar>

      <Headroom style={{ zIndex: 1000 }}>
        <MainNav $isScrolled={isScrolled}>
          <Wrapper>
            <Logo onClick={() => void router.push("/")}>
              <Image
                src={logo}
                width={90}
                height={75}
                alt="Jacht Plast - Logo firmy"
                priority
              />
              <span>Jacht Plast</span>
            </Logo>

            <DesktopNav>
              <NavLinks>
                {navItems.map((item) => (
                  <motion.li
                    key={item.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavLink
                      href={item.href}
                      $active={item.active}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </NavLinks>
            </DesktopNav>

            <MobileMenuButton
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              $isOpen={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </MobileMenuButton>
          </Wrapper>
        </MainNav>
      </Headroom>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <Overlay
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />
            <MobileMenu
              as={motion.div}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <nav>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <MobileNavLink
                      href={item.href}
                      $active={item.active}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </MobileNavLink>
                  </motion.div>
                ))}
              </nav>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export const HeaderNav = memo(HeaderNavComponent);
