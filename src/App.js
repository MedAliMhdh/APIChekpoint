import React from "react";
import "./App.css";
import UsersList from "./components/UsersList";
import Home from "./components/Home";
import { Link, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div className="header">
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/userslist"> Users List </Link>
        </button>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/userslist" component={UsersList} />
      </Switch>
    </div>
  );
};

export default App;
