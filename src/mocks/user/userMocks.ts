import {
  userApiDataStructure,
  userStateStructure,
} from "../../store/users/types";
import { UserCredentialsStructure } from "../../types";

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

export const userCredentialsMock: UserCredentialsStructure = {
  username: "Jonny",
  password: "holacaracola",
};

export const tokenMock = "2h3ghghj2g31212jhk2h3j123hk1h23";
