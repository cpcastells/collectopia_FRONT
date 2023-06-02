import boardgamesFactory from "../../../mocks/factories/boardgames/boardgamesFactory";
import {
  boardgamesReducer,
  initialBoardgamesState,
  loadBoardgamesActionCreator,
} from "../boardgameSlice";

describe("Given a loadBoardgames reducer", () => {
  describe("When it receives an empty collection of boardgames and a collection of boardgames as a payload", () => {
    test("Then it should return that collection of boardgames", () => {
      const currentBoardgameState = initialBoardgamesState;
      const expectedBoardgameState = boardgamesFactory.buildList(2);

      const loadBoardgamesAction = loadBoardgamesActionCreator(
        expectedBoardgameState
      );

      const newBoardgameState = boardgamesReducer(
        currentBoardgameState,
        loadBoardgamesAction
      );

      expect(expectedBoardgameState).toStrictEqual(newBoardgameState);
    });
  });
});
