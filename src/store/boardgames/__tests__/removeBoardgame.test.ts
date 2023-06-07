import { boardGamesMock } from "../../../mocks/boardgames/boardgamesMocks";
import {
  boardgamesReducer,
  removeBoardgameActionCreator,
} from "../boardgameSlice";
import { BoardgameStructure } from "../types";

describe("Given a removeBoardgame reducer", () => {
  describe("When it receives a removeBoardgame action and a currentState with two boardgames", () => {
    test("Then it should a list with one task less", () => {
      const currentBoardgameState: BoardgameStructure[] = boardGamesMock;
      const id = boardGamesMock[0].id;

      const removeBoardgameAction = removeBoardgameActionCreator(id);

      const newBoardgameState = boardgamesReducer(
        currentBoardgameState,
        removeBoardgameAction
      );

      expect(newBoardgameState).toHaveLength(currentBoardgameState.length - 1);
    });
  });
});
