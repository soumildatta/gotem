import React from "react";
import useIsDriver from "../hooks/useIsDriver";
import { useAuth } from "../contexts/AuthContext";
import { Route, Redirect, useHistory } from "react-router-dom";

export default function PassengerRoute({ component: Component, ...rest }) {
  const { isDriver } = useIsDriver();
  const { isLoggedIn } = useAuth();
  const history = useHistory();

  if (Boolean(localStorage.getItem("redirect"))) {
    const location = localStorage.getItem("redirect");
    localStorage.removeItem("redirect");
    history.push(location);
  }

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
