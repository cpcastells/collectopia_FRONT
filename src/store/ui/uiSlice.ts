import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalDataStructure, UiStateStructure } from "./types";

const initialUiState: UiStateStructure = {
  isLoading: false,
  modalData: {
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
    showLoading: (currentUiState: UiStateStructure): UiStateStructure => ({
      ...currentUiState,
      isLoading: true,
    }),
    hideLoading: (currentState: UiStateStructure): UiStateStructure => ({
      ...currentState,
      isLoading: false,
    }),
    showModal: (
      currentUiState: UiStateStructure,
      action: PayloadAction<ModalDataStructure>
    ) => ({
      ...currentUiState,
      modalFeedback: action.payload,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showModal: showModalActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
