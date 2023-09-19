import React from "react";
import logo from "./images/addidas-logo-png-removebg-preview.png";
import SerchLogo from "./images/search-removebg-preview.png";
import user from "./images/user.png";
import favorite from "./images/heart.png";
import cart from "./images/shopping-bag.png";
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="topnavbar">
        <span className="off">SIGNUP & GET 15% 0FF</span>
      </div>
      <div className="navbar">
        <div className="navbar-one">
          <Link to="/">
            {" "}
            <div className="logo">
              <img className="logo-style" src={logo} alt="" />
            </div>
          </Link>
          <div className="nav-mid-part">
            <span className="gender">MEN</span>
            <span className="gender">WOMEN</span>
            <span className="gender">KIDS</span>
            <span>SPORTS</span>
            <span>BRANDS</span>
            <span>COLLECTIONS</span>
            <span className="outlet">OUTLET</span>
          </div>
        </div>
        <div className="navbar-two">
          <div className="nav-sign">
            <p className="links">help</p>
            <p className="links">returns</p>
            <p className="links">order tracker</p>
            <Link className="signlink" to="Sign">
              {" "}
              <p className="links">sign up</p>
            </Link>
            <Link className="signlink" to="Login">
              <p className="links">log in</p>
            </Link>
          </div>
          <div className="input-line">
            <div className="nav-input">
              <input
                className="nav-input1"
                type="search"
                placeholder="  Search"
              />
              <img className="serch" src={SerchLogo} alt="" />
            </div>
            <div className="icons">
              <img className="user" src={user} alt="" />
              <img className="user" src={favorite} alt="" />
              <img className="user" src={cart} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
