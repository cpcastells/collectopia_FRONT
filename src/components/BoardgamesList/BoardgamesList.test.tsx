import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import BoardgamesList from "./BoardgamesList";
import { boardGamesMock } from "../../mocks/boardgames/boardgamesMocks";

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
});
