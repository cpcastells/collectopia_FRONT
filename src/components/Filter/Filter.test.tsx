import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Filter from "./Filter";
import { vi } from "vitest";

describe("Given a Filter component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a select with multiple options", () => {
      const expectedAriaText = "filter by category";
      const setTotalBoardgames = vi.fn();

      renderWithProviders(<Filter setTotalBoardgames={setTotalBoardgames} />);

      const select = screen.getByLabelText(expectedAriaText);

      expect(select).toBeInTheDocument();
    });
  });
});
