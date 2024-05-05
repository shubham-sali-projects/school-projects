import React from "react";
import "./Header.css";
import img from "../../assets/dark-arrow.png";

const Header = () => {
  return (
    <>
      <div className="hero container">
        <div className="hero-tetx">
          <h1>We Ensure better eduction for a better world</h1>
          <p>
            Oor cutting-edge curriculum is designed to empower students with a
            knowledge,skills and experiences needed to excel in the dynamic
            field of eduction.
          </p>
          <button className="btn">
            Explore More <img src={img} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
