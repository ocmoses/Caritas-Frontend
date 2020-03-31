import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Home,
  About,
  FAQ,
  Signin,
  Dashboard,
  Causes,
  HowItWorks,
  Signup,
  RecoverPassword,
  ACausePage
} from "./containers";
import * as serviceWorker from "./serviceWorker";
import { useParams, useHistory, useLocation } from "react-router";
import "./index.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import store from "./store";
import { Colors } from "./constants";

const App = () => {
  const theme = createMuiTheme({
    transitions: {
      duration: {
        shortest: 200,
        shorter: 200,
        short: 200,
        standard: 200,
        complex: 200,
        enteringScreen: 200,
        leavingScreen: 200
      }
    },
    palette: {
      primary: {
        main: Colors.appRed
      }
    }
  });

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/FAQ" component={FAQ} />
            <Route path="/causes" exact component={Causes} />
            <Route path="/signin" component={Signin} />
            <Route path="/how-it-works" component={HowItWorks} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/dashboard/create-cause/1" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/recover-password" component={RecoverPassword} />
            <Route path="/causes/:id" component={ACausePage} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
