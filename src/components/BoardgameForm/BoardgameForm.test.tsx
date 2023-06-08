import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import BoardgameForm from "./BoardgameForm";

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

describe("Given a BoardgameForm component", () => {
  testCases.forEach((expectedText) => {
    describe("When it is rendered", () => {
      test(`Then it should show a text field with the label '${expectedText}'`, () => {
        renderWithProviders(<BoardgameForm />);

        const field = screen.getByLabelText(expectedText);

        expect(field).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Add'", () => {
      const expectedText = "Add";

      renderWithProviders(<BoardgameForm />);

      const field = screen.getByRole("button", { name: expectedText });

      expect(field).toBeInTheDocument();
    });
  });

  describe("When the user types 'Gloomhaven' in the title field", () => {
    test("Then it should show the typed text", async () => {
      const typedBoardgameTitle = "Gloomhaven";
      const titleLabelText = "Title:";

      renderWithProviders(<BoardgameForm />);

      const titleField = screen.getByLabelText(titleLabelText);

      await userEvent.type(titleField, typedBoardgameTitle);

      expect(titleField).toHaveValue(typedBoardgameTitle);
    });
  });

  describe("When the user types '2' in the min. players field", () => {
    test("Then it should show the typed number", async () => {
      const typedMinPlayers = 3;
      const titleLabelText = "Min. players:";

      renderWithProviders(<BoardgameForm />);

      const titleField = screen.getByLabelText(titleLabelText);

      await userEvent.type(titleField, typedMinPlayers.toString());

      expect(titleField).toHaveValue(typedMinPlayers);
    });
  });
});
