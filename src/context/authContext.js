import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/config";
import { db } from "../utils/config";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const redirectTo = useNavigate();

  const addDocFavorites = async (user) => {
    try {
      await setDoc(doc(db, "userProfile", user.uid), {
        email: user.email,
        uid: user.uid,
        favPlants: [],
      });
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

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
      addDocFavorites(userCredential.user);
    } catch (error) {
      console.log(error);
      setUser(null);
      // const errorCode = error.code;
      // const errorMessage = error.message;
    }
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        redirectTo("/");
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });
  };
  const checkIfUserIsLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        setUser(user);
      } else {
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
        setUser(null);
        redirectTo("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <AuthContext.Provider value={{ user, setUser, register, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
