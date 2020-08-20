import { css } from 'styled-components';

const ThemeColor = {
	primary: '#f9582d',
	mainYellow: '#fccb05',
	lightGray: '#e6e6e6',
	btnShadowGray: '#c9c9c9',
	btnShadowYellow: '#fcb305',
	progressGray: '#666666',
};

const MessageBox = css`
	display: flex;

	p {
		text-align: center;
		line-height: 1.813em;
	}

	img {
		height: 1.813em;
	}
`;

const theme = {
	...ThemeColor,
	MessageBox,
};

export default theme;
