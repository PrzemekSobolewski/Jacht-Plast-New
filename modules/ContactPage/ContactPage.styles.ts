import styled from "styled-components";
import { 
  NAVY, 
  LIGHT_BLUE,
  GRAY,
  WHITE,
  OFF_WHITE
} from "@/styles/colors";

// Import reusable components
export { 
  HeroSection,
  HeroContent, 
  HeroTitle,
  HeroSubtitle 
} from "@/components/common/HeroSection.styles";

export { 
  PageContainer as ContactPageContainer,
  Section,
  SectionTitle,
  SectionSubtitle
} from "@/components/common/Layout.styles";

export {
  ContactSection,
  ContactCard,
  ContactInfo,
  ContactButton,
  FormContainer,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
  FormError,
  FormSuccess
} from "@/components/common/Form.styles";

// ContactPage specific components
export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 60px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-top: 40px;
  }
`;

export const InfoSection = styled.div`
  h3 {
    font-size: 1.8rem;
    color: ${NAVY};
    margin-bottom: 25px;
    font-weight: 600;
  }
  
  p {
    color: ${GRAY};
    line-height: 1.7;
    margin-bottom: 30px;
    font-size: 1.05rem;
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

export const InfoCard = styled.div`
  background: ${WHITE};
  padding: 30px 25px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  border: 1px solid ${LIGHT_BLUE};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.1);
  }
`;

export const InfoIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2b9bba 0%, #4fd1c7 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: ${WHITE};
  font-size: 20px;
`;

export const InfoTitle = styled.h4`
  font-size: 1.1rem;
  color: ${NAVY};
  margin-bottom: 10px;
  font-weight: 600;
`;

export const InfoText = styled.p`
  color: ${GRAY};
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.4;
`;

export const MapSection = styled.section`
  padding: 80px 0;
  background: ${OFF_WHITE};
`;

export const MapContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  
  h3 {
    font-size: 2rem;
    color: ${NAVY};
    text-align: center;
    margin-bottom: 40px;
    font-weight: 600;
  }
`;

export const MapWrapper = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  height: 400px;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: grayscale(20%);
    transition: filter 0.3s ease;
    
    &:hover {
      filter: grayscale(0%);
    }
  }
`;
