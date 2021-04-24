import React from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { isLoggedIn } = useAuth();
  const history = useHistory();

  if (Boolean(localStorage.getItem("redirect"))) {
    const location = localStorage.getItem("redirect");
    localStorage.removeItem("redirect");
    history.push(location);
  }

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
