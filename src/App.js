import React, {useState} from "react";
import './App.css';
import Header from "./components/Header"

function App() {

  const [currentPage, setCurrentPage] = useState("About");


  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
