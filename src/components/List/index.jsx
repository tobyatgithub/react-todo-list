import React, { useState, Component } from "react";
import Item from "../Item/index";

export default function List({ taskList }) {
  console.log("toby here", taskList);
  return (
    <ul className="todo-main">
      {taskList.map((task) => {
        return <Item task={task} />;
      })}
    </ul>
  );
}
