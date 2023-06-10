import { Factory } from "fishery";
import { UiStateStructure } from "../../../store/ui/types";

const StateStructureMockFactory = Factory.define<UiStateStructure>(() => ({
  isLoading: false,
  modalData: {
    firstMessage: "",
    secondMessage: "",
    title: "",
    isError: false,
    isSuccess: false,
    icon: "",
  },
  filter: "",
}));

export const createStateStructureMock = (
  overrides?: Partial<UiStateStructure>
): UiStateStructure => {
  return StateStructureMockFactory.build(overrides);
};
