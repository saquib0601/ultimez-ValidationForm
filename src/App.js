import "./styles.css";
import React, { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [userData, setUserData] = useState(null);

  console.log(userData);
  return (
    <div className="App">
      {userData ? (
        <Dashboard userData={userData} />
      ) : showLogin ? (
        <Login
          setUserData={setUserData}
          toggleForm={() => setShowLogin(false)}
        />
      ) : (
        <SignUp toggleForm={() => setShowLogin(true)} />
      )}
    </div>
  );
};

export default App;
