import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const user = localStorage.getItem("user");
  return (
    <Route
      {...rest}
      render={() => (user ? children : <Redirect to="/login" />)}
    ></Route>
  );
};

export default PrivateRoute;
