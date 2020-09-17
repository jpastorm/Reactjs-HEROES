import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import { types } from "../types/types";
const Navbar = () => {
  const {
    user: { username },
    dispatch,
  } = useContext(AuthContext);
  const history = useHistory();
  console.log(history);
  console.log(username);
  const handleLogout = () => {
    history.replace("/login");
    dispatch({
      type: types.logout,
    });
    localStorage.removeItem("username");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">{username}</span>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/login"
          ></NavLink>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
