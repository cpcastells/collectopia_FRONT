import jwtDecode from "jwt-decode";
import { UserApiDataStructure } from "../../store/users/types";
import { DecodedTokenStructure } from "../../types";
import { useCallback } from "react";

const useToken = () => {
  const decodeUserDataToken = useCallback(
    (token: string): Partial<UserApiDataStructure> => {
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
