import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    //Check email type
    //password characters
    //blank spaces
    login(email, password);
  };
  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
      <p>
        <Link to="/register">Not a user? Go to Register</Link>
      </p>
    </div>
  );
}

export default Login;
