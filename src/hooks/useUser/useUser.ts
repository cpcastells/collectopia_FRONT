import axios from "axios";
import { UserCredentialsStructure } from "../../types";

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const getUserToken = async (
    userCredentials: UserCredentialsStructure
  ): Promise<string> => {
    const {
      data: { token },
    } = await axios.post(`${apiUrl}user/login`, userCredentials);
    return token;
  };

  return { getUserToken };
};

export default useUser;
