import { renderHook } from "@testing-library/react";
import useToken from "./useToken";
import { decodedTokenMock, tokenMock } from "../../mocks/user/userMocks";

describe("Given a decodeUserDataToken function", () => {
  describe("When it is called with a token", () => {
    test("Then it should return the corresponding user data with a token", () => {
      const fakeToken = tokenMock;
      const fakeDecodedToken = decodedTokenMock;

      const {
        result: {
          current: { decodeUserDataToken },
        },
      } = renderHook(() => useToken());

      const userData = decodeUserDataToken(fakeToken);

      expect(userData).toStrictEqual({
        id: fakeDecodedToken.sub,
        name: fakeDecodedToken.name,
        token: fakeToken,
      });
    });
  });
});
