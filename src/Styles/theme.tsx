import { css } from 'styled-components';

const ThemeColor = {
	mainOrange: '#f9582d',
	mainYellow: '#fccb05',
	lightGray: '#e6e6e6',
	btnShadowGray: '#c9c9c9',
	btnShadowYellow: '#fcb305',
	progressGray: '#666666',
};

const ThemeFont = {
	questionFont: '"yg-jalnan", sans-serif',
	mainFontRegular: '"S-CoreDream-4Regular", sans-serif',
	mainFontBold: '"S-CoreDream-6Bold", sans-serif',
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
	...ThemeFont,
	MessageBox,
};

export default theme;
