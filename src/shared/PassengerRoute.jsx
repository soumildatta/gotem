import React from "react";
import useIsDriver from "../hooks/useIsDriver";
import { useAuth } from "../contexts/AuthContext";
import { Route, Redirect, useHistory } from "react-router-dom";

/* PassengerRoutes are protected routes that only logged in passengers can access */
export default function PassengerRoute({ component: Component, ...rest }) {
  const { isDriver } = useIsDriver();
  const { isLoggedIn } = useAuth();
  const history = useHistory();

  if (Boolean(localStorage.getItem("redirect"))) {
    const location = localStorage.getItem("redirect");
    localStorage.removeItem("redirect");
    history.push(location);
  }

  //if no user is logged in, redirect them to the signin page
  if (!isLoggedIn) {
    return (
      <Route
        {...rest}
        render={(props) => {
          return isLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to="/signin" />
          );
        }}
      ></Route>
    );
  }

  //only render page is logged in user is a passenger
  //if logged in user is not a passenger (i.e a driver), redirect to driver requests page
  return (
    <Route
      {...rest}
      render={(props) => {
        return !isDriver ? (
          <Component {...props} />
        ) : (
          <Redirect to="/requests" />
        );
      }}
    ></Route>
  );
}
