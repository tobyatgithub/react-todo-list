import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default App;
