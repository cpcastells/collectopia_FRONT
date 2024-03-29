import {
  initialUserStateMock,
  newUserStateMock,
} from "../../../mocks/user/userMocks";
import { UserStateStructure } from "../types";
import { logoutUserActionCreator, userReducer } from "../userSlice";

describe("Given a logoutUser reducer", () => {
  describe("When it receives an action", () => {
    test("Then it should return an initial state", () => {
      const initialUserState: UserStateStructure = initialUserStateMock;
      const currentUserState: UserStateStructure = newUserStateMock;

      const newUserState = userReducer(
        currentUserState,
        logoutUserActionCreator()
      );

      expect(newUserState).toStrictEqual(initialUserState);
    });
  });
});
