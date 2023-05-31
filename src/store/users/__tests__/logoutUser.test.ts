import {
  initialUserStateMock,
  newUserStateMock,
} from "../../../mocks/user/userMocks";
import { userStateStructure } from "../types";
import { logoutUserActionCreator, userReducer } from "../userSlice";

describe("Given a logoutUser reducer", () => {
  describe("When it receives an action", () => {
    test("Then it should return an initial state", () => {
      const initialUserState: userStateStructure = initialUserStateMock;
      const currentUserState: userStateStructure = newUserStateMock;

      const newUserState = userReducer(
        currentUserState,
        logoutUserActionCreator()
      );

      expect(newUserState).toStrictEqual(initialUserState);
    });
  });
});
