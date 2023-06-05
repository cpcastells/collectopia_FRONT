import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import CollectionPage from "./CollectionPage";

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
});
