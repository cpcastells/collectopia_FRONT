import { vi } from "vitest";
import { renderHook } from "@testing-library/react";
import useLocalStorage from "../useLocalStorage";

describe("Given a getLocalStorage function", () => {
  describe("When it is called with a key", () => {
    test("Then it should call the method with the key", () => {
      const key = "token";

      Storage.prototype.getItem = vi.fn();

      const {
        result: {
          current: { getLocalStorageItem },
        },
      } = renderHook(() => useLocalStorage());

      getLocalStorageItem(key);

      expect(localStorage.getItem).toHaveBeenCalledWith(key);
    });
  });
});
