import styled from 'styled-components';
import { screenSizeTo } from '@/styles/breakpoints';
import { 
  PRIMARY_BLUE, 
  SECONDARY_BLUE,
  WHITE, 
  NAVY, 
  GRAY,
  LIGHT_GRAY,
  SUCCESS,
} from '@/styles/colors';

// Import reusable lightbox and gallery components
export {
  GalleryGrid,
  GalleryItem,
  GalleryImage,
  LightboxOverlay,
  LightboxContent,
  LightboxImage,
  LightboxClose,
  LightboxNav,
  LightboxCounter
} from '@/components/common/Gallery.styles';

export const LaminatesPageContainer = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
`;

export const ServicesSection = styled.section`
  padding: 100px 0;
  background: ${LIGHT_GRAY};
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const ServiceCard = styled.div`
  background: ${WHITE};
  padding: 2.5rem 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${PRIMARY_BLUE}, ${SECONDARY_BLUE});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: ${WHITE};
  font-size: 2rem;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${NAVY};
  margin-bottom: 1rem;
`;

export const ServiceDescription = styled.p`
  color: ${GRAY};
  line-height: 1.6;
`;

export const AboutSection = styled.section`
  padding: 100px 0;
  background: ${WHITE};
`;

export const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  ${screenSizeTo('bigTablet')} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const AboutTextCard = styled.div`
  h3 {
    font-size: 1.4rem;
    color: ${PRIMARY_BLUE};
    margin-bottom: 1.5rem;
    line-height: 1.4;
  }
  
  p {
    color: ${GRAY};
    line-height: 1.7;
    margin-bottom: 2rem;
  }
`;

export const AboutImageCard = styled.div`
  background: ${LIGHT_GRAY};
  border-radius: 15px;
  padding: 3rem;
  text-align: center;
  
  .placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    
    svg {
      font-size: 4rem;
      color: ${PRIMARY_BLUE};
    }
    
    p {
      font-size: 1.1rem;
      color: ${GRAY};
      margin: 0;
    }
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
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: ${GRAY};
  
  svg {
    color: ${SUCCESS};
    font-size: 1rem;
    flex-shrink: 0;
  }
`;

export const ProcessSection = styled.section`
  padding: 100px 0;
  background: ${LIGHT_GRAY};
`;

export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const ProcessStep = styled.div`
  background: ${WHITE};
  padding: 2.5rem 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const StepNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${PRIMARY_BLUE};
  margin-bottom: 1rem;
`;

export const StepTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${NAVY};
  margin-bottom: 1rem;
`;

export const StepDescription = styled.p`
  color: ${GRAY};
  line-height: 1.6;
`;

export const SpecsSection = styled.section`
  padding: 100px 0;
  background: ${WHITE};
`;

export const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const SpecCard = styled.div`
  background: ${LIGHT_GRAY};
  padding: 2.5rem 2rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: ${WHITE};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const SpecIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, ${PRIMARY_BLUE}, ${SECONDARY_BLUE});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: ${WHITE};
  font-size: 1.5rem;
`;

export const SpecTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${NAVY};
  margin-bottom: 1rem;
`;

export const SpecDescription = styled.p`
  color: ${GRAY};
  line-height: 1.6;
  font-size: 0.95rem;
`;

export const GallerySection = styled.section`
  padding: 100px 0;
  background: ${LIGHT_GRAY};
`;

export const GalleryPlaceholder = styled.div`
  background: ${WHITE};
  border-radius: 20px;
  padding: 4rem 2rem;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
`;

export const PlaceholderIcon = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, ${PRIMARY_BLUE}, ${SECONDARY_BLUE});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: ${WHITE};
  font-size: 2.5rem;
`;

export const PlaceholderText = styled.div`
  h3 {
    font-size: 1.5rem;
    color: ${NAVY};
    margin-bottom: 1rem;
  }
  
  p {
    color: ${GRAY};
    line-height: 1.6;
    margin: 0;
  }
`;

export const ContactSection = styled.section`
  padding: 100px 0;
  background: ${WHITE};
`;

export const ContactCard = styled.div`
  background: ${LIGHT_GRAY};
  border-radius: 20px;
  padding: 3rem;
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3rem;
  align-items: center;
  
  ${screenSizeTo('tablet')} {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

export const ContactInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    color: ${NAVY};
    margin-bottom: 1rem;
  }
  
  p {
    color: ${GRAY};
    line-height: 1.6;
    margin-bottom: 2rem;
    
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  
  div {
    p {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.5rem;
      
      svg {
        color: ${PRIMARY_BLUE};
      }
    }
  }
`;

export const ContactButton = styled.a`
  background: linear-gradient(135deg, ${PRIMARY_BLUE}, ${SECONDARY_BLUE});
  color: ${WHITE};
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  }
  
  ${screenSizeTo('tablet')} {
    padding: 1rem 2.5rem;
  }
`;
