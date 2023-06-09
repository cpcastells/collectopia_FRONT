import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Pagination from "./Pagination";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a loading animation", () => {
      const expectedAltText = "load more button";

      renderWithProviders(<Pagination />);

      const image = screen.getByAltText(expectedAltText);

      expect(image).toBeInTheDocument();
    });
  });
});
