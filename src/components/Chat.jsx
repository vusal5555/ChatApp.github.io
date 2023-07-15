import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { UserAuth } from "../context/UserContext";

const Chat = () => {
  const scroll = useRef();
  const { messages, user } = UserAuth();
  return (
    <div className="overflow-scroll">
      <div className="flex flex-col p-[10px] relative">
        {messages &&
          messages.map((message) => {
            return <Message key={message.id} message={message}></Message>;
          })}
      </div>
      <SendMessage scroll={scroll}></SendMessage>
      <span ref={scroll}></span>
    </div>
  );
};

export default Chat;
