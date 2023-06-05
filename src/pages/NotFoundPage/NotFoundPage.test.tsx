import { screen } from "@testing-library/dom";
import { renderWithProviders } from "../../utils/testUtils";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image of cards", () => {
      const expectedAltText = "page not found";

      renderWithProviders(<NotFoundPage />);

      const image = screen.getByAltText(expectedAltText);

      expect(image).toBeInTheDocument();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a heading with 'error 404'", () => {
      const expectedText = "error 404";

      renderWithProviders(<NotFoundPage />);

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
