import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'Styles/GlobalStyle';
import theme from './Styles/theme';
import Splash from 'Pages/Splash';
import TestForm from 'Pages/TestForm';

const Routes = () => {
	return (
		<Router>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Switch>
					<Route exact path='/splash' component={Splash} />
					<Route exact path='/test' component={TestForm} />
					<Redirect from='*' to='/' />
				</Switch>
			</ThemeProvider>
		</Router>
	);
};

export default Routes;
