import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { categoryList } from './testData';

type categoryProps = {
	mouseAction: boolean;
	handleAnswerBtn: (answer: string, index: number, type?: boolean) => void;
};

const CategoryButtonForm = ({ mouseAction, handleAnswerBtn }: categoryProps) => {
	return (
		<>
			{categoryList.map((category, idx) => {
				return (
					<li>
						<Test mouseAction={mouseAction} onClick={() => handleAnswerBtn(category, idx)}>
							{category}
						</Test>
					</li>
				);
			})}
		</>
	);
};

export default CategoryButtonForm;

const Test = styled.button`
	width: 100%;
	padding: 20px;
	cursor: ${(props) => (props.mouseAction ? 'pointer' : 'not-allowed')};
	pointer-events: ${(props) => (props.mouseAction ? 'auto' : 'none')};
`;
