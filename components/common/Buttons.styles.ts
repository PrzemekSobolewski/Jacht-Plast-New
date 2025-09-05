import { ACCENT_BLUE, LIGHT_BLUE, PRIMARY_BLUE, WHITE } from "@/styles/colors";
import { styled } from "styled-components";

export const CTAButton = styled.button`
  background: ${ACCENT_BLUE};
  color: ${WHITE};
  border: none;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(43, 155, 186, 0.3);
  
  &:hover {
    background: ${LIGHT_BLUE};
    color: ${PRIMARY_BLUE};
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(43, 155, 186, 0.4);
  }
`;

export const CTALink = styled.a`
  background: ${ACCENT_BLUE};
  color: ${WHITE};
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(43, 155, 186, 0.3);
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: ${LIGHT_BLUE};
    color: ${PRIMARY_BLUE};
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(43, 155, 186, 0.4);
  }
`;
