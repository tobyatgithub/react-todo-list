import React, { Component } from "react";

export default function Header({ taskList, setTaskList }) {
  const handleSubmit = (event) => {
    if (event.keyCode === 13) {
      const newTaskList = taskList.concat({
        id: 2,
        text: event.target.value,
        done: false,
      });
      setTaskList(newTaskList);
    }
  };
  return (
    <div className="todo-header">
      <input
        type="text"
        placeholder="type in a task"
        onKeyUp={handleSubmit}
      ></input>
    </div>
  );
}
