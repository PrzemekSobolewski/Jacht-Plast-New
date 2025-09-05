import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  PRIMARY_BLUE, 
  ACCENT_BLUE, 
  NAVY,
  SECONDARY_BLUE
} from '@/styles/colors';

// Import reusable components
export { 
  HeroSection,
  HeroContent, 
  HeroTitle,
  HeroSubtitle 
} from '@/components/common/HeroSection.styles';

export { 
  PageContainer as Container,
  Section as IntroSection,
  SectionTitle,
  SectionSubtitle,
  Card,
  CardIcon,
  CardTitle,
  CardDescription
} from '@/components/common/Layout.styles';

export {
  GalleryGrid,
  GalleryItem,
  GalleryImage,
  LightboxOverlay,
  LightboxContent,
  LightboxImage,
  LightboxClose,
  LightboxNav as LightboxControls,
  LightboxCounter
} from '@/components/common/Gallery.styles';

// ProductionPage specific components
export const IntroText = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: ${PRIMARY_BLUE};
    margin-bottom: 2rem;
    font-weight: 600;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${NAVY};
    margin-bottom: 1.5rem;
  }
`;

export const ModelNavigation = styled.div`
  padding: 3rem 0;
  background: #f8fafc;
  text-align: center;
  width: 100%;

  h3 {
    font-size: 2rem;
    color: ${PRIMARY_BLUE};
    margin-bottom: 2rem;
    font-weight: 600;
  }
`;

export const ModelNavigationContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ModelButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    gap: 0.8rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
    padding: 0 0.5rem;
  }
`;

export const ModelButton = styled.button<{ $active?: boolean }>`
  padding: 0.8rem 1.5rem;
  border: 2px solid ${props => props.$active ? ACCENT_BLUE : PRIMARY_BLUE};
  background: ${props => props.$active ? ACCENT_BLUE : 'transparent'};
  color: ${props => props.$active ? 'white' : PRIMARY_BLUE};
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: ${ACCENT_BLUE};
    color: white;
    border-color: ${ACCENT_BLUE};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.6rem 1.2rem;
  }
`;

export const ModelsSection = styled.div`
  background: white;
  padding: 3rem 0;
`;

export const ModelContent = styled(motion.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const ModelCard = styled.div`
  margin-bottom: 4rem;
`;

export const ModelHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const ModelName = styled.h2`
  font-size: 2.5rem;
  color: ${PRIMARY_BLUE};
  margin-bottom: 1rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ModelDescription = styled.p`
  font-size: 1.1rem;
  color: ${NAVY};
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

export const ModelDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const SpecificationsCard = styled.div`
  background: #f8fafc;
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid #e2e8f0;

  h4 {
    font-size: 1.5rem;
    color: ${PRIMARY_BLUE};
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
`;

export const SpecificationsList = styled.div`
  display: grid;
  gap: 1rem;
`;

export const SpecItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid #e2e8f0;

  &:last-child {
    border-bottom: none;
  }

  span {
    color: ${NAVY};
    font-weight: 500;
  }

  strong {
    color: ${PRIMARY_BLUE};
    font-weight: 600;
  }
`;

export const FeaturesCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  h4 {
    font-size: 1.5rem;
    color: ${PRIMARY_BLUE};
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
`;

export const FeaturesList = styled.div`
  display: grid;
  gap: 1rem;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  color: ${NAVY};
`;

export const FeatureIcon = styled.span`
  color: ${ACCENT_BLUE};
  font-weight: bold;
  font-size: 1.2rem;
  width: 20px;
  text-align: center;
`;

export const ModelGallery = styled.div`
  margin-top: 2rem;
`;

export const GalleryContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const GalleryTitle = styled.h3`
  font-size: 1.5rem;
  color: ${PRIMARY_BLUE};
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`;

// Additional ProductionPage specific components
export const LightboxButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`;

export const ModelSection = styled.div`
  margin-bottom: 4rem;
`;

export const ModelTitle = styled.h2`
  font-size: 2.5rem;
  color: ${PRIMARY_BLUE};
  margin-bottom: 1rem;
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const MainImage = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 1rem;
`;

export const ImageCount = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  margin: 1rem 0;
`;

export const Thumbnail = styled.div<{ $active?: boolean }>`
  position: relative;
  width: 100%;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid ${props => props.$active ? ACCENT_BLUE : 'transparent'};
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${ACCENT_BLUE};
    transform: scale(1.05);
  }
`;

export const MoreImages = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.05);
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CTAButton = styled.a<{ $primary?: boolean }>`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: ${props => props.$primary ? ACCENT_BLUE : 'transparent'};
  color: white;
  border: 2px solid ${props => props.$primary ? ACCENT_BLUE : 'white'};
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${props => props.$primary ? 'white' : ACCENT_BLUE};
    color: ${props => props.$primary ? ACCENT_BLUE : 'white'};
    border-color: ${props => props.$primary ? 'white' : ACCENT_BLUE};
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

export const CTASection = styled.div`
  background: linear-gradient(135deg, ${PRIMARY_BLUE} 0%, ${SECONDARY_BLUE} 100%);
  padding: 5rem 0;
  text-align: center;
  color: white;
`;

export const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 2.5rem;
    opacity: 0.95;
  }
`;
export const ModelDivider = styled.hr`
  border: none;
  height: 2px;
  background: linear-gradient(90deg, transparent, ${PRIMARY_BLUE}, transparent);
  margin: 4rem 0;
`;