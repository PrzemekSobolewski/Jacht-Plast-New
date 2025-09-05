import styled from 'styled-components';
import { 
  WHITE, 
  OCEAN_GRADIENT
} from '@/styles/colors';

export const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const LightboxContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: ${WHITE};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 25px 100px rgba(0, 0, 0, 0.5);
`;

export const LightboxImage = styled.div`
  position: relative;
  width: 80vw;
  height: 70vh;
  
  @media (max-width: 768px) {
    width: 90vw;
    height: 60vh;
  }
`;

export const LightboxClose = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: ${WHITE};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`;

export const LightboxNav = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  button {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: ${WHITE};
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
  }
`;

export const LightboxCounter = styled.span`
  color: ${WHITE};
  font-weight: 500;
  font-size: 14px;
`;

export const GalleryGrid = styled.div<{ gap?: string }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.gap || '20px'};
  margin-top: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
  }
`;

export const GalleryItem = styled.div`
  aspect-ratio: 4/3;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  }
`;

export const GalleryImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  img {
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

export const ActionButton = styled.a`
  background: ${OCEAN_GRADIENT};
  color: ${WHITE};
  padding: 15px 30px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(43, 155, 186, 0.3);
  display: inline-block;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(43, 155, 186, 0.4);
    color: ${WHITE};
  }
`;
