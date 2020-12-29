import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import UserProfile from "./UserProfile";

const UsersList = () => {
  const [listOfUSers, setlistOfUSers] = useState([]);
  const axios = require("axios");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        setlistOfUSers(response.data);
      });
  };

  return (
    <div className="bodybody">
      <div className="usersBtns">
        {listOfUSers.map((user) => (
          <button className="btn" key={user.id}>
            <Link to={`/userslist/${user.id}`}>{user.name}</Link>
          </button>
        ))}
      </div>
      <div>
        <Route
          path="/userslist/:userId"
          render={(props) => <UserProfile users={listOfUSers} {...props} />}
        />
      </div>
    </div>
  );
};

export default UsersList;
