import React from "react";
import styled from "styled-components";
import MyChat from "Components/MyChat";
import OtherChat from "Components/OtherChat";

const IntroChatField = () => {
  return (
    <IntroChatFieldBox>
      {/* <MyChat>오늘 점심 뭐먹을래?</MyChat>
      <OtherChat isMain={true}>그냥 아무거나 ~</OtherChat>
      <MyChat>김치찌개 어때?</MyChat>
      <OtherChat isMain={true}>그건 좀....</OtherChat>
      <MyChat>그럼 쌀국수 ㄱㄱ?</MyChat>
      <OtherChat isMain={true}>어제 먹었는데...</OtherChat>
      <MyChat>그럼 답점너로 정하자!!</MyChat> */}
    </IntroChatFieldBox>
  );
};

export default IntroChatField;

const IntroChatFieldBox = styled.div`
  height: 343px;
  border-radius: 30px;
  background-color: white;

  article:nth-child(odd) {
    position: relative;
    right: -100px;
  }
`;
