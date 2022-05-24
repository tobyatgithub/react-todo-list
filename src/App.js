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

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Header taskList={taskList} setTaskList={setTaskList} />
      <List taskList={taskList} />
      <Footer />
    </div>
  );
}

export default App;
