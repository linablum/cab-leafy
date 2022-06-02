import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../utils/config";

export const UserProfileContext = createContext();

export const UserProfileContextProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [favorites, setFavorites] = useState([]);
    console.log(user);
    const addFavPlant = async (plant) => {
        try {
            const userRef = doc(db, "userProfile", user.uid);
            await updateDoc(userRef {
                favPlants: arrayUnion(plant)
            });
            console.log("Plant added to Favorites!");
            // getFavorites(); //to update the list instantly
        } catch (error) { console.error("Error writing document: ", error); }
    }
}

return (
  <UserProfileContext.Provider value={{ favorites }}>
    {children}
  </UserProfileContext.Provider>
)
