import {
  userApiDataStructure,
  userStateStructure,
} from "../../store/users/types";

export const initialUserStateMock: userStateStructure = {
  name: "",
  id: "",
  token: "",
  isLogged: false,
};

export const userDataApiMock: userApiDataStructure = {
  name: "jonny",
  id: "holacaracola",
  token: "12der2t3d12d23ty",
};

export const newUserStateMock: userStateStructure = {
  name: "jonny",
  id: "holacaracola",
  token: "12der2t3d12d23ty",
  isLogged: true,
};
