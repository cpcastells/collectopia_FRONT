import jwtDecode from "jwt-decode";
import { userApiDataStructure } from "../../store/users/types";
import { DecodedTokenStructure } from "../../types";
import { useCallback } from "react";

const useToken = () => {
  const decodeUserDataToken = useCallback(
    (token: string): userApiDataStructure => {
      const decodedTokenData: DecodedTokenStructure = jwtDecode(token);
      const userData = {
        name: decodedTokenData.name,
        id: decodedTokenData.sub,
        token,
      };

      return userData;
    },
    []
  );

  return { decodeUserDataToken };
};

export default useToken;
