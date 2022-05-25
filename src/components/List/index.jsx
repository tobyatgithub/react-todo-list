import React, { useState, Component } from "react";
import Item from "../Item/index";

export default function List({ taskList, updateTask }) {
  return (
    <ul className="todo-main">
      {taskList.map((task) => {
        return <Item key={task.id} task={task} updateTask={updateTask} />;
      })}
    </ul>
  );
}
