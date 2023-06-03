import { uiStateStructure } from "../../store/ui/types";

export const showStateStructureMock: uiStateStructure = {
  isLoading: true,
  modalInfo: {
    firstMessage: "",
    title: "",
    isError: false,
    isSucces: false,
  },
};

export const hideStateStructureMock: uiStateStructure = {
  isLoading: false,
  modalInfo: {
    firstMessage: "",
    title: "",
    isError: false,
    isSucces: false,
  },
};
