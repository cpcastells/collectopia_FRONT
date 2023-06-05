import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { renderWithProviders } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../routers/paths";
import LoginPage from "../../pages/LoginPage/LoginPage";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../../store";
import { theme } from "../../styles/theme/theme";

describe("Given a Navbar component", () => {
  describe("When it renders", () => {
    test("Then it should show a button with an icon of logout", () => {
      const altTextLogout = "logout user";

      renderWithProviders(<Navbar />);

      const logoutLink = screen.getByAltText(altTextLogout);

      expect(logoutLink).toBeInTheDocument();
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

  describe("When it is rendered and the user clicks on logout", () => {
    test("Then it should redirect to login page", async () => {
      const altTextButton = "logout user";
      const expectedAltTest = "collectopia logo";

      const routes: RouteObject[] = [
        { path: paths.root, element: <Navbar /> },
        { path: paths.login, element: <LoginPage /> },
      ];

      const routerTest = createMemoryRouter(routes);

      render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={routerTest} />
          </ThemeProvider>
        </Provider>
      );

      const button = screen.getByAltText(altTextButton);

      await userEvent.click(button);

      userEvent.click(button);

      const logo = screen.getByAltText(expectedAltTest);

      expect(logo).toBeInTheDocument();
      expect(button).not.toBeInTheDocument();
    });
  });
});
