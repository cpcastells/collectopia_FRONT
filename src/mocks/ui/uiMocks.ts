import { uiStateStructure } from "../../store/ui/types";

export const uiStateStructureMock: uiStateStructure = {
  isLoading: true,
  modalInfo: {
    firstMessage: "",
    title: "",
    isError: false,
    isSucces: false,
  },
};

export const previousStateStructureMock: uiStateStructure = {
  isLoading: false,
  modalInfo: {
    firstMessage: "",
    title: "",
    isError: false,
    isSucces: false,
  },
};
