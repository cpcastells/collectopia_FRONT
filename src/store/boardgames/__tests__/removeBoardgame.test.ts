import { boardGamesMock } from "../../../mocks/boardgames/boardgamesMocks";
import {
  boardgamesReducer,
  removeBoardgameActionCreator,
} from "../boardgameSlice";

describe("Given a removeBoardgame reducer", () => {
  describe("When it receives a removeBoardgame action and a currentState with two boardgames", () => {
    test("Then it should return a list with one boardgame less", () => {
      const currentBoardgameState = { boardgames: boardGamesMock };
      const id = boardGamesMock[0].id;

      const removeBoardgameAction = removeBoardgameActionCreator(id);

      const newBoardgameState = boardgamesReducer(
        currentBoardgameState,
        removeBoardgameAction
      );

      expect(newBoardgameState.boardgames).toHaveLength(
        currentBoardgameState.boardgames.length - 1
      );
    });
  });
});
