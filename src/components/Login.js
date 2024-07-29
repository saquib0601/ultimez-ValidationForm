import React, { useState } from "react";
import axios from "axios";
import "../styles.css";
// import "./AuthForm.css"; // Import the CSS file for styles

const Login = ({ toggleForm, setUserData }) => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://lobster-app-ddwng.ondigitalocean.app/user/login",
        {
          login_id: loginId,
          password: password
        },
        {
          headers: {
            api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH"
          }
        }
      );
      setUserData(response.data.message); // Store the user data
    } catch (err) {
      console.error("Login error:", err); // Log the error object for more details
      setError("Login Failed");
    }
  };

  return (
    <div className="auth-form-container">
      <h2 className="auth-title">Login</h2>
      <input
        className="auth-input"
        type="text"
        placeholder="Username or Email"
        value={loginId}
        onChange={(e) => setLoginId(e.target.value)}
      />
      <input
        className="auth-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="auth-button" onClick={handleLogin}>
        Login
      </button>
      {error && <p className="auth-error">{error}</p>}
      <p className="auth-toggle" onClick={toggleForm}>
        Don't have an account? Sign Up
      </p>
    </div>
  );
};

export default Login;
