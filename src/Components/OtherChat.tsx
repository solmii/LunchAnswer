import React from 'react';
import styled from 'styled-components';
import msgBefore from 'assets/msg_before_w.png';
import msgAfter from 'assets/msg_after_w.png';
import msgBeforeMain from 'assets/msg_before.png';
import msgAfterMain from 'assets/msg_after.png';

type chatProps = {
	message: string;
	isMain?: boolean;
	img?: string;
};

const OtherChat = ({ message, isMain, img }: chatProps) => {
	return (
		<MessageBox isMain={isMain}>
			{message && <img alt='msg_before' src={isMain ? msgBeforeMain : msgBefore} />}
			<p>{message}</p>
			{message && <img alt='msg_after' src={isMain ? msgAfterMain : msgAfter} />}
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
