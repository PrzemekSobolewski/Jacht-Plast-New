import styled from 'styled-components';
import { 
  PRIMARY_BLUE, 
  WHITE, 
  NAVY, 
  LIGHT_BLUE, 
  GRAY,
  OFF_WHITE,
  SUCCESS,
  ERROR,
  OCEAN_GRADIENT
} from '@/styles/colors';

export const ContactSection = styled.section`
  padding: 100px 0;
  background: ${WHITE};
`;

export const ContactCard = styled.div`
  max-width: 800px;
  margin: 60px auto 0;
  background: ${OFF_WHITE};
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  border: 1px solid ${LIGHT_BLUE};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 30px;
  }
`;

export const ContactInfo = styled.div`
  flex: 1;
  
  h3 {
    font-size: 1.5rem;
    color: ${NAVY};
    margin: 0 0 15px 0;
    font-weight: 600;
  }
  
  p {
    color: ${GRAY};
    line-height: 1.6;
    margin: 0 0 20px 0;
    
    &:last-child {
      margin: 0;
    }
  }
  
  div {
    margin-top: 20px;
    
    p {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 500;
      margin: 10px 0;
      
      svg {
        color: ${PRIMARY_BLUE};
        font-size: 16px;
      }
    }
  }
`;

export const ContactButton = styled.a`
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

export const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: ${WHITE};
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  border: 1px solid ${LIGHT_BLUE};
  
  @media (max-width: 768px) {
    padding: 40px 30px;
    margin: 0 20px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 25px;
`;

export const FormLabel = styled.label`
  display: block;
  font-weight: 600;
  color: ${NAVY};
  margin-bottom: 8px;
  font-size: 0.95rem;
`;

export const FormInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 15px 20px;
  border: 2px solid ${props => props.hasError ? ERROR : LIGHT_BLUE};
  border-radius: 10px;
  font-size: 1rem;
  background: ${WHITE};
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? ERROR : PRIMARY_BLUE};
    box-shadow: 0 0 0 3px ${props => props.hasError ? 
      'rgba(220, 53, 69, 0.1)' : 'rgba(43, 155, 186, 0.1)'};
  }
  
  &::placeholder {
    color: ${GRAY};
  }
`;

export const FormTextarea = styled.textarea<{ hasError?: boolean }>`
  width: 100%;
  padding: 15px 20px;
  border: 2px solid ${props => props.hasError ? ERROR : LIGHT_BLUE};
  border-radius: 10px;
  font-size: 1rem;
  background: ${WHITE};
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? ERROR : PRIMARY_BLUE};
    box-shadow: 0 0 0 3px ${props => props.hasError ? 
      'rgba(220, 53, 69, 0.1)' : 'rgba(43, 155, 186, 0.1)'};
  }
  
  &::placeholder {
    color: ${GRAY};
  }
`;

export const FormButton = styled.button<{ disabled?: boolean }>`
  background: ${props => props.disabled ? GRAY : OCEAN_GRADIENT};
  color: ${WHITE};
  padding: 15px 40px;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.disabled ? 'none' : '0 8px 25px rgba(43, 155, 186, 0.3)'};
  width: 100%;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(43, 155, 186, 0.4);
  }
`;

export const FormError = styled.span`
  color: ${ERROR};
  font-size: 0.85rem;
  margin-top: 5px;
  display: block;
`;

export const FormSuccess = styled.div`
  background: ${SUCCESS};
  color: ${WHITE};
  padding: 15px 20px;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 20px;
`;
