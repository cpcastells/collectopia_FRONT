import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import AddBoardgamePage from "./AddBoardgamePage";

describe("Given a AddBoardgamePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with 'add'", () => {
      const expectedText = "add";

      renderWithProviders(<AddBoardgamePage />);

      const heading = screen.getByRole("heading", {
        name: expectedText,
        level: 2,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
