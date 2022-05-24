// import React, { Component } from "react";

// export default class Item extends Component {
//   render() {
//     return (
//       <li>
//         <label>
//           <input type="checkbox"></input>
//           <span>xxxx</span>
//         </label>
//         <button className="btn btn-danger" style={{ display: "none" }}>
//           Delete
//         </button>
//       </li>
//     );
//   }
// }

import React from "react";

export default function Item({ taskList, setTaskList }) {
  return taskList.map((task) => {
    return (
      <li>
        <label>
          <input type="checkbox"></input>
          <span>{task.text}</span>
        </label>
        <button className="btn btn-danger" style={{ display: "none" }}>
          Delete
        </button>
      </li>
    );
  });
}
