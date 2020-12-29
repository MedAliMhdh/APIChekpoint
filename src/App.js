import React, { useState } from "react";
import "./App.css";
import UsersList from "./components/UsersList";
import Home from "./components/Home";
import { Link, Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  const [loggin, setLoggin] = useState(false);
  const toggle = () => {
    setLoggin(!loggin);
  };
  return (
    <div>
      <div className="header">
        <div>
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="/userslist"> Users List </Link>
          </button>
        </div>
        <button onClick={toggle}>{loggin ? "log out" : "log in"}</button>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/userslist">
          {!loggin ? <Redirect to="/" /> : <UsersList />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
