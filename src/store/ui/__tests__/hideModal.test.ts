import { initialUiStateMock } from "../../../mocks/ui/uiMocks";
import { UiStateStructure } from "../types";
import { hideModalActionCreator, uiReducer } from "../uiSlice";

describe("Given a hideModal reducer", () => {
  describe("When it receives the current UI state and a hideModal action", () => {
    test("Then it should return a new state with isError and isSuccess set to false", () => {
      const expectedUiState: UiStateStructure = initialUiStateMock;

      const currentUiState: UiStateStructure = {
        isLoading: false,
        modalData: {
          title: "Welcome",
          firstMessage: "",
          secondMessage: "",
          isError: true,
          isSuccess: false,
          icon: "",
        },
      };

      const newUiState = uiReducer(currentUiState, hideModalActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
