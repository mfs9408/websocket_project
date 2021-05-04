import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userStateReducer from "./userState";
import isLoggedInReducer from "./isLoggedIn";
import messagesStateReducer from "./messagesState";

const reducer = combineReducers({
  userState: userStateReducer,
  isLoggedIn: isLoggedInReducer,
  messages: messagesStateReducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;

export default store;
