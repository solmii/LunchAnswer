import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { styled, ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/GlobalStyle';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import theme from './Styles/theme';
import Splash from './Pages/Splash';
import Intro from './Pages/Intro';
import TestForm from 'Pages/TestForm';
import 'RoutesTransition.scss';

const Routes = () => {
	return (
		<Router>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Route
					render={({ location }) => {
						return (
							<TransitionGroup>
								<CSSTransition key={location.key} timeout={300} classNames='page'>
									<Switch>
										<Route exact path='/' component={Splash} />
										<Route exact path='/intro' component={Intro} />
										<Route exact path='/test' component={TestForm} />
										<Redirect from='*' to='/' />
									</Switch>
								</CSSTransition>
							</TransitionGroup>
						);
					}}
				></Route>
			</ThemeProvider>
		</Router>
	);
};

export default Routes;
