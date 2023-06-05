import { UiStateStructure } from "../../store/ui/types";

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
