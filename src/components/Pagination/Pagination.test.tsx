import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import Pagination from "./Pagination";
import { vi } from "vitest";

describe("Given a pagination component", () => {
  const handleOnClick = vi.fn();

  describe("When it is rendered", () => {
    test("Then it should show a load more button", () => {
      const expectedAltText = "load more button";

      renderWithProviders(<Pagination onClick={handleOnClick} />);

      const button = screen.getByAltText(expectedAltText);

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives a function and the user clicks on load more button", () => {
    test("Then it should show call that function", async () => {
      const expectedAltText = "load more button";

      renderWithProviders(<Pagination onClick={handleOnClick} />);

      const button = screen.getByAltText(expectedAltText);

      await userEvent.click(button);

      expect(handleOnClick).toHaveBeenCalled();
    });
  });
});
