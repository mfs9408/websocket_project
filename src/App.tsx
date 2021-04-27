import React, { useEffect, useState } from "react";
import AuthorizationForm from "./components/AuthorizationForm/AuthorizationForm";
import MessageForm from "./components/MessageForm";
import ChatField from "./components/ChatField/ChatField";
import { w3cwebsocket as W3CWebSocket } from "websocket";

export type Message = {
  user: string;
  msg: string;
};

function App() {
  const [userName, setUserName] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState<Message[]>([]);

  const client = new W3CWebSocket("ws://127.0.0.1:8000");

  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = (message: any) => {
      const dataFromServer = JSON.parse(message.data);
      const { type, user, msg } = dataFromServer;
      if (type === "message") {
        setAllMessages((allMessages) => [...allMessages, { user, msg }]);
      }
      return allMessages;
    };
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <MessageForm
          setMessage={setMessage}
          message={message}
          client={client}
          userName={userName}
        />
      ) : (
        <AuthorizationForm
          userName={userName}
          setUserName={setUserName}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      <ChatField userName={userName} allMessages={allMessages} />
    </div>
  );
}

export default App;
