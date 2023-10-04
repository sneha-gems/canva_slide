import React, { createContext, useState } from "react";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, data: null });
  // we will use loading later

  const setAuthData = (data) => {
    setAuth({ data: data });
    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("user", JSON.stringify(data));
  };
  // a function that will help us to add the user data in the auth;

  return (
    <authContext.Provider value={{ auth, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
