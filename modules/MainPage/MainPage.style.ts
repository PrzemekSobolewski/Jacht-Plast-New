import { screenSizeTo } from "@/styles/breakpoints";
import {
  BLACK,
  BLACK_OPACITY,
  DULL_GRAY,
  MAIN_BLUE,
  WHITE,
  YELLOW,
} from "@/styles/colors";
import styled from "styled-components";

export const HeroSection = styled.section`
  background-image: linear-gradient(0deg, ${BLACK_OPACITY}, ${BLACK_OPACITY}),
    url(https://www.jacht-plast.pl/_next/static/images/water-7ff46b8efa895f3f437d91980b71e03e.webp);
  object-fit: cover;
  display: block;
  vertical-align: middle;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  color: ${WHITE};
  text-shadow: 1px 2px rgba(0, 0, 0, 0.6);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;
  width: 559px;
  min-height: 796px;
  margin: 0 0 0 auto;
  padding-top: 67px;

  ${screenSizeTo("mobile")} {
    width: 100%;
    padding-top: 100px;
  }
`;

export const Separator = styled.div`
  height: 1px;
  background-color: ${WHITE};
  margin: 16px 0 0;
  width: 100%;
  ${screenSizeTo("mobile")} {
    width: 80%;
  }
`;

export const Title = styled.h1`
  margin: 10px 0 0 41px;
  font-weight: 400;
  font-size: 4.5rem;
  line-height: 1.1;
  text-align: right;
  ${screenSizeTo("mobile")} {
    font-size: 3rem;
  }
`;

export const Text = styled.p`
  margin: 40px 0 0 110px;
  font-size: 1.25rem;
  letter-spacing: 1px;
  text-align: right;
  ${screenSizeTo("mobile")} {
    margin: 30px 0 0 50px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  margin: 58px 0 53px auto;
  background-color: ${MAIN_BLUE};
  color: ${WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 30px;
  border-radius: 0;
  letter-spacing: 1px;
  filter: drop-shadow(1px 1px 2px #333);
  cursor: pointer;
  font-size: 1.25rem;
  ${screenSizeTo("mobile")} {
    margin: 40px 0 53px auto;
  }
`;

export const InfoBoxesWrapper = styled.div`
  width: 661px;
  margin-top: -108px;
  margin-right: auto;
  margin-left: 0;
  min-height: 709px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  ${screenSizeTo("smallDesktop")} {
    width: 561px;
  }

  ${screenSizeTo("bigTablet")} {
    width: 100%;
    margin-left: auto;
  }

  ${screenSizeTo("mobile")} {
    grid-template-columns: 1fr;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #d9d9d9;
  background-color: ${WHITE};
  color: ${BLACK};
`;

export const InfoIcon = styled.div`
  background-color: ${MAIN_BLUE};
  height: 64px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${WHITE};
  margin: 30px auto 0;

  ${screenSizeTo("tablet")} {
    margin: 24px auto 0;
    height: 56px;
    width: 56px;
    padding: 0;
  }
`;

export const InfoTitle = styled.h4`
  margin: 30px 32px 0;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.2;
  text-align: center;
  ${screenSizeTo("tablet")} {
    font-size: 1.3rem;
    margin: 24px 24px 0;
  }
`;

export const Desc = styled.p`
  font-style: italic;
  margin: 20px 29px 35px;
  text-align: center;
  ${screenSizeTo("tablet")} {
    font-size: 0.9rem;
    margin: 16px 20px 24px;
  }
`;

export const WrapperRight = styled.div`
  width: 490px;
  min-height: 665px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  text-align: right;
  color: ${BLACK};

  ${screenSizeTo("destkop")} {
    width: 437px;
  }

  ${screenSizeTo("smallDesktop")} {
    width: 350px;
  }

  ${screenSizeTo("bigTablet")} {
    position: relative;
    transform: translateY(0);
    width: 100%;
    min-height: auto;
  }
`;

export const Subtitle = styled.h2`
  margin: 65px 0 0 0;
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 1.1;
  ${screenSizeTo("tablet")} {
    font-size: 2em;
  }

  ${screenSizeTo("mobile")} {
    text-align: center;
  }
`;

export const SmallSeparatorRight = styled.div<{ color: string }>`
  width: 30px;
  position: relative;
  margin: 37px 0 0 auto;
  border-bottom: 7px solid ${({ color }) => color};
  ${screenSizeTo("mobile")} {
    margin: 37px auto 0 auto;
  }
`;

export const SmallSeparatorLeft = styled.div<{ color: string }>`
  width: 30px;
  position: relative;
  margin: 37px auto 0 0;
  border-bottom: 7px solid ${({ color }) => color};
  ${screenSizeTo("mobile")} {
    margin: 37px auto 0 auto;
  }
`;

export const MainDesc = styled.p`
  margin: 35px 0 0 0;
  word-wrap: break-word;
  font-size: 1.2em;
  ${screenSizeTo("tablet")} {
    font-size: 1em;
  }
  ${screenSizeTo("mobile")} {
    text-align: center;
  }
`;

export const Section = styled.div`
  padding: 100px 0 0;
  color: ${BLACK};
  ${screenSizeTo("tablet")} {
    padding: 75px 0 0;
  }
`;

export const ColoredSection = styled.section`
  margin: 100px 0 0;
  background-color: ${MAIN_BLUE};
  padding: 80px 0 80px 0;
  color: ${WHITE};
  ${screenSizeTo("tablet")} {
    margin: 75px 0 0;
    padding: 60px 0;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 40px;

  ${screenSizeTo("bigTablet")} {
    flex-direction: column;
  }
`;

export const Content = styled.div<{ textAlign: string; color: string }>`
  color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  align-items: ${({ textAlign }) => textAlign};
  text-align: ${({ textAlign }) => textAlign};
`;

export const ImageContainer = styled.div`
  min-width: 608px;
  min-height: 538px;
  position: relative;
  filter: drop-shadow(1px 1px 3px ${BLACK_OPACITY});

  ${screenSizeTo("smallDesktop")} {
    min-width: 516px;
    min-height: 450px;
  }

  ${screenSizeTo("bigTablet")} {
    min-width: 100%;
    min-height: 538px;
  }

  ${screenSizeTo("tablet")} {
    min-height: 450px;
  }

  ${screenSizeTo("mobile")} {
    min-height: 320px;
  }
`;

export const ContactSection = styled.section`
  background-color: ${DULL_GRAY};
  margin-top: 100px;
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${WHITE};
  > h2 {
    margin: 0;
  }
  > a {
    margin: 0;
  }

  ${screenSizeTo("tablet")} {
    gap: 32px;
    flex-direction: column;
  }
`;
