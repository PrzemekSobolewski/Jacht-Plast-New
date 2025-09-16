import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaHome, FaShip, FaPhone } from 'react-icons/fa';
import { HeaderNav } from '@/components/Header/HeaderNav';
import { Footer } from '@/components/Footer/Footer';
import { Container } from '@/components/Container/Container.styles';
import { CTALink } from '@/components/common/Buttons.styles';
import styled from 'styled-components';
import { 
  PRIMARY_BLUE, 
  SECONDARY_BLUE, 
  ACCENT_BLUE, 
  LIGHT_BLUE, 
  WHITE, 
  OCEAN_GRADIENT 
} from '@/styles/colors';

const ErrorPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ErrorSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  background: ${OCEAN_GRADIENT};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/ram-transport.webp') center/cover;
    opacity: 0.1;
    z-index: 1;
  }
`;

const ErrorContent = styled.div`
  text-align: center;
  color: ${WHITE};
  position: relative;
  z-index: 2;
  max-width: 600px;
  padding: 0 20px;
`;

const ErrorCode = styled.h1`
  font-size: clamp(8rem, 15vw, 12rem);
  font-weight: 900;
  margin: 0;
  background: linear-gradient(45deg, ${ACCENT_BLUE}, ${SECONDARY_BLUE}, ${PRIMARY_BLUE});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 20px rgba(43, 155, 186, 0.3);
  line-height: 0.9;
`;

const ErrorTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  margin: 20px 0;
  color: ${WHITE};
`;

const ErrorDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 30px 0;
  color: ${LIGHT_BLUE};
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const ErrorActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 40px;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const ActionButton = styled(CTALink)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
  min-width: 180px;
  justify-content: center;
  margin: 0 8px;

  &:active {
    transform: translateY(0);
  }
`;

const IconWrapper = styled.div`
  font-size: 1.2em;
`;

const WaveAnimation = styled.div`
  display: none;
`;

const Custom404: React.FC = () => {
  return (
    <>
      <Head>
        <title>404 - Strona nie została znaleziona | Jacht-Plast</title>
        <meta 
          name="description" 
          content="Przepraszamy, ale strona której szukasz nie została znaleziona. Wróć na stronę główną Jacht-Plast lub skontaktuj się z nami." 
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.jacht-plast.pl" />
      </Head>

      <ErrorPageContainer>
        <HeaderNav />
        
        <ErrorSection>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <ErrorContent>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <ErrorCode>404</ErrorCode>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <ErrorTitle>Ups! Zgubiliśmy się na morzu</ErrorTitle>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <ErrorDescription>
                    Strona, której szukasz, przepłynęła gdzieś w dal oceanem internetowym. 
                    Może została przeniesiona, usunięta lub po prostu nie istnieje. 
                    Wróć na bezpieczny port - naszą stronę główną.
                  </ErrorDescription>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <ErrorActions>
                    <ActionButton href="/">
                      <IconWrapper>
                        <FaHome />
                      </IconWrapper>
                      Strona Główna
                    </ActionButton>
                    
                    <ActionButton href="/produkcja-jachtow">
                      <IconWrapper>
                        <FaShip />
                      </IconWrapper>
                      Nasze Jachty
                    </ActionButton>
                    
                    <ActionButton href="/kontakt">
                      <IconWrapper>
                        <FaPhone />
                      </IconWrapper>
                      Kontakt
                    </ActionButton>
                  </ErrorActions>
                </motion.div>
              </ErrorContent>
            </motion.div>
          </Container>
          
          <WaveAnimation />
        </ErrorSection>
        
        <Footer />
      </ErrorPageContainer>
    </>
  );
};

export default Custom404;
