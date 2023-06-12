import {
  boardGamesMock,
  newBoardgameMock,
} from "../../../mocks/boardgames/boardgamesMocks";
import {
  addBoardgameActionCreator,
  boardgamesReducer,
} from "../boardgameSlice";
import { BoardgamesDataStructure } from "../types";

describe("Given a addBoardgame reducer", () => {
  describe("When it receives a currentState with two boardgames and a new boardgame as a payload", () => {
    test("Then it should return a list with one boardgame more", () => {
      const currentBoardgameState: BoardgamesDataStructure = {
        boardgames: boardGamesMock,
        stack: 5,
      };
      const newUserBoardgame = newBoardgameMock;

      const addBoardgameAction = addBoardgameActionCreator(newUserBoardgame);

      const newBoardgamesState = boardgamesReducer(
        currentBoardgameState,
        addBoardgameAction
      );

      expect(newBoardgamesState.boardgames).toHaveLength(
        boardGamesMock.length + 1
      );
    });
  });
});
