import React from "react";
import profile from "../../image/profile.png";
import "./Profile.css";

const Profile = ({ selectSub }) => {
  let totalTime = 0;
  selectSub.forEach((element) => {
    totalTime = totalTime + element.time;
  });

  return (
    <div className="main">
      <div className="profile1">
        <img src={profile} alt="" />
        <h3>Naymur Rahman</h3>
      </div>
      <p>
      A Frontend Developer. I started my journey as a web developer in 2020. As well as work I also continued to keep learning and exploring new technologies for updating myself. I've made myself more efficient and productive. I love to learn new technologies and work on them. I strongly believe there is always "One More Thing" to learn.
      </p>

      <div className="break">
        <h3>Add A Break </h3>
        <div className="allBtn">
          <button className="break-btn">05m</button>
          <button className="break-btn">10m</button>
          <button className="break-btn">15m</button>
          <button className="break-btn">18m</button>
          <button className="break-btn">20m</button>
        </div>
      </div>

      <div className="details">
        <h3>Exercise Details</h3>
        <h4>total time: {totalTime}m</h4>
        <h4>Break time:12m</h4>
      </div>
    </div>
  );
};

export default Profile;
