import React from "react";
import "./Nav.css";
import logo from "../../assets/logo.png";

const Nav = () => {
  return (
    <>
      <nav className="container">
        <img src={logo} alt="" className="logo" />
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li>
            <button className="btn">Contact us</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
