import { initialUiStateMock } from "../../../mocks/ui/uiMocks";
import { addFilterActionCreator, uiReducer } from "../uiSlice";

describe("Given a addFilter reducer", () => {
  describe("When it receives a current UI state and an addFilter action with 'Cooperative' as payload", () => {
    test("Then in should return a state with the filter 'Cooperative", () => {
      const filter = "Cooperative";
      const initialUiState = initialUiStateMock;
      const expectedNewUiState = { ...initialUiState, filter: filter };

      const addFilterAction = addFilterActionCreator(filter);
      const newUiState = uiReducer(initialUiState, addFilterAction);

      expect(expectedNewUiState).toStrictEqual(newUiState);
    });
  });
});
