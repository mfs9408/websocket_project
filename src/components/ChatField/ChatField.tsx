import React from "react";
import { useSelector } from "../../store";

const ChatField = () => {
  const allMessages = useSelector((state) => state.messages.messages);
  const userName = useSelector((state) => state.userState.user);

  return (
    <div
      style={{
        width: "calc(100% - 200px)",
        height: "calc(100% - 53px)",
        display: "flex",
        flexDirection: "column",
        padding: "0px 100px",
        paddingTop: 30,
      }}
    >
      {allMessages.map((message, index) => (
        <div
          style={
            userName === message.user
              ? { alignSelf: "flex-end" }
              : { alignSelf: "flex-start" }
          }
          key={index}
        >
          <div style={{ fontSize: "12px" }}>{message.user}</div>
          {message.message}
        </div>
      ))}
    </div>
  );
};

export default ChatField;
