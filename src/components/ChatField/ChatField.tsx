import React from "react";
import { Message } from "../../App";

interface ChatFieldProps {
  allMessages: Message[];
  userName: string;
}

const ChatField = ({ allMessages, userName }: ChatFieldProps) => {
  return (
    <div style={{ width: 400, display: "flex", flexDirection: "column" }}>
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
          {message.msg}
        </div>
      ))}
    </div>
  );
};

export default ChatField;
