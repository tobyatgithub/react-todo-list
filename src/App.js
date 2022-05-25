import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([
    { id: "001", text: "Your first task", done: true },
    { id: "002", text: "Your second task", done: false },
    { id: "003", text: "Your third task", done: false },
  ]);

  //!Note!: the state manipulator shall be at the same place as the state,
  // such as setTaskList, and updateTask = 状态在哪里 操作状态的方法就在哪里
  const updateTask = (id, done) => {
    console.log("receiving,", id, done);
    const newTaskList = taskList.map((task) => {
      if (task.id === id) return { ...task, done: done };
      else return task;
    });
    setTaskList(newTaskList);
  };

  const deleteTask = (id) => {
    if (window.confirm("Delete this task?")) {
      const newTaskList = taskList.filter((task) => {
        return task.id !== id;
      });
      setTaskList(newTaskList);
    }
  };

  const updateAllTasks = (done) => {
    const newTaskList = taskList.map((task) => {
      return { ...task, done };
    });
    setTaskList(newTaskList);
  };
  const deleteAllSelectedTasks = () => {};

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Header taskList={taskList} setTaskList={setTaskList} />
      <List
        taskList={taskList}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <Footer
        taskList={taskList}
        updateAllTasks={updateAllTasks}
        deleteAllSelectedTasks={deleteAllSelectedTasks}
      />
    </div>
  );
}

export default App;
