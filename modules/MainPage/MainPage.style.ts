import styled from "styled-components";
import { screenSizeTo } from "@/styles/breakpoints";
import { 
  PRIMARY_BLUE, 
  ACCENT_BLUE,
  WHITE, 
  NAVY, 
  LIGHT_BLUE, 
  GRAY,
  OFF_WHITE,
  OCEAN_GRADIENT,
  LIGHT_GRADIENT
} from "@/styles/colors";

export const MainContainer = styled.main`
  overflow-x: hidden;
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  background: ${OCEAN_GRADIENT};
  position: relative;
  display: flex;
  align-items: center;
  color: ${WHITE};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M0,20 Q25,0 50,20 T100,20 L100,0 L0,0 Z" fill="rgba(255,255,255,0.1)"/></svg>');
    background-size: 200px 50px;
    background-repeat: repeat-x;
    animation: wave 10s linear infinite;
  }
  
  @keyframes wave {
    0% { background-position-x: 0; }
    100% { background-position-x: 200px; }
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 700px;
  
  ${screenSizeTo("md")} {
    text-align: center;
    max-width: 100%;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin: 0 0 20px 0;
  line-height: 1.1;
  
  span {
    display: block;
    font-size: clamp(1.2rem, 2.5vw, 1.8rem);
    font-weight: 300;
    color: ${LIGHT_BLUE};
    margin-top: 10px;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 600;
  color: ${ACCENT_BLUE};
  margin: 0 0 24px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const HeroDescription = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  line-height: 1.7;
  color: ${LIGHT_BLUE};
  margin: 0 0 40px 0;
  max-width: 600px;
`;



export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: ${LIGHT_BLUE};
  font-size: 24px;
  cursor: pointer;
  z-index: 2;
  
  &:hover {
    color: ${WHITE};
  }
`;

export const ServicesSection = styled.section`
  padding: 100px 0;
  background: ${OFF_WHITE};
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: ${NAVY};
  text-align: center;
  margin: 0 0 20px 0;
`;

export const SectionSubtitle = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: ${GRAY};
  text-align: center;
  margin: 0 0 60px 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 60px;
`;

export const ServiceCard = styled.div`
  background: ${WHITE};
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid ${LIGHT_BLUE};
  
  &:hover {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    border-color: ${ACCENT_BLUE};
  }
`;

export const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${LIGHT_GRADIENT};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: ${PRIMARY_BLUE};
  font-size: 32px;
  border: 3px solid ${ACCENT_BLUE};
`;

export const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${NAVY};
  margin: 0 0 15px 0;
`;

export const ServiceDescription = styled.p`
  color: ${GRAY};
  line-height: 1.6;
  margin: 0;
  font-size: 14px;
`;

export const AboutSection = styled.section`
  padding: 100px 0;
  background: ${WHITE};
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  
  ${screenSizeTo("lg")} {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const AboutText = styled.div`
  color: ${GRAY};
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 30px;
  
  strong {
    color: ${NAVY};
    font-weight: 600;
  }
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  color: ${GRAY};
  font-size: 15px;
  
  svg {
    color: ${ACCENT_BLUE};
    font-size: 16px;
    min-width: 16px;
  }
`;

export const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
  
  ${screenSizeTo("sm")} {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: 20px;
  background: ${LIGHT_GRADIENT};
  border-radius: 15px;
  border: 2px solid ${LIGHT_BLUE};
`;

export const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${PRIMARY_BLUE};
  margin-bottom: 8px;
`;

export const StatLabel = styled.div`
  font-size: 14px;
  color: ${GRAY};
  font-weight: 500;
`;

export const VideoSection = styled.div`
  margin-top: 20px;
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
`;

export const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(11, 77, 107, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlayButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${WHITE};
  border: none;
  color: ${PRIMARY_BLUE};
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  
  &:hover {
    background: ${ACCENT_BLUE};
    color: ${WHITE};
    transform: scale(1.1);
  }
`;

export const ContactSection = styled.section`
  padding: 100px 0;
  background: ${OCEAN_GRADIENT};
  color: ${WHITE};
`;

export const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 40px;
  max-width: 600px;
  margin: 0 auto;
`;

export const ContactInfo = styled.div`
  text-align: center;
  
  h3 {
    font-size: 1.5rem;
    margin: 0 0 20px 0;
    color: ${WHITE};
  }
  
  p {
    color: ${LIGHT_BLUE};
    line-height: 1.6;
    margin: 0 0 30px 0;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
    
    li {
      margin-bottom: 12px;
      color: ${LIGHT_BLUE};
      
      strong {
        color: ${WHITE};
      }
    }
  }
`;

// Legacy styles for backwards compatibility
export const HeroSection_OLD = styled.section`
  display: none;
`;

export const Wrapper = styled.div`
  display: none;
`;

export const Title = styled.h1`
  display: none;
`;

export const Subtitle = styled.h2`
  display: none;
`;

export const Text = styled.p`
  display: none;
`;

export const Separator = styled.div`
  display: none;
`;

export const Link = styled.a`
  display: none;
`;

export const Content = styled.div`
  display: none;
`;

export const InfoBoxesWrapper = styled.div`
  display: none;
`;

export const InfoBox = styled.div`
  display: none;
`;

export const InfoIcon = styled.div`
  display: none;
`;

export const InfoTitle = styled.h3`
  display: none;
`;

export const Desc = styled.p`
  display: none;
`;

export const WrapperRight = styled.div`
  display: none;
`;

export const SmallSeparatorRight = styled.div`
  display: none;
`;

export const SmallSeparatorLeft = styled.div`
  display: none;
`;

export const MainDesc = styled.p`
  display: none;
`;

export const ColoredSection = styled.section`
  display: none;
`;

export const FlexWrapper = styled.div`
  display: none;
`;

export const ImageContainer = styled.div`
  display: none;
`;

export const Section = styled.section`
  display: none;
`;
