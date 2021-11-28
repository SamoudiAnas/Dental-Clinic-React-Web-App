import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../firebase-config";

const LoginContext = createContext();

function LoginProvider({ children }) {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  //login handler
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setCurrentUser(userCredential.user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        setError(error);
      });
  };

  //logout handler
  const logout = () => {
    return signOut(auth).then(() => {
      setCurrentUser(null);
      setIsLoggedIn(false);
      localStorage.removeItem("userToken");
    });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        localStorage.setItem("user", true);
      } else {
        localStorage.removeItem("user");
      }
    });

    // Cleanup subscription on unmount
    //return () => unsubscribe();
  }, []);

  return (
    <LoginContext.Provider
      value={{
        isAuthenticating,
        setIsAuthenticating,
        isLoggedIn,
        setIsLoggedIn,
        currentUser,
        setCurrentUser,
        login,
        logout,
        error,
        setError,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;

export const useLoginContext = () => {
  return useContext(LoginContext);
};
