import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UpdateBoardgamePage from "./UpdateBoardgamePage";
import {
  renderWithProvidersWithoutRouter,
  wrapWithRouter,
} from "../../utils/testUtils";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../routers/paths";
import CollectionPage from "../CollectionPage/CollectionPage";

describe("Given a UpdateBoardgamePage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'modify'", () => {
      const expectedText = "modify";

      renderWithProvidersWithoutRouter(wrapWithRouter(<UpdateBoardgamePage />));

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user types the necessary fields and click the modify button", () => {
    test("Then it should redirect to the CollectionPage", async () => {
      const routes: RouteObject[] = [
        { path: paths.root, element: <UpdateBoardgamePage /> },
        { path: paths.collection, element: <CollectionPage /> },
      ];

      const routerTest = createMemoryRouter(routes);

      renderWithProvidersWithoutRouter(<RouterProvider router={routerTest} />);

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
      const mechanicsField = screen.getByLabelText("Mechanics:");
      const imageUrlField = screen.getByLabelText("Image (url):");
      const releaseYearField = screen.getByLabelText("Release year:");
      const authorField = screen.getByLabelText("Author:");
      const priceField = screen.getByLabelText("Price - €:");
      const descriptionField = screen.getByLabelText("Description:");
      const addButton = screen.getByRole("button", { name: /modify/i });

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
