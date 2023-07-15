import React, { useState } from "react";
import { auth, db } from "../firestore";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    if (input == "") {
      alert("Please enter a message");
      return;
    }
    const { displayName, uid } = auth.currentUser;

    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });

    setInput("");

    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form
      onSubmit={sendMessage}
      className="h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0"
    >
      <input
        className="w-full text-xl p-3 bg-gray-900 text-white outline-none border-none"
        type="text"
        value={input}
        placeHolder="Message"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="w-[20%] bg-green-500">Send</button>
    </form>
  );
};

export default SendMessage;
