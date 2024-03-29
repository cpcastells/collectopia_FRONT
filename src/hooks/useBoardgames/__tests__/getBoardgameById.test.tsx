import { renderHook } from "@testing-library/react";
import useBoardgames from "../useBoardgames";
import { wrapper } from "../../../utils/testUtils";
import { boardGamesMock } from "../../../mocks/boardgames/boardgamesMocks";
import { server } from "../../../mocks/server/server";
import { errorHandlers } from "../../../mocks/handlers/handlers";
import { vi } from "vitest";
import { errorFeedback } from "../../modalData";
import { store } from "../../../store";
import { act } from "react-dom/test-utils";
import { showModalActionCreator } from "../../../store/ui/uiSlice";
import { loadBoardgameByIdActionCreator } from "../../../store/boardgames/boardgameSlice";

describe("Given a getBoardgameById function", () => {
  describe("When it is called with a boardgame ID", () => {
    test("Then it should dispatch the boardgame to the state", async () => {
      const dispatch = vi.spyOn(store, "dispatch");

      const {
        result: {
          current: { getBoardgameById },
        },
      } = renderHook(() => useBoardgames(), { wrapper: wrapper });

      await act(async () => {
        await getBoardgameById(boardGamesMock[0].id);
      });

      expect(dispatch).toHaveBeenCalledWith(
        loadBoardgameByIdActionCreator(boardGamesMock[0])
      );
    });
  });

  describe("When it rejects an error", () => {
    test("Then it should dispatch a showModal action ", async () => {
      const dispatch = vi.spyOn(store, "dispatch");
      const modalData = errorFeedback.loadBoardgames;

      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getBoardgameById },
        },
      } = renderHook(() => useBoardgames(), { wrapper: wrapper });

      await act(async () => {
        const result = await getBoardgameById(boardGamesMock[0].id);

        expect(result).toBe(undefined);
        expect(dispatch).toHaveBeenCalledWith(
          showModalActionCreator(modalData)
        );
      });
    });
  });
});
