import { boardGamesMock } from "../../../mocks/boardgames/boardgamesMocks";
import boardgamesFactory from "../../../mocks/factories/boardgames/boardgamesFactory";
import {
  boardgamesReducer,
  loadBoardgameByIdActionCreator,
} from "../boardgameSlice";

describe("Given a loadBoardgameById reducer", () => {
  describe("When it receives the current state and a loadBoardgameById action with one boardgame", () => {
    test("Then it should return a state with the property boardgame updated with the loaded boardgame", () => {
      const currentBoardgame = boardgamesFactory.build();
      const expectedNewBoardgame = boardgamesFactory.build();

      const currentBoardgameState = {
        boardgames: boardGamesMock,
        stack: 5,
        boardgame: currentBoardgame,
        totalBoardgames: 10,
      };

      const loadBoardgameByIdAction =
        loadBoardgameByIdActionCreator(expectedNewBoardgame);

      const newBoardgameState = boardgamesReducer(
        currentBoardgameState,
        loadBoardgameByIdAction
      );

      expect(newBoardgameState.boardgame).toStrictEqual(expectedNewBoardgame);
    });
  });
});
