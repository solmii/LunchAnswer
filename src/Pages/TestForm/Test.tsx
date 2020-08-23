import React from "react";
import styled from "styled-components";
import MyChat from "Components/MyChat";
import OtherChat from "Components/OtherChat";

const TestForm: React.FC = () => {
  return (
    <TestSection>
      <MyChat>오늘 점심 뭐먹을래?</MyChat>
      <OtherChat isMain={true}>그냥 아무거나~</OtherChat>
    </TestSection>
  );
};

export default TestForm;

const TestSection = styled.section`
  width: 100vw;
  height: 100vh;
`;
