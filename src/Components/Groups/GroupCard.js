import React, { useState } from "react";
import "./Group.css";
const GroupCard = ({ profilePic, groupName }) => {
  const [followed, setFollowed] = useState(false);

  const handleClick = () => {
    setFollowed(true);
  };

  return (
    <div className="profile-card">
      <div className="nothing">
        <img src={profilePic} alt="" />
        <h2 className="group-name">{groupName}</h2>
      </div>
      <button
        className={`follow-button ${followed ? "followed" : ""}`}
        onClick={handleClick}
      >
        {followed ? "Followed" : "Follow"}
      </button>
    </div>
  );
};

export default GroupCard;
