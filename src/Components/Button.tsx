import React from "react";
import styled from "styled-components";

type ButtonProps = {
  color: string;
  children: React.ReactChild;
  eventFunc: any;
};

const Button = ({ color, children, eventFunc }: ButtonProps) => {
  return (
    <ButtonBox color={color} onClick={eventFunc}>
      {children}
    </ButtonBox>
  );
};

export default React.memo(Button);

const ButtonBox = styled.button`
  outline: none;
  border: none;
  width: 100%;
  padding: 13px 0;
  border-radius: 8px;

  * {
    font-size: 21.5px;
    font-family: ${({ theme }) => theme.mainFontRegular};
  }
  b {
    font-family: ${({ theme }) => theme.mainFontBold};
  }

  ${({ color, theme }) => handleColorType(color, theme)}; /* 컬러 체킹 */

  &:active {
    transform: translateY(7px);
    box-shadow: 0px 0px;
  }
`;

const handleColorType = (color, theme) => {
  switch (color) {
    case "yellow":
      return `background: ${theme.mainYellow}; box-shadow: 0px 7px ${theme.btnShadowYellow};`;
    case "white":
      return `background: white; box-shadow: 0px 7px ${theme.btnShadowGray};`;
    case "gray":
      return `background: ${theme.lightGray}; box-shadow: 0px 7px ${theme.btnShadowGray};`;
  }
};
