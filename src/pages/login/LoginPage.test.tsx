import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/testUtils";
import LoginPage from "./LoginPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../routers/paths";
import { Provider } from "react-redux";
import { store } from "../../store";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme/theme";
import CollectionPage from "../collection/CollectionPage";

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should appear the main logo with a alt text 'collectopia logo'", () => {
      const expectedAltTest = "collectopia logo";

      renderWithProviders(<LoginPage />);

      const logo = screen.getByAltText(expectedAltTest);

      expect(logo).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user types valid credentials", () => {
    test("Then should redirect to CollectionPage page", async () => {
      const routes: RouteObject[] = [
        { path: paths.root, element: <LoginPage /> },
        { path: paths.collection, element: <CollectionPage /> },
      ];

      const routerTest = createMemoryRouter(routes);

      render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={routerTest} />
          </ThemeProvider>
        </Provider>
      );

      const typedPassword = "user";
      const typedName = "123";
      const expectedUsernameLabelText = "username";
      const expectedPasswordLabelText = "password";

      const userNameField = screen.getByLabelText(expectedUsernameLabelText);
      const passwordField = screen.getByLabelText(expectedPasswordLabelText);
      const loginButton = screen.getByRole("button", { name: /log in/i });

      await userEvent.type(userNameField, typedName);
      await userEvent.type(passwordField, typedPassword);

      await userEvent.click(loginButton);

      expect(routerTest.state.location.pathname).toBe(paths.collection);
    });
  });
});
