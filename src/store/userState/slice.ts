import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  user: string;
};

const initialState: UserState = {
  user: "",
};

const userStateSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const userStateActions = userStateSlice.actions;
export default userStateSlice.reducer;
