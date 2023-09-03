import React, { useState } from "react";
import joinGroup from "../../assests/addGroup.svg";
import arrow from "../../assests/arrow.svg";
import "./Header.css";
const Header = () => {
  const [states, setStates] = useState([1, 0, 0, 0, 0]);
  return (
    <div id="header">
      <div className="header-names">
        <ul>
          <li onClick={() => setStates([1, 0, 0, 0, 0])}>
            <p className={`${states[0] ? "black" : ""}`}>
              All Post()
            </p>
          </li>
          <li onClick={() => setStates([0, 1, 0, 0, 0])}>
            <p className={`${states[1] ? "black" : ""}`}>
              Article
            </p>
          </li>
          <li onClick={() => setStates([0, 0, 1, 0, 0])}>
            <p className={`${states[2] ? "black" : ""}`}>
              Event
            </p>
          </li>
          <li onClick={() => setStates([0, 0, 0, 1, 0])}>
            <p className={`${states[3] ? "black" : ""}`}>
              Education
            </p>
          </li>
          <li onClick={() => setStates([0, 0, 0, 0, 1])}>
            <p className={`${states[4] ? "black" : ""}`}>
              Job
            </p>
          </li>
        </ul>
      </div>
      <div className="join">
        <div className="write-post">
          <p>Write a Post</p>
          <img src={arrow} alt="" />
        </div>
        <div className="join-team-btn">
          <img src={joinGroup} alt="" />
          <p>Join Group</p>
        </div>
      </div>
      <div className="allPosts">
        <div className="all">Posts(369)</div>
        <div className="filter">
          Filter:<select>
            <option value="All">All</option>
            <option value="Date">Date</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
