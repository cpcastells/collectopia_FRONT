import { renderHook } from "@testing-library/react";
import useBoardgames from "../useBoardgames";
import { boardGamesMock } from "../../../mocks/boardgames/boardgamesMocks";
import { vi } from "vitest";
import { wrapper } from "../../../utils/testUtils";

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

      const boardgames = await getBoardgames();

      expect(boardgames).toStrictEqual(expectedBoardgames);
    });
  });
});
