import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import CollectionPage from "./CollectionPage";

import { boardGamesMock } from "../../mocks/boardgames/boardgamesMocks";

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
      renderWithProviders(<CollectionPage />, {
        boardgameStore: { boardgames: boardGamesMock, stack: 5 },
      });

      const heading = screen.getByRole("heading", { name: "Rising Sun" });
      const button = screen.getByAltText("load more button");

      await userEvent.click(button);

      expect(heading).toBeInTheDocument();
    });
  });
});
