import "./index.css";
import React, { useState } from "react";

export default function Item({ task, updateTask, deleteTask }) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouse = (flag) => {
    // need to use higher order function to allow parameter
    return () => {
      setIsMouseOver(flag);
    };
  };

  return (
    <li
      className="todo-item"
      style={{ backgroundColor: isMouseOver ? "#ddd" : "white" }}
      onMouseOver={handleMouse(true)}
      onMouseLeave={handleMouse(false)}
    >
      <label>
        <input
          type="checkbox"
          checked={task.done}
          // onChange={() => updateTask(task.id, !task.done)}
          onChange={(event) => updateTask(task.id, event.target.checked)}
        ></input>
        <span>{task.text}</span>
      </label>
      <button
        className="btn btn-danger"
        onClick={() => deleteTask(task.id)}
        style={{ display: isMouseOver ? "inline" : "none" }}
      >
        Delete
      </button>
    </li>
  );
}
