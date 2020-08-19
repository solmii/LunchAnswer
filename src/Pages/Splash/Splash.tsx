import React from "react";
import styled from "styled-components";
import SplashLogo from "./SplashLogo";

const Splash = () => {
  return (
    <SplashBox>
      <SplashLogo />
    </SplashBox>
  );
};

export default Splash;

const SplashBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.primary};
`;
