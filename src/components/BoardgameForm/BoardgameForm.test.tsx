import { screen } from "@testing-library/react";
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
});
