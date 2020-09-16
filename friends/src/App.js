import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Opener from "./Components/Opener";
import Login from "./Components/Login";
import FriendsList from "./Components/FriendsList";
import PrivateRoute from "./Components/ProtectedRoute";

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
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Opener} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
