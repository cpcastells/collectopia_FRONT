import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import BoardgamesList from "./BoardgamesList";
import { boardGamesMock } from "../../mocks/boardgames/boardgamesMocks";
import CollectionPage from "../../pages/CollectionPage/CollectionPage";

describe("Given a BoardgamesList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of boardgames", () => {
      const expectedText = "Rising Sun";
      const boardgames = boardGamesMock;

      renderWithProviders(<BoardgamesList boardgames={boardgames} />);

      const boardgame = screen.getByRole("heading", { name: expectedText });

      expect(boardgame).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a list of cards and the user clicks on the delete button", () => {
    test("Then the boardgame should be removed from the document", async () => {
      const gameTitle = boardGamesMock[0].title;

      renderWithProviders(<CollectionPage />, {
        boardgameStore: { boardgames: boardGamesMock },
      });

      const deleteButtons = screen.getAllByRole("button", { name: /delete/i });

      const boardgameName = screen.getByRole("heading", {
        name: gameTitle,
      });

      await userEvent.click(deleteButtons[0]);

      expect(boardgameName).not.toBeInTheDocument();
    });
  });
});
