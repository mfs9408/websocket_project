import React, { useCallback, useState } from "react";
import { useSelector } from "../../store";

interface MessageFormFormProps {
  client: any;
}

const MessageForm = ({ client }: MessageFormFormProps) => {
  const userName = useSelector((state) => state.userState.user);
  const [message, setMessage] = useState("");

  const onMessageSend = () => {
    if (client.readyState === 0 || message.length === 0) return;
    client.send(
      JSON.stringify({
        user: userName,
        type: "message",
        message: message,
      })
    );
    setMessage("");
  };

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        bottom: 0,
        width: "calc(100% - 32px)",
        background: "#006bc8",
        padding: 16,
        justifyContent: "space-between",
      }}
    >
      <div style={{ color: "#fff" }}>{userName}</div>
      <div>
        <input
          type="text"
          placeholder="Введите сообщение"
          value={message}
          onChange={useCallback((event) => setMessage(event.target.value), [])}
          style={{ width: "50vw", marginRight: 30 }}
        />
        <button type="submit" onClick={onMessageSend}>
          Отправить
        </button>
      </div>
    </div>
  );
};

export default MessageForm;
