import styled from "styled-components";
import { screenSizeTo } from "@/styles/breakpoints";
import { 
  PRIMARY_BLUE, 
  WHITE, 
  NAVY, 
  ACCENT_BLUE,
  LIGHT_GRAY
} from "@/styles/colors";

export const StyledFooter = styled.footer`
  background: linear-gradient(135deg, ${PRIMARY_BLUE} 0%, ${NAVY} 100%);
  color: ${WHITE};
  padding: 60px 0 20px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${ACCENT_BLUE};
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1.5fr 1fr;
  gap: 40px;
  margin-bottom: 40px;

  ${screenSizeTo("lg")} {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  ${screenSizeTo("md")} {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FooterTitle = styled.h3`
  color: ${WHITE};
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  
  svg {
    color: ${ACCENT_BLUE};
    font-size: 18px;
  }
`;

export const FooterText = styled.p`
  color: ${LIGHT_GRAY};
  line-height: 1.6;
  margin: 0;
  font-size: 14px;
`;

export const CompanyInfo = styled.div`
  color: ${LIGHT_GRAY};
  font-size: 14px;
  margin-top: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border-left: 3px solid ${ACCENT_BLUE};
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  
  svg {
    color: ${ACCENT_BLUE};
    font-size: 16px;
    margin-top: 2px;
    min-width: 16px;
  }
  
  div {
    flex: 1;
    
    strong {
      color: ${WHITE};
      display: block;
      margin-bottom: 4px;
      font-size: 14px;
    }
    
    a {
      color: ${LIGHT_GRAY};
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: ${ACCENT_BLUE};
      }
    }
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  gap: 16px;
`;

export const ServiceItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(4px);
  }
  
  svg {
    color: ${ACCENT_BLUE};
    font-size: 16px;
    margin-top: 2px;
    min-width: 16px;
  }
  
  div {
    flex: 1;
    
    strong {
      color: ${WHITE};
      display: block;
      margin-bottom: 4px;
      font-size: 14px;
    }
    
    p {
      color: ${LIGHT_GRAY};
      font-size: 12px;
      margin: 0;
      line-height: 1.4;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${LIGHT_GRAY};
  text-decoration: none;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${WHITE};
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 20px;
    color: ${ACCENT_BLUE};
  }
`;

export const BackToTop = styled.button`
  background: ${ACCENT_BLUE};
  color: ${WHITE};
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  margin-top: 16px;
  
  &:hover {
    background: ${PRIMARY_BLUE};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(43, 155, 186, 0.3);
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
`;

export const Copyright = styled.p`
  color: ${LIGHT_GRAY};
  font-size: 14px;
  margin: 0;
  line-height: 1.6;
  
  ${screenSizeTo("md")} {
    font-size: 12px;
    text-align: center;
  }
`;

// Legacy styles for backwards compatibility
export const Wrapper = styled.div`
  display: none;
`;

export const FooterItem = styled.div`
  display: none;
`;

export const Title = styled.h4`
  display: none;
`;

export const Border = styled.div`
  display: none;
`;

export const FooterItemContent = styled.div`
  display: none;
`;

export const Link = styled.a`
  display: none;
`;

export const SocialLinksWrapper = styled.div`
  display: none;
`;

export const FbLink = styled.a`
  display: none;
`;
