import React from "react";
import styled from "styled-components";
import myMsgBefore from "assets/mymsg_before.png";
import myMsgAfter from "assets/mymsg_after.png";

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

export default MyChat;

const MessageBox = styled.article`
	p {
		background-color: ${(props) => props.theme.mainYellow};
	}

	${(props) => props.theme.MessageBox}
`;
