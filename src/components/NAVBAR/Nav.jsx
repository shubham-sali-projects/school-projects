import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../../assets/logo.png";

const Nav = () => {
  const [stiky, setStiky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // if (window.scrollY > 100) {
      //   setStiky(true);
      // } else {
      //   setStiky(false);
      // }
      window.scrollY > 100 ? setStiky(true) : setStiky(false);
    });
  }, []);
  return (
    <>
      <nav className={`container ${stiky ? "dark-nav" : ""} `}>
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
