import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Opener from "./Components/Opener";
import Login from "./Components/Login";
import FriendsList from "./Components/FriendsList";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/friends">Friends</Link>
        </div>
        <Switch>
          <Route exact path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Opener} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
