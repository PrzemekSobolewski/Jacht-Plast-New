import React from 'react';
import styled from 'styled-components';
import { FaCookie } from 'react-icons/fa';
import { useCookieConsent } from '@/contexts';
import { 
  ACCENT_BLUE, 
  WHITE, 
  PRIMARY_BLUE,
  BLACK_OPACITY 
} from '@/styles/colors';

const CookieButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 60px;
  height: 60px;
  background: ${ACCENT_BLUE};
  color: ${WHITE};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 4px 20px ${BLACK_OPACITY};
  transition: all 0.3s ease;
  z-index: 1000;
  
  &:hover {
    background: ${PRIMARY_BLUE};
    transform: scale(1.1);
    box-shadow: 0 6px 25px ${BLACK_OPACITY};
  }
  
  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 18px;
    bottom: 15px;
    left: 15px;
  }
`;

export const CookieSettingsButton: React.FC = () => {
  const { showSettings, hasInteracted } = useCookieConsent();

  // Pokaż button tylko jeśli użytkownik już podjął decyzję
  if (!hasInteracted) {
    return null;
  }

  return (
    <CookieButton
      onClick={showSettings}
      title="Ustawienia cookies"
      aria-label="Otwórz ustawienia cookies"
    >
      <FaCookie />
    </CookieButton>
  );
};
