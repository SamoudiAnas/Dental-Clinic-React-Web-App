import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={() => (token ? children : <Redirect to="/login" />)}
    ></Route>
  );
};

export default PrivateRoute;
