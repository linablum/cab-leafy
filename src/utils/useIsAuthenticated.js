import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

function useIsAuthenticated() {
  const { user } = useContext(AuthContext);

  const isAuthenticated = user !== null ? true : false;
  return isAuthenticated;
}

export default useIsAuthenticated;
