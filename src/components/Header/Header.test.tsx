import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'COLLECTOPIA'", () => {
      const expectedTitle = "COLLECTOPIA";

      renderWithProviders(<Header />);

      const header = screen.getByRole("heading", {
        level: 1,
        name: expectedTitle,
      });

      expect(header).toBeInTheDocument();
    });
  });
});
