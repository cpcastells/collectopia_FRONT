import {
  userApiDataStructure,
  userStateStructure,
} from "../../store/users/types";
import { DecodedTokenStructure, UserCredentialsStructure } from "../../types";

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

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzaDRqMmczaDQyajNoNGdoMjM0IiwibmFtZSI6IkpvaG4iLCJpYXQiOjE2ODQ1OTUxNDgsImV4cCI6MTY4NDk0MDc0OH0.Hp1jgDdTxGa5zwIGNeDd2qfyDF39WqzGNerPeXsh6N0";

export const decodedTokenMock: DecodedTokenStructure = {
  name: "John",
  sub: "3h4j2g3h42j3h4gh234",
};
