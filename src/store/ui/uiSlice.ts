import { createSlice } from "@reduxjs/toolkit";
import { uiStateStructure } from "./types";

const initialUiState: uiStateStructure = {
  isLoading: false,
  modalInfo: {
    isError: false,
    isSucces: false,
    firstMessage: "",
    title: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentUiState: uiStateStructure): uiStateStructure => ({
      ...currentUiState,
      isLoading: true,
    }),
  },
});

export const { showLoading: showLoadingActionCreator } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
