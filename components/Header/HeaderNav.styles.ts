import { MAIN_BLUE } from "@/styles/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .header-logo {
    margin: 1em 0 1em 6em;
  }
`;

export const Nav = styled.nav`
  font-family: Roboto, sans-serif;
  margin-right: 100px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 100px;
  font-weight: 500;
  & a {
    transition: all 0.3s ease;

    & .pressed {
      color: ${MAIN_BLUE};
    }
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background: ${MAIN_BLUE};
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.5s;
    }
    &:hover {
      color: ${MAIN_BLUE};
      cursor: pointer;
      &::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
`;
