import React, { useState } from "react";

export default function Item({ task, updateTask }) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouse = (flag) => {
    // need to use higher order function to allow parameter
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
          onChange={() => updateTask(task.id, !task.done)}
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
