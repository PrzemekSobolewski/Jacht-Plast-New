import styled from 'styled-components';
import {
  PRIMARY_BLUE,
  WHITE,
  NAVY,
  GRAY,
  LIGHT_BLUE,
  ACCENT_BLUE,
  OFF_WHITE,
  BLACK_OPACITY
} from '@/styles/colors';

export const CookieBannerOverlay = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${BLACK_OPACITY};
  z-index: 10000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
  opacity: ${props => props.$isVisible ? 1 : 0};
  visibility: ${props => props.$isVisible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    align-items: flex-end;
    padding: 0;
  }
`;

export const CookieBannerContainer = styled.div<{ $isVisible: boolean }>`
  background: ${WHITE};
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.15);
  max-width: 800px;
  width: 100%;
  padding: 40px;
  transform: translateY(${props => props.$isVisible ? '0' : '100%'});
  transition: transform 0.4s ease;
  border: 3px solid ${ACCENT_BLUE};
  position: relative;

  @media (max-width: 768px) {
    border-radius: 20px 20px 0 0;
    padding: 30px 20px;
    max-height: 90vh;
    overflow-y: auto;
  }
`;

export const CookieHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 12px;
`;

export const CookieIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${ACCENT_BLUE};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${WHITE};
  font-size: 20px;
`;

export const CookieTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${NAVY};
  margin: 0;
`;

export const CookieDescription = styled.p`
  color: ${GRAY};
  line-height: 1.6;
  margin: 0 0 24px 0;
  font-size: 14px;
`;

export const CookieSettingsContainer = styled.div<{ $isExpanded: boolean }>`
  margin: 20px 0;
  border: 1px solid ${LIGHT_BLUE};
  border-radius: 12px;
  overflow: hidden;
  max-height: ${props => props.$isExpanded ? '400px' : '0'};
  opacity: ${props => props.$isExpanded ? 1 : 0};
  transition: all 0.3s ease;
`;

export const CookieSettingsHeader = styled.button`
  width: 100%;
  padding: 16px 20px;
  background: ${OFF_WHITE};
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 600;
  color: ${NAVY};
  font-size: 14px;
  transition: background 0.2s ease;

  &:hover {
    background: ${LIGHT_BLUE};
  }
`;

export const CookieSettingsContent = styled.div`
  padding: 20px;
  background: ${WHITE};
`;

export const CookieCategory = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${LIGHT_BLUE};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CategoryTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${NAVY};
  margin: 0;
`;

export const CategoryDescription = styled.p`
  color: ${GRAY};
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
`;

export const ToggleSwitch = styled.label<{ $disabled?: boolean }>`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  opacity: ${props => props.$disabled ? 0.5 : 1};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
`;

export const ToggleSlider = styled.span<{ $checked: boolean; $disabled?: boolean }>`
  position: absolute;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.$checked ? ACCENT_BLUE : GRAY};
  transition: 0.3s;
  border-radius: 24px;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: ${props => props.$checked ? '29px' : '3px'};
    bottom: 3px;
    background-color: ${WHITE};
    transition: 0.3s;
    border-radius: 50%;
  }
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const CookieButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 24px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const CookieButton = styled.button<{ $variant: 'primary' | 'secondary' | 'text' }>`
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;
  
  ${props => {
    switch (props.$variant) {
      case 'primary':
        return `
          background: ${ACCENT_BLUE};
          color: ${WHITE};
          border-color: ${ACCENT_BLUE};
          
          &:hover {
            background: ${PRIMARY_BLUE};
            border-color: ${PRIMARY_BLUE};
            transform: translateY(-2px);
          }
        `;
      case 'secondary':
        return `
          background: ${WHITE};
          color: ${NAVY};
          border-color: ${ACCENT_BLUE};
          
          &:hover {
            background: ${LIGHT_BLUE};
            transform: translateY(-2px);
          }
        `;
      case 'text':
        return `
          background: transparent;
          color: ${GRAY};
          border-color: transparent;
          padding: 12px 16px;
          
          &:hover {
            color: ${NAVY};
            background: ${OFF_WHITE};
          }
        `;
    }
  }}

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export const PrivacyLink = styled.a`
  color: ${ACCENT_BLUE};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
    color: ${PRIMARY_BLUE};
  }
`;
