import { renderHook } from "@testing-library/react";
import useUser from "./useUser";
import { tokenMock, userCredentialsMock } from "../../mocks/user/userMocks";
import { wrapper } from "../../utils/testUtils";
import { server } from "../../mocks/server/server";
import { errorHandlers } from "../../mocks/handlers/handlers";

describe("Given a getUserToken function", () => {
  const userCredentials = userCredentialsMock;
  describe("When it is called with username 'Jonny' and password 'holacaracola'", () => {
    test("Then it should return a token", async () => {
      const expectedToken = tokenMock;

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });

      const token = await getUserToken(userCredentials);

      expect(token).toBe(expectedToken);
    });
  });

  describe("When it is called with invalid credentials", () => {
    test("Then it should return an error", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });

      expect(getUserToken(userCredentials)).resolves.toBeUndefined();
    });
  });
});
