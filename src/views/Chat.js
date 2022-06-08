import React, { useEffect, useContext, useState } from "react";
import { db } from "../utils/config";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { AuthContext } from "../context/authContext";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Chat = () => {
  const [messages, setMessages] = useState(null);
  const [chatMsg, setchatMsg] = useState("");
  const { user } = useContext(AuthContext);

  const getMessages = () => {
    const q = query(collection(db, "chat"), orderBy("date"));
    onSnapshot(q, (querySnapshot) => {
      const myMessages = [];
      querySnapshot.forEach((doc) => {
        myMessages.push(doc.data());
      });
      setMessages(myMessages);
    });
  };

  useEffect(() => {
    getMessages();
  }, []);

  const messageDate = (time) => {
    return new Date(time * 1000).toLocaleString();
  };
  const handleChatMsgChange = (e) => {
    setchatMsg(e.target.value);
  };
  const handleChatMsgSubmit = async () => {
    const messageObj = {
      text: chatMsg,
      author: user.email,
      userid: user.uid,
      date: new Date(),
    };
    try {
      const docRef = await addDoc(collection(db, "chat"), messageObj);
      console.log("Document written ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <h1>Chat</h1>
      {messages &&
        messages.map((message, i) => {
          return (
            <div key={i} style={{ backgroundColor: "honeydew" }}>
              <p>{message.text}</p>
              <p>{message.author}</p>
              <p>{messageDate(message.date.seconds)}</p>
              {user.uid === message.userid ? (
                <IconButton
                  aria-label="delete"
                  //     onClick={() => ()}
                >
                  <DeleteIcon />
                </IconButton>
              ) : (
                <p></p>
              )}
            </div>
          );
        })}
      <input type="text" value={chatMsg} onChange={handleChatMsgChange} />
      <button onClick={handleChatMsgSubmit}>Send</button>
    </div>
  );
};

export default Chat;
