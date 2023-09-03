import React, { useState, useEffect, useRef } from "react";
import "./Post.css";
import location from "../../assests/location.svg";
import eye from "../../assests/eye.svg";
import job from "../../assests/job.svg";
import date from "../../assests/date.svg";
const PostCard = ({ data }) => {
  const [showEdit, setShowEdit] = useState(false);
  const editRef = useRef(null);

  const close = () => setShowEdit(false);
  const open = () => setShowEdit(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (editRef.current && !editRef.current.contains(event.target)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="post">
      <div className="post-img">
        {data.image && <img src={data.image} alt="" />}
      </div>
      <div className="details">
        <div className="topic">{data.topic}</div>
        <div className="title">
          <div id="title">{data.title}</div>
          <div className={`edit ${showEdit ? "editClicked" : ""}`}>
            <img
              src={data.edit}
              alt=""
              onClick={(e) => {
                if (showEdit) close();
                else open();
                e.stopPropagation();
              }}
            />
            {showEdit && (
              <div id="edit" ref={editRef} onClick={(e) => e.stopPropagation()}>
                <div className="Edit">Edit</div>
                <div className="record">Record</div>
                <div className="option">Option</div>
              </div>
            )}
          </div>
        </div>
        {data.about && <div className="about">{data.about}</div>}
        {!data.about && (
          <div className="com-loc">
            {data.company && (
              <div className="company">
                {" "}
                <img src={job} alt="" /> {data.company}
              </div>
            )}
            {data.date && (
              <div className="date">
                {" "}
                <img src={date} alt="" /> {data.date}
              </div>
            )}
            {data.location && (
              <div className="location">
                {" "}
                <img src={location} alt="" /> {data.location}
              </div>
            )}
          </div>
        )}
        {data.link && <div className="link1" id={`${data.topic}`}>
          {data.link}
        </div>}
        <div className="profile">
          <div className="left-section">
            <div className="profile-i">
              <img src={data.profile} alt="" />
            </div>
            <div>
              <div className="name">{data.name}</div>
              <div className="views1">{data.views} views</div>
            </div>
          </div>
          <div className="right-section">
            <div className="views">
              <img src={eye} alt="" /> {data.views} views
            </div>
            <div className="share">
              <img src={data.share} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
