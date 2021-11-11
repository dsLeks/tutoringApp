import React from "react";
import "./App.css";
import SFSUText from "./components/SFSUText";  
import SearchForm from "./components/SearchForm.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <div className="App">
      <SFSUText/>
      <SearchForm/>
      <Footer/>
    </div>
  );
}

export default App;