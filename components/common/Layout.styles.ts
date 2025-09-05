import styled from 'styled-components';
import { 
  PRIMARY_BLUE, 
  ACCENT_BLUE,
  WHITE, 
  NAVY, 
  LIGHT_BLUE, 
  GRAY,
  LIGHT_GRADIENT
} from '@/styles/colors';

export const PageContainer = styled.div`
  min-height: 100vh;
  background: ${WHITE};
`;

export const Section = styled.section<{ background?: string }>`
  padding: 100px 0;
  background: ${props => props.background || WHITE};
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
  margin: 0 auto 60px auto;
  max-width: 600px;
  line-height: 1.6;
`;

export const Grid = styled.div<{ 
  columns?: string; 
  gap?: string; 
  marginTop?: string;
}>`
  display: grid;
  grid-template-columns: ${props => props.columns || 'repeat(auto-fit, minmax(300px, 1fr))'};
  gap: ${props => props.gap || '30px'};
  margin-top: ${props => props.marginTop || '60px'};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const Card = styled.div<{ padding?: string }>`
  background: ${WHITE};
  padding: ${props => props.padding || '40px 30px'};
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid ${LIGHT_BLUE};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    border-color: ${ACCENT_BLUE};
  }
`;

export const CardIcon = styled.div<{ 
  size?: string; 
  fontSize?: string;
}>`
  width: ${props => props.size || '80px'};
  height: ${props => props.size || '80px'};
  background: ${LIGHT_GRADIENT};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: ${PRIMARY_BLUE};
  font-size: ${props => props.fontSize || '28px'};
  border: 3px solid ${ACCENT_BLUE};
`;

export const CardTitle = styled.h3<{ fontSize?: string }>`
  font-size: ${props => props.fontSize || '1.4rem'};
  font-weight: 600;
  color: ${NAVY};
  margin: 0 0 15px 0;
`;

export const CardDescription = styled.p`
  color: ${GRAY};
  line-height: 1.6;
  margin: 0;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 40px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${GRAY};
  font-weight: 500;
  
  svg {
    color: ${PRIMARY_BLUE};
    font-size: 14px;
    min-width: 14px;
  }
`;
