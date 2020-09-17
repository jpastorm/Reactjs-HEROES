import React, { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const HandleClick = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    //history.push('/')
    //history.replace('/')
    const data = {
      username: "jpastorm",
      logged: "true",
    };
    dispatch({
      type: types.login,
      payload: data,
    });
    history.replace(lastPath);
  };
  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />

      <button className="btn btn-primary" onClick={HandleClick}>
        Login
      </button>
    </div>
  );
};
