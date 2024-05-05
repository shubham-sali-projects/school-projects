import React from "react";
import "./Student.css";
import img1 from "../../assets/program-1.png";
import img2 from "../../assets/program-2.png";
import img3 from "../../assets/program-3.png";
import program_img1 from "../../assets/program-icon-1.png";
import program_img2 from "../../assets/program-icon-2.png";
import program_img3 from "../../assets/program-icon-3.png";

const Student = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={img1} alt="" />
        <div className="caption">
          <img src={program_img1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={img2} alt="" />
        <div className="caption">
          <img src={program_img2} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={img3} alt="" />
        <div className="caption">
          <img src={program_img3} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Student;
