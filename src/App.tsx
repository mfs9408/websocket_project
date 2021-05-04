import React, { useEffect } from "react";
import AuthorizationForm from "./components/AuthorizationForm/AuthorizationForm";
import MessageForm from "./components/MessageForm";
import ChatField from "./components/ChatField/ChatField";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { useSelector } from "./store";
import { useDispatch } from "react-redux";
import { messagesActions } from "./store/messagesState";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);

  const client = new W3CWebSocket("ws://127.0.0.1:8000");

  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket сlient сonnected");
    };
    client.onmessage = (response) => {
      const dataFromServer = JSON.parse(response.data.toString());
      const { type, user, message } = dataFromServer;
      if (type === "message") {
        dispatch(messagesActions.setMessages({ user, message }));
      }
    };
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <MessageForm client={client} /> <ChatField />
        </>
      ) : (
        <AuthorizationForm />
      )}
    </div>
  );
}

export default App;
