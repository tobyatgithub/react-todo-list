import React, { Component } from "react";

export default function Footer({
  taskList,
  updateAllTasks,
  deleteAllSelectedTasks,
}) {
  const numCompletedTask = taskList.reduce((total, task) => {
    if (task.done === true) return total + 1;
    else return total;
  }, 0);

  const totalCount = taskList.length;

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={
            totalCount === numCompletedTask && totalCount !== 0 ? true : false
          }
          onChange={(event) => updateAllTasks(event.target.checked)}
        ></input>
      </label>
      <span>
        Currently completed {numCompletedTask}/{totalCount} tasks
      </span>
      <button onClick={deleteAllSelectedTasks} className="btn btn-danger">
        Complete all selected tasks
      </button>
    </div>
  );
}
