import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Portfolio from "./component/Portfolio";
import Skills from "./component/Skills";
import About from "./component/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/skills">
        <Skills />
      </Route>
    </BrowserRouter>
  );
}

export default App;
