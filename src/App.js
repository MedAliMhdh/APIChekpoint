import React, { useState } from "react";
import "./App.css";
import UsersList from "./components/UsersList";
import UserProfile from "./components/UserProfile";
import Home from "./components/Home";
import { Link, Route, Switch } from "react-router-dom";

const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = (data) => {
    setUsers(data);
  };

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
        <Route
          exact
          path="/userslist/:userId"
          render={(props) => <UserProfile {...props} users={users} />}
        />
        <Route
          exact
          path="/userslist"
          render={(props) => (
            <UsersList {...props} users={users} loadUsers={loadUsers} />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
