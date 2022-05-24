import React, { useState, Component } from "react";
import Item from "../Item/index";

export default function List() {
  const [taskList, setTaskList] = useState([{ text: "abs" }]);
  return (
    <ul className="todo-main">
      <Item taskList={taskList} setTaskList={setTaskList} />
    </ul>
  );
}
