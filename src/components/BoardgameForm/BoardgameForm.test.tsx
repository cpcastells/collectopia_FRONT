import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import BoardgameForm from "./BoardgameForm";
import { vi } from "vitest";

const testCases = [
  "Title:",
  "Playtime (minutes):",
  "Min. players:",
  "Max. players:",
  "Image (url):",
  "Release year:",
  "Author:",
  "Price - €:",
  "Description:",
];

const submitForm = vi.fn();

describe("Given a BoardgameForm component", () => {
  testCases.forEach((expectedText) => {
    describe("When it is rendered", () => {
      test(`Then it should show a text field with the label '${expectedText}'`, () => {
        renderWithProviders(<BoardgameForm submitBoardgameForm={submitForm} />);

        const field = screen.getByLabelText(expectedText);

        expect(field).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Add'", () => {
      const expectedText = "Add";

      renderWithProviders(<BoardgameForm submitBoardgameForm={submitForm} />);

      const field = screen.getByRole("button", { name: expectedText });

      expect(field).toBeInTheDocument();
    });
  });

  describe("When the user types 'Gloomhaven' in the title field", () => {
    test("Then it should show the typed text", async () => {
      const typedBoardgameTitle = "Gloomhaven";
      const titleLabelText = "Title:";

      renderWithProviders(<BoardgameForm submitBoardgameForm={submitForm} />);

      const titleField = screen.getByLabelText(titleLabelText);

      await userEvent.type(titleField, typedBoardgameTitle);

      expect(titleField).toHaveValue(typedBoardgameTitle);
    });
  });

  describe("When the user types '2' in the min. players field", () => {
    test("Then it should show the typed number", async () => {
      const typedMinPlayers = 3;
      const titleLabelText = "Min. players:";

      renderWithProviders(<BoardgameForm submitBoardgameForm={submitForm} />);

      const titleField = screen.getByLabelText(titleLabelText);

      await userEvent.type(titleField, typedMinPlayers.toString());

      expect(titleField).toHaveValue(typedMinPlayers);
    });
  });

  describe("When the user fills all required fields", () => {
    test("Then the Add button should be enabled", async () => {
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

      renderWithProviders(<BoardgameForm submitBoardgameForm={submitForm} />);

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
      const addButton = screen.getByRole("button", { name: /add/i });

      await userEvent.type(titleField, typedBoardgameTitle);
      await userEvent.type(playtimeField, typedPlaytime.toString());
      await userEvent.type(minPlayersField, typedMinPlayers.toString());
      await userEvent.type(maxPlayersField, typedMaxPlayers.toString());
      await userEvent.selectOptions(categoryField, [typedCategory]);
      await userEvent.selectOptions(mechanicsField, [typedMechanics]);
      await userEvent.type(imageUrlField, typedImageUrl);
      await userEvent.type(releaseYearField, typedReleaseYear.toString());
      await userEvent.type(authorField, typedAuthor);
      await userEvent.type(priceField, typedPrice.toString());
      await userEvent.type(descriptionField, typedDescription);

      await userEvent.click(addButton);

      expect(addButton).toBeEnabled();
      expect(submitForm).toHaveBeenCalled();
    }, 10000);
  });
});
