import React, { useState } from "react";

export default function Item({ task }) {
  const [shallDisplay, setShallDisplay] = useState("none");

  const handleCheckbox = () => {
    task.done = !task.done;
    console.log("clicked!", task);
  };

  const handleFocus = () => {
    setShallDisplay("inline");
  };

  const handleBlur = () => {
    setShallDisplay("none");
  };

  return (
    <li onMouseOver={handleFocus} onMouseLeave={handleBlur}>
      <label>
        <input
          type="checkbox"
          defaultChecked={task.done}
          onChange={handleCheckbox}
        ></input>
        <span>{task.text}</span>
      </label>
      <button className="btn btn-danger" style={{ display: shallDisplay }}>
        Delete
      </button>
    </li>
  );
}
