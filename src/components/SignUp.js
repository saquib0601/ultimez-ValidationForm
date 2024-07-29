import React, { useState } from "react";
import axios from "axios";
import "../styles.css";

const SignUp = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    emailId: "",
    mobileNumber: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "https://lobster-app-ddwng.ondigitalocean.app/user/register",
        {
          full_name: formData.fullName,
          username: formData.username,
          country_row_id: "101",
          email_id: formData.emailId,
          mobile_number: formData.mobileNumber,
          password: formData.password
        },
        {
          headers: {
            api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH"
          }
        }
      );
      console.log(response.data);
    } catch (err) {
      setError("SignUp Failed");
    }
  };

  return (
    <div className="auth-form-container">
      <h2 className="auth-title">Signup</h2>
      <input
        className="auth-input"
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
      />
      <input
        className="auth-input"
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        className="auth-input"
        type="email"
        name="emailId"
        placeholder="Email Id"
        value={formData.emailId}
        onChange={handleChange}
      />
      <input
        className="auth-input"
        type="text"
        name="mobileNumber"
        placeholder="Mobile Number"
        value={formData.mobileNumber}
        onChange={handleChange}
      />
      <input
        className="auth-input"
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button className="auth-button" onClick={handleSignup}>
        SignUp
      </button>
      {error && <p className="auth-error">{error}</p>}
      <p className="auth-toggle" onClick={toggleForm}>
        Already have an account? Login
      </p>
    </div>
  );
};

export default SignUp;
