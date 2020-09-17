import React, { useReducer, useEffect } from "react";
import AppRouter from "./routers/AppRouter";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
const init = () => {
  return (
    JSON.parse(localStorage.getItem("username")) || {
      logged: false,
    }
  );
};
const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(user));
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default HeroesApp;
