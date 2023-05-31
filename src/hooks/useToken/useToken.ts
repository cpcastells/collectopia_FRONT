import jwtDecode from "jwt-decode";
import { userApiDataStructure } from "../../store/users/types";
import { decodedTokenStructure } from "../../types";

const useToken = () => {
  const decodeUserDataToken = (token: string): userApiDataStructure => {
    const decodedTokenData: decodedTokenStructure = jwtDecode(token);
    const userData = {
      name: decodedTokenData.name,
      id: decodedTokenData.sub,
      token,
    };

    return userData;
  };

  return { decodeUserDataToken };
};

export default useToken;
