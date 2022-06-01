import React, { useEffect } from "react";
import { db } from "../utils/config";
import { collection, getDocs } from "firebase/firestore";

const Chat = () => {
  /*   const getMessage = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    } catch (error) {
      console.log("Error", error);
    }
  }; */
  useEffect(() => {
    getMessage();
  }, []);
  return (
    <div>
      <h1>CHAT</h1>
    </div>
  );
};

export default Chat;
