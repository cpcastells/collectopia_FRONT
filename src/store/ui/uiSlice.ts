import { createSlice } from "@reduxjs/toolkit";
import { uiStateStructure } from "./types";

const initialUiState: uiStateStructure = {
  isLoading: false,
  modalInfo: {
    isError: false,
    isSuccess: false,
    title: "",
    firstMessage: "",
    secondMessage: "",
    icon: "",
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
    hideLoading: (currentState: uiStateStructure): uiStateStructure => ({
      ...currentState,
      isLoading: false,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
