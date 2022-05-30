import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContextProvider value={{ user, setUser }}>
      {props.children}
    </AuthContextProvider>
  );
};
