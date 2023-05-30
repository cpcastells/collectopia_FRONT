import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import LoginPage from "./LoginPage";

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should appear the main logo with a alt text 'collectopia logo'", () => {
      const expectedAltTest = "collectopia logo";

      renderWithProviders(<LoginPage />);

      const logo = screen.getByAltText(expectedAltTest);

      expect(logo).toBeInTheDocument();
    });
  });
});
