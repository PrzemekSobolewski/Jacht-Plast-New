import styled from 'styled-components';
import { 
  OCEAN_GRADIENT,
  WHITE
} from '@/styles/colors';

export const HeroSection = styled.section`
  background: ${OCEAN_GRADIENT};
  color: ${WHITE};
  padding: 120px 0 80px;
  text-align: center;
  position: relative;
  
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
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  font-weight: 800;
  margin: 0 0 20px 0;
  line-height: 1.1;
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: 300;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
`;
