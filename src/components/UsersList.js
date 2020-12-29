import React, { useState, useEffect } from "react";
import axios from "axios";

const UsersList = ({ users, loadUsers, match, history }) => {
  useEffect(() => {
    const getData = async () => {
      return await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => loadUsers(response.data));
    };

    getData();
  }, []);

  return (
    <div className="bodybody">
      <div className="usersBtns">
        {users.map((user) => (
          <button
            className="btn"
            key={user.id}
            onClick={() => history.push(`/userslist/${user.id}`)}
          >
            {user.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
