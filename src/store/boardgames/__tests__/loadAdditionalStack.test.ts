import {
  boardgamesReducer,
  initialBoardgamesState,
  loadAdditionalStackActionCreator,
} from "../boardgameSlice";

describe("Given a loadAdditionalStack reducer", () => {
  describe("When it receives the current collection of boardgames and a loadAdditionalStack action", () => {
    test("Then it should return a collection of boardgames with a stack increased to 10", () => {
      const currentBoardgameState = initialBoardgamesState;
      const expectedBoardgameState = {
        boardgames: currentBoardgameState.boardgames,
        stack: 10,
      };

      const newState = boardgamesReducer(
        currentBoardgameState,
        loadAdditionalStackActionCreator()
      );

      expect(expectedBoardgameState).toStrictEqual(newState);
    });
  });
});
