import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import DetailPage from "./DetailPage";
import {
  boardGamesMock,
  partialBoardgameMock,
} from "../../mocks/boardgames/boardgamesMocks";

describe("Given a DetailPage ID", () => {
  describe("When it is rendered with the id of Rising Sun", () => {
    test("Then it should show a heading with the title 'Rising Sun' ", () => {
      const expectedTitle = "Rising Sun";

      renderWithProviders(<DetailPage />, {
        boardgameStore: {
          boardgames: boardGamesMock,
          stack: 5,
          boardgame: boardGamesMock[0],
          totalBoardgames: 10,
        },
      });

      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a boardgame ", () => {
    test("Then it should show a button delete and a button modify ", () => {
      const expectedEditButtonText = "Modify";
      const expectedDeleteButtonText = "Delete";

      renderWithProviders(<DetailPage />, {
        boardgameStore: {
          boardgames: boardGamesMock,
          stack: 5,
          boardgame: partialBoardgameMock,
          totalBoardgames: 10,
        },
      });

      const editButton = screen.getByRole("button", {
        name: expectedEditButtonText,
      });
      const DeleteButton = screen.getByRole("button", {
        name: expectedDeleteButtonText,
      });

      expect(editButton).toBeInTheDocument();
      expect(DeleteButton).toBeInTheDocument();
    });
  });
});
