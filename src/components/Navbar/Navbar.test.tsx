import { screen } from "@testing-library/react";
import Navbar from "./Navbar";
import renderWithProviders from "../../utils/testUtils";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Given a Navbar component", () => {
  const onLogoutUserMock = vi.fn();

  describe("When it renders", () => {
    test("Then it should show a button with an icon of logout", () => {
      const altTextLogout = "logout user";

      renderWithProviders(<Navbar onLogoutUser={onLogoutUserMock} />);

      const logoutLink = screen.getByAltText(altTextLogout);

      expect(logoutLink).toBeInTheDocument();
    });

    test("Then it should show a home link", () => {
      const ariaTextCollection = "boardgame collection";

      renderWithProviders(<Navbar onLogoutUser={onLogoutUserMock} />);

      const homeLink = screen.getByRole("link", { name: ariaTextCollection });

      expect(homeLink).toBeInTheDocument();
    });

    test("Then it should show a add boardgame link", () => {
      const addBoardgameText = "add boardgame";

      renderWithProviders(<Navbar onLogoutUser={onLogoutUserMock} />);

      const addBoardgameLink = screen.getByRole("link", {
        name: addBoardgameText,
      });

      expect(addBoardgameLink).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the logout button", () => {
    test("Then it should call the function handleOnClick", async () => {
      renderWithProviders(<Navbar onLogoutUser={onLogoutUserMock} />);
      const altTextButton = "logout user";

      const button = screen.getByAltText(altTextButton);

      await userEvent.click(button);

      expect(onLogoutUserMock).toHaveBeenCalled();
    });
  });
});
