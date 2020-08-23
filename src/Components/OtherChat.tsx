import React, { ReactChild } from 'react';
import styled from 'styled-components';
import msgBefore from 'assets/msg_before_w.png';
import msgAfter from 'assets/msg_after_w.png';
import msgBeforeMain from 'assets/msg_before.png';
import msgAfterMain from 'assets/msg_after.png';

type chatProps = {
	children: React.ReactChild; // props로 받아서 출력할 message
	isMain?: boolean; // main page에서 사용할경우 props로 true값을 넘겨주면 알아서 스타일 변경
	img?: string; // 결과창에서 사용할 image
};

const OtherChat = ({ children, isMain, img }: chatProps) => {
	return (
		<MessageBox isMain={isMain}>
			{children && <img alt='msg_before' src={isMain ? msgBeforeMain : msgBefore} />}
			<p>{children}</p>
			{children && <img alt='msg_after' src={isMain ? msgAfterMain : msgAfter} />}
		</MessageBox>
	);
};

export default OtherChat;

const MessageBox = styled.article`
	p {
		background-color: ${(props) => (props.isMain ? props.theme.lightGray : 'white')};
	}

	${(props) => props.theme.MessageBox}
`;
