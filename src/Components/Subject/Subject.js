import React from "react";
import "./Subject.css";

const Subject = ({ allSubject, btnClick }) => {
  //   console.log(allSubject);
  const { img, subject, details, time } = allSubject;
  return (
    <div className="subject">
      <img src={img} alt="" />
      <h2>{subject}</h2>
      <p>{details}</p>
      <p>Time required: {time}m</p>
      <button onClick={() => btnClick(allSubject)} className="sub-btn">
        <p>Add to list</p>
      </button>
    </div>
  );
};

export default Subject;
