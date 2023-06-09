import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import AddBoardgamePage from "./AddBoardgamePage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../routers/paths";
import CollectionPage from "../CollectionPage/CollectionPage";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../../store";
import { theme } from "../../styles/theme/theme";

describe("Given a AddBoardgamePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with 'add'", () => {
      const expectedText = "add";

      renderWithProviders(<AddBoardgamePage />);

      const heading = screen.getByRole("heading", {
        name: expectedText,
        level: 2,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user types the necessary fields and click the 'Add' button", () => {
    test("Then should redirect to CollectionPage page", async () => {
      const routes: RouteObject[] = [
        { path: paths.root, element: <AddBoardgamePage /> },
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

      const typedBoardgameTitle = "Gloomhaven";
      const typedPlaytime = 120;
      const typedMinPlayers = 2;
      const typedMaxPlayers = 5;
      const typedCategory = "Eurogame";
      const typedMechanics = "Worker Placement";
      const typedImageUrl = "http://example.com/image.png";
      const typedReleaseYear = 2017;
      const typedAuthor = "Isaac Childres";
      const typedPrice = 60;
      const typedDescription =
        "Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives.";

      const titleField = screen.getByLabelText("Title:");
      const playtimeField = screen.getByLabelText("Playtime (minutes):");
      const minPlayersField = screen.getByLabelText("Min. players:");
      const maxPlayersField = screen.getByLabelText("Max. players:");
      const categoryField = screen.getByLabelText("Category:");
      const mechanicsField = screen.getByLabelText("Mechanics");
      const imageUrlField = screen.getByLabelText("Image (url):");
      const releaseYearField = screen.getByLabelText("Release year:");
      const authorField = screen.getByLabelText("Author:");
      const priceField = screen.getByLabelText("Price - €:");
      const descriptionField = screen.getByLabelText("Description:");
      const addButton = screen.getByRole("button", { name: /add/i });

      await userEvent.type(titleField, typedBoardgameTitle);
      await userEvent.type(playtimeField, typedPlaytime.toString());
      await userEvent.type(minPlayersField, typedMinPlayers.toString());
      await userEvent.type(maxPlayersField, typedMaxPlayers.toString());
      userEvent.selectOptions(categoryField, [typedCategory]);
      userEvent.selectOptions(mechanicsField, [typedMechanics]);
      await userEvent.type(imageUrlField, typedImageUrl);
      await userEvent.type(releaseYearField, typedReleaseYear.toString());
      await userEvent.type(authorField, typedAuthor);
      await userEvent.type(priceField, typedPrice.toString());
      await userEvent.type(descriptionField, typedDescription);

      await userEvent.click(addButton);

      const heading = screen.getByRole("heading", { name: "My collection" });

      expect(heading).toBeInTheDocument();
      expect(routerTest.state.location.pathname).toBe(paths.collection);
    });
  });
});
