import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  renderWithProviders,
  renderWithProvidersWithoutRouter,
} from "../../utils/testUtils";
import DetailPage from "./DetailPage";
import {
  boardGamesMock,
  partialBoardgameMock,
} from "../../mocks/boardgames/boardgamesMocks";
import { store } from "../../store";
import { successFeedback } from "../../hooks/modalData";
import CollectionPage from "../CollectionPage/CollectionPage";
import paths from "../../routers/paths";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import UpdateBoardgamePage from "../UpdateBoardgamePage/UpdateBoardgamePage";

describe("Given a DetailPage ID", () => {
  describe("When it is rendered with the id of Rising Sun", () => {
    test("Then it should show a heading with the title 'Rising Sun' ", () => {
      const expectedTitle = "Rising Sun";

      renderWithProviders(<DetailPage />, {
        boardgameStore: {
          boardgames: boardGamesMock,
          stack: 5,
          boardgame: boardGamesMock[0],
          totalBoardgames: 10,
        },
      });

      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a boardgame ", () => {
    test("Then it should show a button with the text 'Delete'  and a button with the text 'Modify' ", () => {
      const expectedEditButtonText = "Modify";
      const expectedDeleteButtonText = "Delete";

      renderWithProviders(<DetailPage />, {
        boardgameStore: {
          boardgames: boardGamesMock,
          stack: 5,
          boardgame: partialBoardgameMock,
          totalBoardgames: 10,
        },
      });

      const editButton = screen.getByRole("button", {
        name: expectedEditButtonText,
      });
      const DeleteButton = screen.getByRole("button", {
        name: expectedDeleteButtonText,
      });

      expect(editButton).toBeInTheDocument();
      expect(DeleteButton).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the delete button", () => {
    test("Then is should show a feedback", async () => {
      const deleteButtonText = "Delete";

      const routes = [
        { path: paths.root, element: <DetailPage /> },
        { path: paths.collection, element: <CollectionPage /> },
      ];

      const router = createMemoryRouter(routes);

      renderWithProvidersWithoutRouter(<RouterProvider router={router} />);

      const deleteButton = screen.getByRole("button", {
        name: deleteButtonText,
      });

      await userEvent.click(deleteButton);

      const message = store.getState().uiStore.modalData.title;

      expect(message).toBe(successFeedback.delete.title);
    });
  });

  describe("When the user clicks on the modify button", () => {
    test("Then it should redirect to the UpdateBoardgamePage", async () => {
      const buttonText = "Modify";
      const expectedText = "modify";

      const routes = [
        { path: paths.root, element: <DetailPage /> },
        { path: paths.modifyBoardgame, element: <UpdateBoardgamePage /> },
      ];

      const testRouter = createMemoryRouter(routes);

      renderWithProvidersWithoutRouter(<RouterProvider router={testRouter} />);

      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.click(button);

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
