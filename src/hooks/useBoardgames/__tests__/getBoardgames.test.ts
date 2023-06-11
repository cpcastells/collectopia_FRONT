import { act, renderHook } from "@testing-library/react";
import useBoardgames from "../useBoardgames";
import { boardGamesMock } from "../../../mocks/boardgames/boardgamesMocks";
import { vi } from "vitest";
import { wrapper } from "../../../utils/testUtils";
import { server } from "../../../mocks/server/server";
import { errorHandlers } from "../../../mocks/handlers/handlers";
import { store } from "../../../store";
import { showModalActionCreator } from "../../../store/ui/uiSlice";
import { errorFeedback } from "../../modalData";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a getBoardgames function", () => {
  describe("When it is called", () => {
    test("Then it should return a collection of boardgames", async () => {
      const expectedBoardgames = boardGamesMock;

      const {
        result: {
          current: { getBoardgames },
        },
      } = renderHook(() => useBoardgames(), { wrapper: wrapper });

      await act(async () => {
        const boardgames = await getBoardgames();

        expect(boardgames).toStrictEqual(expectedBoardgames);
      });
    });
  });

  describe("When it rejects with an error", () => {
    test("Then it should dispatch a showModal action ", async () => {
      const dispatch = vi.spyOn(store, "dispatch");
      const modalData = errorFeedback.loadBoardgames;

      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getBoardgames },
        },
      } = renderHook(() => useBoardgames(), { wrapper: wrapper });

      await act(async () => {
        const result = await getBoardgames();

        expect(result).toBe(undefined);
        expect(dispatch).toHaveBeenCalledWith(
          showModalActionCreator(modalData)
        );
      });
    });
  });
});
