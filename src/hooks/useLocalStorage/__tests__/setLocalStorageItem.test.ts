import { renderHook } from "@testing-library/react";
import { tokenMock } from "../../../mocks/user/userMocks";
import useLocalStorage from "../useLocalStorage";
import { vi } from "vitest";

describe("Given a setLocalStorageItem function", () => {
  describe("When it is called with a key and a token", () => {
    test("Then it should call the method setItem with the key and the token", () => {
      const key = "token";
      const token = tokenMock;

      Storage.prototype.setItem = vi.fn();

      const {
        result: {
          current: { setLocalStorageItem },
        },
      } = renderHook(() => useLocalStorage());

      setLocalStorageItem(key, token);

      expect(localStorage.setItem).toHaveBeenCalledWith(key, token);
    });
  });
});
