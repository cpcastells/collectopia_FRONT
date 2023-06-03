import {
  hideStateStructureMock,
  showStateStructureMock,
} from "../../../mocks/ui/uiMocks";
import { hideLoadingActionCreator, uiReducer } from "../uiSlice";

describe("Given a hideLoading reducer", () => {
  describe("When it receives a current UI state and a hideLoading action", () => {
    test("Then it should return a new UI state with hideLoading set to false", () => {
      const currentUiState = showStateStructureMock;

      const expectedUiState = hideStateStructureMock;

      const newUiState = uiReducer(currentUiState, hideLoadingActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
