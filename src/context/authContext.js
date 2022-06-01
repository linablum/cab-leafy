import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/config";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const redirectTo = useNavigate();
  console.log(auth);
  const register = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("userCredential", userCredential);
      setUser(userCredential.user);
      redirectTo("/");
    } catch (error) {
      console.log(error);
      setUser(null);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    }
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
        setUser(user);
        redirectTo("/");
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const checkIfUserIsLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <AuthContext.Provider value={{ user, setUser, register, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
