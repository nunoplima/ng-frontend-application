import { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
//========================================================================================================
// GENERAL
//========================================================================================================
* {
	box-sizing: border-box;
}
*::before {
	box-sizing: border-box;
}
*::after {
	box-sizing: border-box;
}

body {
	${({ theme }) => (`
		background-color: ${theme.colors.black};
		font-family: ${theme.fontFamily.primary};
	`)
}

p {
	all: unset;
}

`;

export default GlobalStyle;
