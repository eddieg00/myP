import React, {useState} from "react";
import './App.css';
import Header from "./components/Header"

import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {

  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if(currentPage === "About") {
      return <About />
    }
    if(currentPage === "Projects") {
      return <Projects />
    }
    if(currentPage === "Contact") {
      return <Contact />
    }
    if(currentPage === "Resume") {
      return <Resume />
    }
  }

  const changePage = (page) => setCurrentPage(page)


  return (
    <div className="App">
      <Header changePage={changePage}/>
      {renderPage()}
    </div>
  );
}

export default App;
