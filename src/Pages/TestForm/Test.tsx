import React from 'react';
import styled from 'styled-components';
import MyChat from 'Components/MyChat';
import OtherChat from 'Components/OtherChat';

const TestForm: React.FC = () => {
	return (
		<TestSection>
			<MyChat message='오늘 점심 뭐먹을래?' />
			<OtherChat message='그냥 아무거나~' isMain={true} />
		</TestSection>
	);
};

export default TestForm;

const TestSection = styled.section`
	width: 100vw;
	height: 100vh;
`;
