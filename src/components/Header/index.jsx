import React, { Component } from "react";

export default function Header({ taskList, setTaskList }) {
  const handleSubmit = (event) => {
    // if ENTER clicked
    if (event.keyCode === 13) {
      const newTaskList = taskList.concat({
        id: 2, //TODO: hmm need to fix id collision
        text: event.target.value,
        done: false,
      });
      setTaskList(newTaskList);
      // reset the search box
      event.target.value = "";
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
