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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
