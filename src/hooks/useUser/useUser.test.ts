import { renderHook } from "@testing-library/react";
import useUser from "./useUser";
import { tokenMock, userCredentialsMock } from "../../mocks/user/userMocks";
import { wrapper } from "../../utils/testUtils";

describe("Given a getUserToken function", () => {
  describe("When it is called with username 'Jonny' and password 'holacaracola'", () => {
    test("Then it should return a token", async () => {
      const expectedToken = tokenMock;
      const userCredentials = userCredentialsMock;

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });
      const token = await getUserToken(userCredentials);

      expect(token).toBe(expectedToken);
    });
  });
});
