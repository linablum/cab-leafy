import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Logout = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Logout;
