import { Factory } from "fishery";
import { uiStateStructure } from "../../../store/ui/types";

const StateStructureMockFactory = Factory.define<uiStateStructure>(() => ({
  isLoading: false,
  modalInfo: {
    firstMessage: "",
    secondMessage: "",
    title: "",
    isError: false,
    isSuccess: false,
    icon: "",
  },
}));

export const createStateStructureMock = (
  overrides?: Partial<uiStateStructure>
): uiStateStructure => {
  return StateStructureMockFactory.build(overrides);
};
