import {
  boardGamesMock,
  newBoardgameMock,
} from "../../../mocks/boardgames/boardgamesMocks";
import {
  addBoardgameActionCreator,
  boardgamesReducer,
} from "../boardgameSlice";
import { BoardgameStructure } from "../types";

describe("Given a addBoardgame reducer", () => {
  describe("When it receives a currentState with two boardgames and a new boardgame as a payload", () => {
    test("Then it should return a list with one boardgame more", () => {
      const expectedTitle = "Catan";
      const currentBoardgameState: BoardgameStructure[] = boardGamesMock;
      const newUserBoardgame = newBoardgameMock;

      const addBoardgameAction = addBoardgameActionCreator(newUserBoardgame);

      const newBoardgamesState = boardgamesReducer(
        currentBoardgameState,
        addBoardgameAction
      );

      expect(newBoardgamesState).toHaveLength(3);
      expect(newBoardgamesState[2].title).toBe(expectedTitle);
    });
  });
});
