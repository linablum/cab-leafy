import React, { createContext, useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../utils/config";

export const UserProfileContext = createContext();

export const UserProfileContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  const addFavPlant = async (plant) => {
    try {
      const userRef = doc(db, "userProfile", user.uid);
      await updateDoc(userRef, {
        favPlants: arrayUnion(plant),
      });
      console.log("Plant added to Favorites!");
      getFavorites();
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  const getFavorites = () => {
    const favs = onSnapshot(doc(db, "userProfile", user.uid), (doc) => {
      console.log("Current data: ", doc.data());
    });
  };

  const deleteFavPlant = async (plant) => {
    try {
      const userRef = doc(db, "userProfile", user.uid);
      await updateDoc(userRef, {
        favPlants: arrayRemove(plant),
      });
      console.log("Plant removed from Favorites!");
      getFavorites();
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  return (
    <UserProfileContext.Provider
      value={{ favorites, getFavorites, addFavPlant, deleteFavPlant }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};
