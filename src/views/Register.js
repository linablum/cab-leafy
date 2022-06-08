import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Register() {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRegister = () => {
    //Check email type
    //password characters
    //blank spaces
    register(email, password);
  };
  return (
    <div>
      <h2>Register</h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={handleEmailChange}
        value={email}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handlePassChange}
        value={password}
      />
      <button onClick={handleRegister}>Register</button>
      <p>
        <Link to="/login">Already a user? Go to Login</Link>
      </p>
    </div>
  );
}

export default Register;
