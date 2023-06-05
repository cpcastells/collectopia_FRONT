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
    ): UiStateStructure => ({
      ...currentUiState,
      modalData: action.payload,
    }),
    hideModal: (currentUiState: UiStateStructure): UiStateStructure => ({
      ...currentUiState,
      modalData: initialUiState.modalData,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showModal: showModalActionCreator,
  hideModal: hideModalActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
