import React from "react";

export default function Item({ task }) {
  return (
    <li>
      <label>
        <input type="checkbox"></input>
        <span>{task.text}</span>
      </label>
      <button className="btn btn-danger" style={{ display: "none" }}>
        Delete
      </button>
    </li>
  );
}
