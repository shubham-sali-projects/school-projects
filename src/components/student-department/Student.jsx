import React from "react";
import "./Student.css";
import img1 from "../../assets/program-1.png";
import img2 from "../../assets/program-2.png";
import img3 from "../../assets/program-3.png";
import program_img1 from "../../assets/program-icon-1.png";
import program_img2 from "../../assets/program-icon-2.png";
import program_img3 from "../../assets/program-icon-3.png";

const Student = () => {
  const programlist = [
    {
      img: img1,
      programimg: program_img1,
    },
    {
      img: img2,
      programimg: program_img2,
    },
    {
      img: img3,
      programimg: program_img3,
    },
  ];
  return (
    <div className="programs">
      {programlist.map((program, index) => (
        <div className="program" key={index}>
          <img src={program.img} alt="" />
          <div className="caption">
            <img src={program.programimg} alt="" />
            <p>Graduation Degree</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Student;
