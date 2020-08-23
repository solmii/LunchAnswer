import React from "react";
import styled from "styled-components";
import myMsgBefore from "assets/mymsg_before.png";
import myMsgAfter from "assets/mymsg_after.png";
import ChatKeyFrames from "Styles/ChatKeyFrames";

type chatProps = {
  children: React.ReactChild;
};

const MyChat = ({ children }: chatProps) => {
  return (
    <MessageBox>
      <img alt="msg_before" src={myMsgBefore} />
      <p>{children}</p>
      <img alt="msg_after" src={myMsgAfter} />
    </MessageBox>
  );
};

export default React.memo(MyChat);

const MessageBox = styled.article`
  p {
    background-color: ${(props) => props.theme.mainYellow};
    b {
      font-family: ${({ theme }) => theme.mainFontBold};
    }
  }
  ${(props) => props.theme.MessageBox};

  animation: ${ChatKeyFrames} 0.8s linear 0s;
`;
