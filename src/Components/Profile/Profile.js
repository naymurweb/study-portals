import React from "react";
import profile from "../../image/profile.png";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="main">
      <div className="profile1">
        <img src={profile} alt="" />
        <h3>Naymur Rahman</h3>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        suscipit mollitia, consequatur explicabo adipisci distinctio
        consequuntur atque iure placeat repellendus sunt sit, eveniet, quidem
        nihil dolor ea tempore officia quod!
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
        <h4>Exercise time:12m</h4>
        <h4>Break time:12m</h4>
       </div>


    </div>
  );
};

export default Profile;
