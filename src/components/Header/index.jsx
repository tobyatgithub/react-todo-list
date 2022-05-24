import React, { Component } from "react";

export default function Header(taskList, setTaskList) {
  const handleSubmit = (e) => {
    const [input] = e.target.children;
    console.log("hummm", input.value);
  };
  return (
    <div className="todo-header">
      <input
        type="text"
        placeholder="type in a task"
        onSubmit={handleSubmit}
      ></input>
    </div>
  );
}
