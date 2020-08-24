import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { styled, ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/GlobalStyle';
import theme from './Styles/theme';
import Splash from './Pages/Splash';
import Intro from './Pages/Intro';
import TestForm from 'Pages/TestForm';
import ResultForm from 'Pages/ResultForm';

const Routes = () => {
	return (
		<Router>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Switch>
					<Route exact path='/' component={Splash} />
					<Route exact path='/intro' component={Intro} />
					<Route exact path='/test' component={TestForm} />
					<Route exact path='/result' component={ResultForm} />
					<Redirect from='*' to='/' />
				</Switch>
			</ThemeProvider>
		</Router>
	);
};

export default Routes;
