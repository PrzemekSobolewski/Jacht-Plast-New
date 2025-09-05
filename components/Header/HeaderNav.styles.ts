import styled from "styled-components";
import Link from "next/link";
import { screenSizeTo } from "@/styles/breakpoints";
import { 
  PRIMARY_BLUE, 
  WHITE, 
  NAVY, 
  LIGHT_BLUE, 
  ACCENT_BLUE,
  BLACK_OPACITY 
} from "@/styles/colors";

export const HeaderContainer = styled.header`
  position: relative;
  z-index: 1000;
`;

export const TopBar = styled.div`
  background: ${PRIMARY_BLUE};
  color: ${WHITE};
  padding: 8px 0;
  font-size: 14px;

  ${screenSizeTo("md")} {
    display: none;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    color: ${WHITE};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${LIGHT_BLUE};
    }
  }

  svg {
    font-size: 12px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${screenSizeTo("sm")} {
    padding: 0 16px;
  }
`;

export const MainNav = styled.nav<{ $isScrolled: boolean }>`
  background: ${props => props.$isScrolled ? 'rgba(255, 255, 255, 0.95)' : WHITE};
  backdrop-filter: ${props => props.$isScrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.$isScrolled ? `1px solid ${LIGHT_BLUE}` : 'none'};
  transition: all 0.3s ease;
  padding: ${props => props.$isScrolled ? '12px 0' : '16px 0'};
  box-shadow: ${props => props.$isScrolled ? `0 2px 20px ${BLACK_OPACITY}` : 'none'};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  span {
    font-size: 24px;
    font-weight: 700;
    color: ${PRIMARY_BLUE};
    letter-spacing: -0.5px;

    ${screenSizeTo("md")} {
      display: none;
    }
  }

  img {
    transition: transform 0.3s ease;
  }
`;

export const DesktopNav = styled.div`
  display: flex;
  align-items: center;

  ${screenSizeTo("lg")} {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 32px;
`;

export const NavLink = styled(Link)<{ $active: boolean }>`
  color: ${props => props.$active ? PRIMARY_BLUE : NAVY};
  text-decoration: none;
  font-weight: ${props => props.$active ? '600' : '500'};
  font-size: 16px;
  letter-spacing: 0.3px;
  padding: 8px 0;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: ${PRIMARY_BLUE};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.$active ? '100%' : '0'};
    height: 2px;
    background: ${ACCENT_BLUE};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const MobileMenuButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: ${PRIMARY_BLUE};
  cursor: pointer;
  padding: 8px;
  transition: all 0.3s ease;
  border-radius: 6px;

  &:hover {
    background: ${LIGHT_BLUE};
  }

  ${screenSizeTo("lg")} {
    display: block;
  }

  svg {
    transition: transform 0.3s ease;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: ${WHITE};
  z-index: 1000;
  padding: 80px 24px 24px;
  box-shadow: -5px 0 20px ${BLACK_OPACITY};

  nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const MobileNavLink = styled(Link)<{ $active: boolean }>`
  display: block;
  color: ${props => props.$active ? PRIMARY_BLUE : NAVY};
  text-decoration: none;
  font-weight: ${props => props.$active ? '600' : '500'};
  font-size: 18px;
  padding: 16px 0;
  border-bottom: 1px solid ${LIGHT_BLUE};
  transition: all 0.3s ease;

  &:hover {
    color: ${PRIMARY_BLUE};
    padding-left: 8px;
  }
`;

// Legacy styles for backwards compatibility
export const Nav = styled.nav`
  display: none;
`;
