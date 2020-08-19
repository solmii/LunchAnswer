import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "Styles/GlobalStyle";
import ThemeColor from "./Styles/ThemeColor";
import Splash from "Pages/Splash";

const Routes = () => {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={ThemeColor}>
        <Switch>
          <Route exact path="/splash" component={Splash} />
          <Redirect from="*" to="/" />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default Routes;
