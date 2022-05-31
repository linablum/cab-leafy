import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import useIsAuthenticated from "../utils/useIsAuthenticated";

function ProtectedRoute({ children }) {
  const isAuthenticated = useIsAuthenticated();

  return <>{isAuthenticated ? children : <Navigate to="/" replace />}</>;
}

export default ProtectedRoute;
