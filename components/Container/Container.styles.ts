import { screenSizeTo } from "@/styles/breakpoints";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 1240px;
  margin: 0 auto;
  ${screenSizeTo("destkop")} {
    width: 1140px;
  }
  ${screenSizeTo("smallDesktop")} {
    width: 940px;
  }

  ${screenSizeTo("bigTablet")} {
    width: 720px;
  }

  ${screenSizeTo("tablet")} {
    width: 540px;
  }

  ${screenSizeTo("mobile")} {
    width: 340px;
  }

  ${screenSizeTo("reallySmallMobile")} {
    width: 300px;
  }
`;
