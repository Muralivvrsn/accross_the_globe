import React, { useState } from "react";
import "./Location.css";
import pencil from "../../assests/pencil.svg";
import xmark from "../../assests/xmark.svg";
import location1 from "../../assests/location.svg";
const Location = ({ location }) => {
  const [editable, setEditable] = useState(false);
  const [text, setText] = useState(location);

  const handleClick = () => {
    setEditable(true);
  };

  const handleBlur = () => {
    setEditable(false);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="location location1">
      <img src={location1} alt="" />
      {editable ? (
        <input
          type="text"
          value={text}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      ) : (
        <span>{text}</span>
      )}
      {!editable ? (
        <span
          className="pencil-icon"
          onClick={handleClick}
          role="button"
          tabIndex={0}
        >
          <img src={pencil} alt="" />
        </span>
      ) : (
        <span
          className="pencil-icon"
          onClick={handleBlur}
          role="button"
          tabIndex={0}
        >
          <img src={xmark} alt="" />
        </span>
      )}
    </div>
  );
};

export default Location;
