import { render, screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import Header from "./Header";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import paths from "../../routers/paths";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../../store";
import { theme } from "../../styles/theme/theme";
import LoginPage from "../../pages/login/LoginPage";

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

  describe("When it is rendered and the user clicks on logout", () => {
    test("Then it should redirect to login page", async () => {
      const altTextButton = "logout user";
      const routes: RouteObject[] = [
        { path: paths.root, element: <Header /> },
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

      expect(routerTest.state.location.pathname).toBe(paths.login);
    });
  });
});
