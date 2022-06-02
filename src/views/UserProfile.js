import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { UserProfileContext } from "../context/favouritesContext";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../utils/config";

const UserProfile = () => {
  const { favorites, addFavPlant, getFavorites, deleteFavPlant } =
    useContext(UserProfileContext);

  useEffect(() => {
    getFavorites();
  }, []);

  const handleDeleteFavPlant = (plant) => {
    deleteFavPlant(plant);
  };

  return <div>PROFILE</div>;
};

export default UserProfile;
