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
      <label htmlFor="email">email</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={handleEmailChange}
        value={email}
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handlePassChange}
        value={password}
      />
      <button onClick={handleRegister}>register</button>
      <Link to="/login">already an user? go to Login</Link>
    </div>
  );
}

export default Register;
