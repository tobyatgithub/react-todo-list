import React, { Component } from "react";
import { nanoid } from "nanoid";
export default function Header({ taskList, setTaskList }) {
  const handleSubmit = (event) => {
    // if ENTER clicked
    if (event.keyCode === 13) {
      const newTask = {
        id: nanoid(), //TODO: hmm need to fix id collision
        text: event.target.value,
        done: false,
      };
      const newTaskList = [newTask, ...taskList];
      if (event.target.value.trim() !== "") {
        setTaskList(newTaskList);
        event.target.value = "";
        // reset the search box
      }
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
