import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const { user, setUser } = useContext(AuthContext);
  const login = () => {
    setUser({ userName: "Lina" });
  };
  const logout = () => {
    setUser(null);
  };
  console.log(user);
  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Login;
