import React, { useEffect } from "react";
import styled from "styled-components";
import SplashLogo from "./SplashLogo";

const Splash = ({ history }) => {
  useEffect(() => {
    setTimeout(() => {
      history.push("/intro");
    }, 1500);
  }, []);
  return (
    <SplashBox>
      <SplashLogo />
    </SplashBox>
  );
};

export default Splash;

export const SplashBox = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 480px;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.mainOrange};
`;
