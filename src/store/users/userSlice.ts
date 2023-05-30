import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userApiDataStructure, userStateStructure } from "./types";

const initialUserState: userStateStructure = {
  name: "",
  id: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      _currentUserState: userStateStructure,
      action: PayloadAction<userApiDataStructure>
    ) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const { loginUser: loginUserActionCreator } = userSlice.actions;
export const userReducer = userSlice.reducer;
