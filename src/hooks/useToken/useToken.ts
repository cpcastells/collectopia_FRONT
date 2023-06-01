import jwtDecode from "jwt-decode";
import { userApiDataStructure } from "../../store/users/types";
import { DecodedTokenStructure } from "../../types";
import { useCallback } from "react";

const useToken = () => {
  const decodeUserDataToken = useCallback(
    (token: string): Partial<userApiDataStructure> => {
      const decodedTokenData: Partial<DecodedTokenStructure> = jwtDecode(token);
      const userData = {
        name: decodedTokenData.name,
        id: decodedTokenData.sub,
      };

      return userData;
    },
    []
  );

  return { decodeUserDataToken };
};

export default useToken;
