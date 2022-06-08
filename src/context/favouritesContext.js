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
    const isFav = favorites.some((e) => {
      if (e.pid === plant.pid) {
        return true;
      }
      return false;
    });

    if (!isFav) {
      try {
        const userRef = doc(db, "userProfile", user.uid);
        await updateDoc(userRef, {
          favPlants: arrayUnion(plant),
        });
        getFavorites();
      } catch (error) {
        console.error("Error writing document: ", error);
      }
    } else {
      deleteFavPlant(plant);
    }
  };

  const getFavorites = () => {
    if (user) {
      onSnapshot(doc(db, "userProfile", user.uid), (doc) => {
        setFavorites(doc.data().favPlants);
      });
    }
  };
  //NOTE An option to avoid checking the favorites while mapping in your List component, would be to create a function here to check if the ID is inside your favorites, pass the function throudh the provider to the component, and from there, return the ID or a Boolean
  const deleteFavPlant = async (plant) => {
    // NOTE in some components you use .then(), here async/await with Try&Catch, better to keep some consistency with that.
    try {
      const userRef = doc(db, "userProfile", user.uid);
      await updateDoc(userRef, {
        favPlants: arrayRemove(plant),
      });
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
