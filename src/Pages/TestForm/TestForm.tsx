import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MyChat from 'Components/MyChat';
import OtherChat from 'Components/OtherChat';
import CategoryButtonForm from './CategoryButtonForm';
import { questionList, answerList, categoryChatList } from './testData';

const TestForm = () => {
	const [mouseAction, setMouseAction] = useState<boolean>(true);
	const [questionCount, setQuestionCount] = useState<number>(1);
	const [chatList, setChatList] = useState<string[] | any>([]);
	const [userResult, serUserResult] = useState<boolean[] | any>([]);

	// 진행도 증가 함수
	const increaseProgress = () => setQuestionCount(questionCount + 1);

	// 채팅 목록에 새로운 질문,답변 추가하는 함수
	const addChatList = (answer: string, category?: boolean): void => {
		setMouseAction(false);
		let newAnswer: string = `${answerList[questionCount - 2]} ${answer}`;
		if (category) {
			newAnswer = `${answer}`;
		}
		const newQuestion: string = questionList[questionCount];
		setChatList([...chatList, [newAnswer]]);
		setTimeout(() => {
			setChatList([...chatList, [newAnswer, newQuestion]]);
			setMouseAction(true);
		}, 1200);
	};

	// 좋아/싫어 버튼 눌렀을 때 위의 로직들을 모두 실행
	const handleAnswerBtn = (answer: string, index: number = 0, type?: boolean): void => {
		if (type !== undefined) {
			addChatList(answer);
			serUserResult([...userResult, type]);
		} else {
			addChatList(categoryChatList[index], true);
			serUserResult([...userResult, answer]);
		}
		increaseProgress();
	};

	return (
		<TestSection>
			<QuestionForm>
				<h1>Q{questionCount}</h1>
				<p>{questionCount}/7</p>
			</QuestionForm>

			<ChatForm questionCount={questionCount}>
				<ul>
					<li id='square' className='fadeInLeft animated'>
						<OtherChat>종류는 뭘로 할래?</OtherChat>
					</li>
					{chatList.map((message) => (
						<>
							<li>
								<MyChat>{message[0]}</MyChat>
							</li>
							<li id='square' className='fadeInLeft animated'>
								<OtherChat>{message[1]}</OtherChat>
							</li>
						</>
					))}
				</ul>
			</ChatForm>

			<ButtonForm>
				<ul>
					{questionCount === 1 ? (
						<CategoryButtonForm mouseAction={mouseAction} handleAnswerBtn={handleAnswerBtn} />
					) : (
						<>
							<li>
								<Test mouseAction={mouseAction} onClick={() => handleAnswerBtn('좋아!', undefined, true)}>
									좋아
								</Test>
							</li>
							<li>
								<Test mouseAction={mouseAction} onClick={() => handleAnswerBtn('싫어!', undefined, false)}>
									싫어
								</Test>
							</li>
						</>
					)}
				</ul>
			</ButtonForm>
		</TestSection>
	);
};

export default TestForm;

// 가로로 너무 꽉차게 나와서 임시로 가로 크기 지정 해뒀습니다!
const TestSection = styled.section`
	width: 50%;
	margin: 0 auto;

	@media (max-width: 768px) {
		width: 90%;
	}
`;

const QuestionForm = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	padding: 1em 2em;

	h1 {
		font-family: ${(props) => props.theme.questionFont};
		font-size: 2.5em;
		color: ${(props) => props.theme.mainOrange};
	}

	p {
		font-family: ${(props) => props.theme.mainFontBold};
		font-size: 0.875em;
		color: ${(props) => props.theme.progressGray};
	}
`;

const ChatForm = styled.div`
	height: ${(props) => (props.questionCount === 1 ? '12.188em' : '27em')};
	overflow: scroll;
	margin: 1.25em;
	padding: 1.25em 0;
	border-radius: 1.875em;
	background-color: ${(props) => props.theme.lightGray};

	ul {
		display: flex;
		flex-direction: column;

		li {
			display: flex;
			padding: 1.375em 1em 0;

			&:nth-of-type(even) {
				align-self: flex-end;
			}
		}
	}
`;

const ButtonForm = styled.div`
	ul {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;

		li {
			width: 40%;
			margin: 10px;

			&:nth-of-type(7) {
				width: 85%;
			}
		}
	}
`;

// 임시 버튼
const Test = styled.button`
	width: 100%;
	padding: 20px;
	cursor: ${(props) => (props.mouseAction ? 'pointer' : 'not-allowed')};
	pointer-events: ${(props) => (props.mouseAction ? 'auto' : 'none')};
`;
