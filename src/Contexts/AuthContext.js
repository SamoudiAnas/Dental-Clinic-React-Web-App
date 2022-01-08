import React, { useState, useContext, createContext } from "react";
import { loginHandler } from "../helpers/AuthHelpers";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, seterror] = useState(null);

  //login handler
  const login = async (email, password) => {
    let result = await loginHandler(email, password);

    //if there was some error
    if (result === null || undefined) {
      seterror("Can't log in please try again!");
      return;
    }

    //if the logged in user is not an admin
    if (!result.data.data.login.isAdmin) {
      seterror("Access Denied!");
      return;
    }

    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        login,
        error,
        seterror,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
