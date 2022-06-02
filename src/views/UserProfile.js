import React, { createContext, useContext, useState } from "react";
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
  return <div>PROFILE</div>;
};

export default UserProfile;
