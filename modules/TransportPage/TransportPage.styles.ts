import styled from "styled-components";
import { 
  PRIMARY_BLUE, 
  NAVY, 
  GRAY
} from "@/styles/colors";

// Import reusable components
export { 
  HeroSection,
  HeroContent, 
  HeroTitle,
  HeroSubtitle 
} from "@/components/common/HeroSection.styles";

export { 
  PageContainer as TransportPageContainer,
  Section as ServicesSection,
  Section as AboutSection,
  Section as SpecsSection,
  Section as GallerySection,
  Section as ContactSection,
  SectionTitle,
  SectionSubtitle,
  Grid as ServicesGrid,
  Grid as SpecsGrid,
  Card as ServiceCard,
  Card as SpecCard,
  CardIcon as ServiceIcon,
  CardIcon as SpecIcon,
  CardTitle as ServiceTitle,
  CardTitle as SpecTitle,
  CardDescription as ServiceDescription,
  FeaturesList,
  FeatureItem
} from "@/components/common/Layout.styles";

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
} from "@/components/common/Gallery.styles";

export {
  ContactCard,
  ContactInfo,
  ContactButton
} from "@/components/common/Form.styles";

// Custom components specific to TransportPage
export const SpecValue = styled.p`
  font-size: 1.1rem;
  color: ${PRIMARY_BLUE};
  font-weight: 600;
  margin: 0;
`;

export const AboutContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const AboutText = styled.div`
  margin: 40px 0;
  
  h3 {
    font-size: 1.5rem;
    color: ${NAVY};
    font-weight: 600;
    line-height: 1.6;
    margin: 0 0 20px 0;
  }
  
  p {
    color: ${GRAY};
    line-height: 1.8;
    font-size: 1.1rem;
    margin: 0 0 20px 0;
  }
`;
