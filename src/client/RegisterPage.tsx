import React, { useState } from "react";
import "./Login.css";
import { Login } from "./Login";
import { Register } from "./Register";

function RegisterPage() {
  const [currentForm, setCurrentForm] = useState("register");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="page">
      {currentForm === "register" ? (
        <Register onFormSwitch={toggleForm} />
      ) : (
        <Login onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default RegisterPage;
