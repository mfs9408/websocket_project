import { createSlice } from "@reduxjs/toolkit";

type IsLoggedIn = {
  isLoggedIn: boolean;
};

const initialState: IsLoggedIn = {
  isLoggedIn: false,
};

const isLoggedInStateSlice = createSlice({
  name: "isLoggedIn",
  initialState,
  reducers: {
    setIsLoggedIn: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
  },
});

export const isLoggedInActions = isLoggedInStateSlice.actions;
export default isLoggedInStateSlice.reducer;
