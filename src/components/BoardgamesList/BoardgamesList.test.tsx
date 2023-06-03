import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import BoardgamesList from "./BoardgamesList";

describe("Given a BoardgamesList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of boardgames", () => {
      const expectedText = "Rising Sun";

      renderWithProviders(<BoardgamesList />);

      const boardgame = screen.getByRole("heading", { name: expectedText });

      expect(boardgame).toBeInTheDocument();
    });
  });
});
