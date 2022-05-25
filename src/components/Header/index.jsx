import React, { Component } from "react";
import { nanoid } from "nanoid";

export default function Header({ taskList, setTaskList }) {
  const handleSubmit = (event) => {
    const { target } = event;

    // if ENTER clicked
    if (event.keyCode === 13) {
      const newTask = {
        id: nanoid(),
        text: target.value,
        done: false,
      };
      const newTaskList = [newTask, ...taskList];

      if (target.value.trim() !== "") {
        setTaskList(newTaskList);
        target.value = "";
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
