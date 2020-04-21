import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated, userIsModerator } from "../helpers/utils";

const ModeratorRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated() && userIsModerator()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ModeratorRoute;
