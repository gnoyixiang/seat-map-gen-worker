import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { WorkerHook, BasicWorker, Blocking } from "./Map";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <ul>
          <li>
            <Link to="/native">Native Worker</Link>
          </li>
          <li>
            <Link to="/hook">Worker Hook</Link>
          </li>
          <li>
            <Link to="/inline">Blocking inline function</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/native">
            <BasicWorker />
          </Route>
          <Route path="/hook">
            <WorkerHook />
          </Route>
          <Route path="/inline">
            <Blocking />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
