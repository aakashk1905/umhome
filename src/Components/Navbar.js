import React from "react";
import "./styles/Navbar.css";
import logo from "../assests/logo.svg";
const Navbar = () => {
  return (
    <div className="nav-cont">
      <img src={logo} alt="logo" />
      <div className="nav-links-cont">
        <span>
          <a href="#hero">Home</a>
        </span>
        <span>
          <a href="#about">About</a>
        </span>
        <span>
          <a href="#explore">Explore</a>
        </span>
        <span>
          <a href="#faq">Faq</a>
        </span>
      </div>
      <a href="#choose">
        <div className="nav-cta">Get Started</div>
      </a>
    </div>
  );
};

export default Navbar;
