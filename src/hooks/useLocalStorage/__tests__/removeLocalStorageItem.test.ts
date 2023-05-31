import { renderHook } from "@testing-library/react";
import useLocalStorage from "../useLocalStorage";
import { vi } from "vitest";

describe("Given a removeLocalStorageItem", () => {
  describe("when it is called with a key 'token',", () => {
    test("then it should invoke removeItem with the key", () => {
      const key = "token";

      Storage.prototype.removeItem = vi.fn();

      const {
        result: {
          current: { removeLocalStorageItem },
        },
      } = renderHook(() => useLocalStorage());

      removeLocalStorageItem(key);

      expect(localStorage.removeItem).toHaveBeenCalledWith(key);
    });
  });
});
