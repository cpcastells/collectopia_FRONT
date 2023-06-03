import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import BoardgameCard from "./BoardgameCard";
import { boardGamesMock } from "../../mocks/boardgames/boardgamesMocks";
import { initialUserStateMock } from "../../mocks/user/userMocks";

describe("Given a BoardgameCard component", () => {
  describe("When it is rendered", () => {
    const expectedText = "Rising Sun";
    const mockBoardgame = boardGamesMock[0];

    test("Then it should show a heading with the title 'Rising Sun'", () => {
      renderWithProviders(<BoardgameCard boardgame={mockBoardgame} />, {
        userStore: initialUserStateMock,
      });

      const heading = screen.getByRole("heading", {
        level: 3,
        name: expectedText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show an image with the alt text 'Rising Sun'", () => {
      renderWithProviders(<BoardgameCard boardgame={mockBoardgame} />);

      const image = screen.getByAltText(expectedText);

      expect(image).toBeInTheDocument();
    });

    test("Then it should show a delete button", () => {
      const expectedButtonText = "Delete";

      renderWithProviders(<BoardgameCard boardgame={mockBoardgame} />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a details button", () => {
      const expectedButtonText = "Details";

      renderWithProviders(<BoardgameCard boardgame={mockBoardgame} />);

      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
