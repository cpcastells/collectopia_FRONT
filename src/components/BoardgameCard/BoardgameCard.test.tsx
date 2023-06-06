import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import BoardgameCard from "./BoardgameCard";
import { boardGamesMock } from "../../mocks/boardgames/boardgamesMocks";
import { initialUserStateMock } from "../../mocks/user/userMocks";
import { vi } from "vitest";

describe("Given a BoardgameCard component", () => {
  const handleOnDelete = vi.fn();
  describe("When it is rendered", () => {
    const expectedText = "Rising Sun";
    const mockBoardgame = boardGamesMock[0];

    test("Then it should show a heading with the title 'Rising Sun'", () => {
      renderWithProviders(
        <BoardgameCard boardgame={mockBoardgame} onClick={handleOnDelete} />,
        {
          userStore: initialUserStateMock,
        }
      );

      const heading = screen.getByRole("heading", {
        level: 3,
        name: expectedText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show an image with the alt text 'Rising Sun'", () => {
      renderWithProviders(
        <BoardgameCard boardgame={mockBoardgame} onClick={handleOnDelete} />
      );

      const image = screen.getByAltText(expectedText);

      expect(image).toBeInTheDocument();
    });

    test("Then it should show a delete button", () => {
      const expectedButtonText = "Delete";

      renderWithProviders(
        <BoardgameCard boardgame={mockBoardgame} onClick={handleOnDelete} />
      );

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a details button", () => {
      const expectedButtonText = "Details";

      renderWithProviders(
        <BoardgameCard boardgame={mockBoardgame} onClick={handleOnDelete} />
      );

      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives the function handleOnClick and the user clicks on delete button", () => {
    test("Then the function should be called", async () => {
      const buttonText = "Delete";

      renderWithProviders(
        <BoardgameCard onClick={handleOnDelete} boardgame={boardGamesMock[0]} />
      );

      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.click(button);

      expect(handleOnDelete).toHaveBeenCalled();
    });
  });
});
