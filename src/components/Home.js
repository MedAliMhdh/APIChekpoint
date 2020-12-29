import React from "react";

const Home = ({ loggin }) => {
  return (
    <div>
      <h1 style={{ color: "#b0d1ff", textAlign: "center" }}>Home Page</h1>
      {!loggin && <p className="logInMsg">Please Log In to acces users data</p>}
    </div>
  );
};

export default Home;
