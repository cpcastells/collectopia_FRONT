import {
  initialUiStateMock,
  modalFeedbackMock,
} from "../../../mocks/ui/uiMocks";
import { ModalDataStructure, UiStateStructure } from "../types";
import { showModalActionCreator, uiReducer } from "../uiSlice";

describe("Given a showModal reducer", () => {
  describe("When it receives a current state and a showModal action", () => {
    test("Then it should return a new state with the updated modalData", () => {
      const initialUiState: UiStateStructure = initialUiStateMock;

      const modalFeedback: ModalDataStructure = modalFeedbackMock;

      const expectedUiState: UiStateStructure = {
        isLoading: false,
        modalData: {
          title: "New Title",
          firstMessage: "First Message",
          secondMessage: "Second Message",
          isError: true,
          isSuccess: false,
          icon: "icon",
        },
      };

      const newUiState = uiReducer(
        initialUiState,
        showModalActionCreator(modalFeedback)
      );

      expect(newUiState).toEqual(expectedUiState);
    });
  });
});
