import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Button from "./Button";

describe("Given a button component", () => {
  describe("When it is rendered with the text Details", () => {
    test("Then it should should show the text 'Details'", () => {
      const expectedText = "Details";

      renderWithProviders(<Button text={expectedText} />);

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });
});
