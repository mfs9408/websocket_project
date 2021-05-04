import { createSlice } from "@reduxjs/toolkit";

interface MessagesState {
  messages: Message[];
}

type Message = {
  user: string;
  message: string;
};

const initialState: MessagesState = {
  messages: [],
};

const messagesStateSlice = createSlice({
  name: "isLoggedIn",
  initialState,
  reducers: {
    setMessages: (state, { payload }) => {
      state.messages.push(payload);
    },
  },
});

export const messagesActions = messagesStateSlice.actions;
export default messagesStateSlice.reducer;
