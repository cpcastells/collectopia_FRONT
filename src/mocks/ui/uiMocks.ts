import { ModalDataStructure, UiStateStructure } from "../../store/ui/types";

export const showStateStructureMock: UiStateStructure = {
  isLoading: true,
  modalData: {
    firstMessage: "",
    title: "",
    isError: false,
    isSuccess: false,
  },
};

export const hideStateStructureMock: UiStateStructure = {
  isLoading: false,
  modalData: {
    firstMessage: "",
    title: "",
    isError: false,
    isSuccess: false,
  },
};

export const initialUiStateMock: UiStateStructure = {
  isLoading: false,
  modalData: {
    title: "",
    firstMessage: "",
    secondMessage: "",
    isError: false,
    isSuccess: false,
    icon: "",
  },
};

export const modalFeedbackMock: ModalDataStructure = {
  title: "New Title",
  firstMessage: "First Message",
  secondMessage: "Second Message",
  isError: true,
  isSuccess: false,
  icon: "icon",
};
