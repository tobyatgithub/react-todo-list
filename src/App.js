import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([{ text: "Your first task" }]);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Header setTaskList={setTaskList} />
      <List taskList={taskList} />
      <Footer />
    </div>
  );
}

export default App;
