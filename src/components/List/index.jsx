import React, { Component } from "react";
import Item from "../Item/index";

export default class List extends Component {
  render() {
    return (
      <ul className="todo-main">
        <Item elements={[{ text: "abs" }]} />
      </ul>
    );
  }
}
