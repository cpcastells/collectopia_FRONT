import { vi } from "vitest";
import { store } from "../../../store";
import { errorFeedback, successFeedback } from "../../modalData";
import { renderHook, screen } from "@testing-library/react";
import useBoardgames from "../useBoardgames";
import {
  renderWithProvidersWithoutRouter,
  wrapWithRouter,
  wrapper,
} from "../../../utils/testUtils";
import { boardGamesMock } from "../../../mocks/boardgames/boardgamesMocks";
import Layout from "../../../components/Layout/Layout";
import { showModalActionCreator } from "../../../store/ui/uiSlice";
import { server } from "../../../mocks/server/server";
import { errorHandlers } from "../../../mocks/handlers/handlers";

describe("Given a updateBoardgame function", () => {
  const dispatch = vi.spyOn(store, "dispatch");
  const boardgame = boardGamesMock[0];

  describe("When it is called with a boardgame", () => {
    test("Then it should dispatch a feedback", async () => {
      const modalData = successFeedback.edit;

      const {
        result: {
          current: { updateBoardgame },
        },
      } = renderHook(() => useBoardgames(), { wrapper: wrapper });

      await updateBoardgame(boardgame);

      renderWithProvidersWithoutRouter(wrapWithRouter(<Layout />));

      const heading = screen.getByRole("heading", {
        name: successFeedback.edit.title,
      });

      expect(dispatch).toHaveBeenCalledWith(showModalActionCreator(modalData));
      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is called with a boardgame and there is an error", () => {
    test("Then it should dispatch a error feedback", async () => {
      server.resetHandlers(...errorHandlers);
      const modalData = errorFeedback.edit;

      const {
        result: {
          current: { updateBoardgame },
        },
      } = renderHook(() => useBoardgames(), { wrapper: wrapper });

      await updateBoardgame(boardgame);

      renderWithProvidersWithoutRouter(wrapWithRouter(<Layout />));

      const heading = screen.getByRole("heading", {
        name: errorFeedback.edit.title,
      });

      expect(dispatch).toHaveBeenCalledWith(showModalActionCreator(modalData));
      expect(heading).toBeInTheDocument();
    });
  });
});
