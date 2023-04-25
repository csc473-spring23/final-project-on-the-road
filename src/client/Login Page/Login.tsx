import React, { useState } from "react";
import { login, logout } from "../config/firebase";
export const Login = (props) => {
  const [username, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("login");
    login(username, pass);
  };
  
  const handlesignout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
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

        <button type="submit">Log In</button>
      </form>

      <button onClick={handlesignout}>
        signout
      </button>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};
