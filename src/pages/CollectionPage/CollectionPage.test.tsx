import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import CollectionPage from "./CollectionPage";
import { boardGamesMock } from "../../mocks/boardgames/boardgamesMocks";
import { server } from "../../mocks/server/server";
import { PaginationHandlers } from "../../mocks/handlers/handlers";
import paths from "../../routers/paths";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme/theme";

describe("Given a CollectionPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should appear a heading with a text 'My collection'", () => {
      const expectedTest = "My collection";

      renderWithProviders(<CollectionPage />);

      const heading = screen.getByRole("heading", {
        level: 2,
        name: expectedTest,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the button 'Load More'", () => {
    test("Then it shoud render the a new stack of boardgames", async () => {
      server.resetHandlers(...PaginationHandlers);

      const routes: RouteObject[] = [
        { path: paths.root, element: <CollectionPage /> },
      ];

      const routerTest = createMemoryRouter(routes);

      render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={routerTest} />
          </ThemeProvider>
        </Provider>
      );

      const heading = screen.getByRole("heading", {
        name: boardGamesMock[5].title,
      });
      screen.debug();
      const button = screen.getByAltText("load more button");

      await userEvent.click(button);

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When the user click on the option 'filler' of the select filter", () => {
    test("Then it should render filtered boardgames", async () => {
      const expectedAriaText = "filter by category";
      const choosenFilter = "War Game";

      renderWithProviders(<CollectionPage />, {
        boardgameStore: { boardgames: boardGamesMock, stack: 5 },
      });

      const heading = screen.getByRole("heading", { name: "Rising Sun" });

      const filterSelect = screen.getByLabelText(expectedAriaText);
      await userEvent.selectOptions(filterSelect, [choosenFilter]);

      expect(heading).toBeInTheDocument();
    });
  });
});
