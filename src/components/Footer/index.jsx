import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <label>
          <input type="checkbox"></input>
        </label>
        <span>Currently completed 0/0 tasks</span>
        <button className="btn btn-danger">Complete all selected tasks</button>
      </div>
    );
  }
}
