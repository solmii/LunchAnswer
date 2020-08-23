import React from "react";
import styled from "styled-components";
import IntroLogo from "./IntroLogo";
import IntroChatField from "./IntroChatField";
import Button from "Components/Button";

const Intro = () => {
  return (
    <IntroBox>
      <IntroLogo />
      <IntroChatField />
      <ButtonWrap>
        <Button color="yellow">
          <div>
            <span className="bold">점심</span> 메뉴 <br />
            테스트
          </div>
        </Button>
        <Button color="white">
          <div>
            귀찮을 땐 <br />
            <span className="bold">랜덤 </span>
            메뉴
          </div>
        </Button>
      </ButtonWrap>
    </IntroBox>
  );
};

export default Intro;

const IntroBox = styled.div`
  margin: 0 auto;
  max-width: 480px;
  width: 100vw;
  height: 100vh;
  padding: 0 21px;
  background-color: ${({ theme }) => theme.mainOrange};
`;
const ButtonWrap = styled.div`
  padding: 29px 0;
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 9px;
  grid-auto-flow: column;
`;
