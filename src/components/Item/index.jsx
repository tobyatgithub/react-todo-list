import React, { useState } from "react";

export default function Item({ task }) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleCheckbox = () => {
    task.done = !task.done;
    console.log("clicked!", task);
  };

  const handleMouse = (flag) => {
    return () => {
      setIsMouseOver(flag);
    };
  };

  return (
    <li
      style={{ backgroundColor: isMouseOver ? "#ddd" : "white" }}
      onMouseOver={handleMouse(true)}
      onMouseLeave={handleMouse(false)}
    >
      <label>
        <input
          type="checkbox"
          defaultChecked={task.done}
          onChange={handleCheckbox}
        ></input>
        <span>{task.text}</span>
      </label>
      <button
        className="btn btn-danger"
        style={{ display: isMouseOver ? "inline" : "none" }}
      >
        Delete
      </button>
    </li>
  );
}
