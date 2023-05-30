import { screen } from "@testing-library/react";
import Navbar from "./Navbar";
import renderWithProviders from "../../utils/testUtils";

describe("Given a Navbar component", () => {
  describe("When it renders", () => {
    test("Then it should show a logout icon with alt property 'logout user'", () => {
      const expectedAltText = "logout user";

      renderWithProviders(<Navbar />);

      const navbar = screen.getByAltText(expectedAltText);

      expect(navbar).toBeInTheDocument();
    });
  });

  test("Then it should show a home icon with alt property 'collection boardgames'", () => {
    const expectedAltText = "collection boardgames";

    renderWithProviders(<Navbar />);

    const navbar = screen.getByAltText(expectedAltText);

    expect(navbar).toBeInTheDocument();
  });

  test("Then it should show a add icon with alt property 'add boardgame'", () => {
    const expectedAltText = "add boardgame";

    renderWithProviders(<Navbar />);

    const navbar = screen.getByAltText(expectedAltText);

    expect(navbar).toBeInTheDocument();
  });
});
