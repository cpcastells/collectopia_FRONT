import axios from "axios";
import { UserCredentialsStructure } from "../../types";
import { useAppDispatch } from "../../store";
import { showLoadingActionCreator } from "../../store/ui/uiSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const dispatch = useAppDispatch();
  const getUserToken = async (
    userCredentials: UserCredentialsStructure
  ): Promise<string> => {
    dispatch(showLoadingActionCreator());
    const {
      data: { token },
    } = await axios.post(`${apiUrl}user/login`, userCredentials);
    return token;
  };

  return { getUserToken };
};

export default useUser;
