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

export default function Item({ elements }) {
  console.log("toby here", elements);
  return elements.map((element) => {
    return (
      <li>
        <label>
          <input type="checkbox"></input>
          <span>{element.text}</span>
        </label>
        <button className="btn btn-danger" style={{ display: "none" }}>
          Delete
        </button>
      </li>
    );
  });
}
