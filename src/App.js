import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Home from './components/Home';
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Blurb from "./components/Blurb";

function App() {
  return (
      <div>
        <Blurb></Blurb>
        <Skills></Skills>
        <Experience></Experience>
        <Projects></Projects>
        <Resume></Resume>
      </div>

  );
}

export default App;
