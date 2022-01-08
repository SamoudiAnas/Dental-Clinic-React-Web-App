import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useAuthContext } from "../../Contexts/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { isLoggedIn } = useAuthContext();
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/TheDental/admin/calendar");
    }
  }, []);

  return (
    <Route
      {...rest}
      render={() =>
        isLoggedIn ? children : <Redirect to="/TheDental/admin/login" />
      }
    ></Route>
  );
};

export default PrivateRoute;
