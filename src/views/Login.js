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
      <button onClick={handleLogin}>Login</button>
      <Link to="/register">not an user? go to Register</Link>
    </div>
  );
}

export default Login;
