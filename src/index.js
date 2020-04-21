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
  ACausePage,
  AddCause,
  Profile,
  ModeratorCausePage,
  VerifyEmailPage,
  ResetPassword,
} from "./containers";
import * as serviceWorker from "./serviceWorker";
import { useParams, useHistory, useLocation } from "react-router";
import "./index.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import store from "./store";
import { Colors } from "./constants";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";
import ModeratorRoute from "./components/ModeratorRoute";

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
        leavingScreen: 200,
      },
    },
    palette: {
      primary: {
        main: Colors.appRed,
      },
    },
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
            <GuestRoute path="/signin" component={Signin} />
            <GuestRoute path="/signup" component={Signup} />
            <GuestRoute path="/recover-password" component={RecoverPassword} />
            <GuestRoute
              path="/users/verify_email/:token"
              component={VerifyEmailPage}
            />
            <GuestRoute
              path="/users/reset_password/:token"
              component={ResetPassword}
            />
            <Route path="/how-it-works" component={HowItWorks} />
            <ProtectedRoute path="/dashboard" component={Dashboard} exact />
            <ProtectedRoute
              path="/dashboard/create-cause"
              component={AddCause}
            />
            <ProtectedRoute path="/dashboard/profile" component={Profile} />
            <Route path="/cause/:id" component={ACausePage} />
            <ModeratorRoute
              path="/dashboard/cause/:id"
              component={ModeratorCausePage}
            />
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
