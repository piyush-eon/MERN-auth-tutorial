import axios from "axios";
import React, { useState } from "react";
import "./styles.css";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/user/register",
        { name, email, password },
        config
      );

      console.log(data);
      setErrorMessage("");
      setSuccessMessage("Successfully Registered !");
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      setErrorMessage("User Already Exists!");
      setSuccessMessage("");
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Register</h1>
      {errorMessage && (
        <span style={{ color: "red", fontWeight: 600, fontSize: 25 }}>
          {errorMessage}
        </span>
      )}
      {successMessage && (
        <span style={{ color: "green", fontWeight: 600, fontSize: 25 }}>
          {successMessage}
        </span>
      )}
      <div className="inputcon">
        <span className="inputtext">Enter Name :</span>{" "}
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          type="text"
        />
      </div>
      <div className="inputcon">
        <span className="inputtext">Enter Email :</span>{" "}
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
          type="email"
        />
      </div>
      <div className="inputcon">
        <span className="inputtext">Enter Password :</span>{" "}
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="***********"
          type="password"
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterScreen;
