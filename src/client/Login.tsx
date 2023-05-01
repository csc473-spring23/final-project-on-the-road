import React, { useState } from "react";
import { login } from "./config/firebase";
import { useNavigate } from "react-router-dom";
export const Login = (props) => {
  const [username, setUser] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();
  const handleClick2=()=> {
    navigate('/');
    console.log();};

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username,pass);
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          value={username}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          id="username"
          name="username"
        />

        <label htmlFor="password">Password:</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />

        <button type="submit" onMouseEnter={handleSubmit} onClick={
          handleClick2}>Log In</button>
      </form>

      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};
