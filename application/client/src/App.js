import React from "react";
import "./App.css";
import SFSUText from "./Components/SFSUText";  
import SearchForm from "./Components/SearchForm.js"
import Footer from "./Components/Footer.js"

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