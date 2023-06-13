import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  renderWithProvidersWithoutRouter,
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils";
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

describe("Given a CollectionPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should appear a heading with a text 'My collection'", () => {
      const expectedTest = "My collection";

      renderWithProvidersWithoutRouter(wrapWithRouter(<CollectionPage />));

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

      renderWithProvidersWithoutRouter(<RouterProvider router={routerTest} />, {
        boardgameStore: {
          boardgames: boardGamesMock,
          totalBoardgames: 10,
          boardgame: boardGamesMock[0],
          stack: 5,
        },
      });

      const heading = screen.getByRole("heading", {
        name: boardGamesMock[5].title,
      });

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
        boardgameStore: {
          boardgames: boardGamesMock,
          stack: 5,
          boardgame: boardGamesMock[0],
          totalBoardgames: 6,
        },
      });

      const heading = screen.getByRole("heading", { name: "Rising Sun" });

      const filterSelect = screen.getByLabelText(expectedAriaText);
      await userEvent.selectOptions(filterSelect, [choosenFilter]);

      expect(heading).toBeInTheDocument();
    });
  });
});
