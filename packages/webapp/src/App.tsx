import React from "react";

import getValue from "@monorepo/common/module1";
import { Module2Component } from "@monorepo/common/module2";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {getValue()}
        </a>
        <Module2Component></Module2Component>
      </header>
    </div>
  );
}

export default App;
