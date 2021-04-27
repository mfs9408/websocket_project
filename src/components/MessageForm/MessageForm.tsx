import React, { Dispatch, SetStateAction, useCallback } from "react";

interface MessageFormFormProps {
  userName: string;
  setMessage: Dispatch<SetStateAction<string>>;
  client: any;
  message: string;
}

const MessageForm = ({
  userName,
  client,
  setMessage,
  message,
}: MessageFormFormProps) => {
  const onMessageSend = () => {
    if (client.readyState === 0) return;
    client.send(
      JSON.stringify({
        user: userName,
        type: "message",
        msg: message,
      })
    );
    setMessage("");
    console.log("отправлено");
  };

  return (
    <div>
      <div>{userName}</div>
      <div>
        <input
          type="text"
          placeholder="Введите сообщение"
          value={message}
          onChange={useCallback((event) => setMessage(event.target.value), [])}
        />
        <button type="submit" onClick={onMessageSend}>
          Отправить
        </button>
      </div>
    </div>
  );
};

export default MessageForm;
