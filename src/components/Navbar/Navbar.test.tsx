import { screen } from "@testing-library/react";
import Navbar from "./Navbar";
import renderWithProviders from "../../utils/testUtils";

describe("Given a Navbar component", () => {
  describe("When it renders", () => {
    test("Then it should show a button with an icon of logout", () => {
      const altTextLogout = "logout user";

      renderWithProviders(<Navbar />);

      const logoutLink = screen.getByAltText(altTextLogout);

      expect(logoutLink).toBeInTheDocument();
    });
  });

  test("Then it should show a home link", () => {
    const ariaTextCollection = "boardgame collection";

    renderWithProviders(<Navbar />);

    const homeLink = screen.getByRole("link", { name: ariaTextCollection });

    expect(homeLink).toBeInTheDocument();
  });

  test("Then it should show a add boardgame link", () => {
    const addBoardgameText = "add boardgame";

    renderWithProviders(<Navbar />);

    const addBoardgameLink = screen.getByRole("link", {
      name: addBoardgameText,
    });

    expect(addBoardgameLink).toBeInTheDocument();
  });
});
