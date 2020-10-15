/* eslint-disable no-unused-vars */
import React from "react";
import {Switch, Route} from "react-router-dom"
import "./App.css";
import { Home, Board } from "./components";

function App() {
  return (
    <>
    <Switch>
      <Route path="/board" component={Board}/>
      <Route path="/" exact component={Home}/>
      </Switch>
    </>
  );
}

export default App;
