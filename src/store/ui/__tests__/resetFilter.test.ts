import { initialUiStateMock } from "../../../mocks/ui/uiMocks";
import { addFilterActionCreator, uiReducer } from "../uiSlice";

describe("Given a resetFilter reducer", () => {
  describe("When it receives a current UI state and an resetFilter action", () => {
    test("Then in should return a state with the filter set to empty strings", () => {
      const filter = "";
      const initialUiState = initialUiStateMock;
      const expectedNewUiState = { ...initialUiState, filter: filter };

      const resetFilterAction = addFilterActionCreator(filter);
      const newUiState = uiReducer(initialUiState, resetFilterAction);

      expect(expectedNewUiState).toStrictEqual(newUiState);
    });
  });
});
