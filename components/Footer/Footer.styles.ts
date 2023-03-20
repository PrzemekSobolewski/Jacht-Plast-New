import { DULL_GRAY, WHITE, YELLOW } from "@/styles/colors";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  color: ${WHITE};
  background-color: ${DULL_GRAY};
  margin: 50px 0;
  padding: 50px 0;
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  min-height: 100%;
  max-width: 100%;
`;

export const FooterItem = styled.div`
  min-height: 133px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background-clip: padding-box;
  background-origin: padding-box;
  max-height: 100%;
`;

export const Title = styled.h4`
  margin-bottom: 0px;
`;

export const Border = styled.div`
  transform-origin: left center 0;
  position: relative;
  width: 100%;
  margin: 20px -1px 0 0;
  height: 1px;
  border-bottom: 1px solid ${WHITE};
`;

export const FooterItemContent = styled.p`
  font-size: 1rem;
  margin: 30px 0 20px;
  & a {
    &:hover {
      color: ${YELLOW};
    }
  }
`;

export const SocialLinksWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FbLink = styled.a`
  font-size: 3em;
  text-align: center;
  color: #4f8ce0;
  transition: all 0.3s ease;
  &:hover {
    color: #3b5998;
    transform: scale(1.5);
    cursor: pointer;
  }
`;

export const Link = styled.span`
  display: block;
  margin-bottom: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: ${YELLOW};
  }
`;
