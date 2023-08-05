import "./App.css";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import About from "./components/About";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/" element={<TextBox title="Enter Text here" />}></Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
