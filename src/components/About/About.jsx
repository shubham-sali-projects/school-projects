import React from "react";
import "./About.css";
import about_1mg from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_1mg} className="aboutimg" alt="" />
        <img src={play_icon} className="playicon" alt="" />
      </div>
      <div className="about-right">
        <h1>ABOUT UNIVERSITY</h1>
        <h2>
          Nurturing Tomorrow's <br /> Leaders Today
        </h2>
        <p>
          We are India’s leading digital healthcare platform. We are
          revolutionizing healthcare in India. We are making the healthcare
          experience more convenient, affordable and accessible to every Indian
          across the world.
        </p>
        <p>
          We are India’s leading digital healthcare platform. We are
          revolutionizing healthcare in India. We are making the healthcare
          experience more convenient, affordable and accessible to every Indian
          across the world.
        </p>
        <p>
          We are India’s leading digital healthcare platform. We are
          revolutionizing healthcare in India. We are making the healthcare
          experience more convenient, affordable and accessible to every Indian
          across the world.
        </p>
      </div>
    </div>
  );
};

export default About;
