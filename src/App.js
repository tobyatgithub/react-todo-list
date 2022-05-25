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

  const updateTask = (id, done) => {
    console.log("receiving,", id, done);
    const newTaskList = taskList.map((task) => {
      if (task.id === id) return { ...task, done: done };
      else return task;
    });
    setTaskList(newTaskList);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Header taskList={taskList} setTaskList={setTaskList} />
      <List taskList={taskList} updateTask={updateTask} />
      <Footer />
    </div>
  );
}

export default App;
