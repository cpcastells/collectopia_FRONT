import {
  hideStateStructureMock,
  showStateStructureMock,
} from "../../../mocks/ui/uiMocks";
import { showLoadingActionCreator, uiReducer } from "../uiSlice";

describe("Give the showLoading reducer", () => {
  describe("When it receives the current UI state and a showLoading action", () => {
    test("Then it should return a new state with isLoading set to true", () => {
      const currentUiState = hideStateStructureMock;

      const expectedUiState = showStateStructureMock;

      const newUiState = uiReducer(currentUiState, showLoadingActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
