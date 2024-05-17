import React from "react";
import "./Title.css";

const Title = ({ subtitle, title }) => {
  return (
    <div className="title-bg">
      <h1>{subtitle}</h1>
      <h3>{title}</h3>
    </div>
  );
};

export default Title;
