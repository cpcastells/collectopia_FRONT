import {
  boardGamesMock,
  newBoardgameMock,
} from "../../../mocks/boardgames/boardgamesMocks";
import boardgamesFactory from "../../../mocks/factories/boardgames/boardgamesFactory";
import {
  addBoardgameActionCreator,
  boardgamesReducer,
} from "../boardgameSlice";
import { BoardgamesDataStructure } from "../types";

describe("Given a addBoardgame reducer", () => {
  describe("When it receives a currentState with two boardgames and a new boardgame as a payload", () => {
    test("Then it should return a list with one boardgame more", () => {
      const boardgame = boardgamesFactory.build();

      const currentBoardgameState: BoardgamesDataStructure = {
        boardgames: boardGamesMock,
        stack: 5,
        boardgame: boardgame,
        totalBoardgames: 10,
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
