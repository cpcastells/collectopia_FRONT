import {
  initialUserStateMock,
  newUserStateMock,
  userDataApiMock,
} from "../../mocks/user/userMocks";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a loginUser reducer", () => {
  describe("When it receives an initial empty state and an action with userCredentials as payload", () => {
    test("Then it should return a new state with the logged user", () => {
      const initialUserState = initialUserStateMock;
      const payloadMock = userDataApiMock;
      const expectedNewUserSTate = newUserStateMock;

      const newUserState = userReducer(
        initialUserState,
        loginUserActionCreator(payloadMock)
      );

      expect(newUserState).toStrictEqual(expectedNewUserSTate);
    });
  });
});
