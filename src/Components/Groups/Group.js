import React from "react";
import "./Group.css";
import GroupCard from "./GroupCard";
import group1 from "../../assests/group1.svg";
import group2 from "../../assests/group2.svg";
import group3 from "../../assests/group3.svg";
import thumb from "../../assests/thumb.svg";
const Group = () => {
  const groups = [
    {
      name: "Leisure",
      pic: group1,
    },
    {
      name: "Activism",
      pic: group2,
    },
    {
      name: "MBA",
      pic: group3,
    },
  ];
  return (
    <div className="groups">
      <div className="recommand">
        <img src={thumb} alt="" />
        REcommended Groups
      </div>
      <div className="group">
        {groups.map((group) => (
          <GroupCard
            profilePic={group.pic}
            groupName={group.name}
            key={group.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Group;
