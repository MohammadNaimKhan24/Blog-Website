import React from "react";
import { NavLink } from "react-router-dom";
import "./topbar.css";

const Topbar = () => {
  const user = false;

  const navLinkActiveStyle = {
    fontWeight: "bold",
    color: "darkslateblue",
  };

  const navLinkStyle = {
    textDecoration: "none",
    color: "#666",
    marginRight: "10px",
    fontWeight: "300",
  }

  return (
    <div className="topBar">
      <div className="topBarLeft">
        <a
          href="https://www.facebook.com/mohammad.naimkhan.1800"
          target="_blank"
        >
          <i class="topIcon fab fa-facebook-square"></i>
        </a>
        <a href="https://www.instagram.com/mohammadnaimkhan66/" target="_blank">
          <i class="topIcon fab fa-instagram-square"></i>
        </a>
        <a href="https://twitter.com/164532Naim2" target="_blank">
          <i class="topIcon fab fa-twitter-square"></i>
        </a>
        <a href="https://www.pinterest.com/132mohammadnaim" target="_blank">
          <i class="topIcon fab fa-pinterest-square"></i>
        </a>
      </div>
      <div className="topBarCenter">
        <ul className="topList">
          <li className="topListItem active">
            <NavLink exact to="/" style={navLinkStyle} activeStyle={navLinkActiveStyle}>
              HOME
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink to="/about" style={navLinkStyle} activeStyle={navLinkActiveStyle}>
              ABOUT
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink to="/contact" style={navLinkStyle} activeStyle={navLinkActiveStyle}>
              CONTACT
            </NavLink>
          </li>
          <li className="topListItem">
            {user ? (
              <NavLink to="/write" style={navLinkStyle} activeStyle={navLinkActiveStyle}>
                WRITE
              </NavLink>
            ) : (
              <NavLink className="NavLink" to="/register" style={navLinkStyle}>
                WRITE
              </NavLink>
            )}
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topBarRight">
        {user ? (
          <span className="topImg"></span>
        ) : (
          <>
            <NavLink
              to="/register"
              style={navLinkStyle}
              activeStyle={navLinkActiveStyle}
              className="regLink"
            >
              REGISTER
            </NavLink>
            <NavLink
              to="/login"
              style={navLinkStyle}
              activeStyle={navLinkActiveStyle}
              className="logLink"
            >
              LOGIN
            </NavLink>
          </>
        )}
        <i class="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};
export default Topbar;
