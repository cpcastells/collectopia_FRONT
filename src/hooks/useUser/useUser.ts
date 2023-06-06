import axios from "axios";
import { UserCredentialsStructure } from "../../types";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../store/ui/uiSlice";
import { errorFeedback, successFeedback } from "../modalData";

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const dispatch = useAppDispatch();

  const getUserToken = async (
    userCredentials: UserCredentialsStructure
  ): Promise<string | undefined> => {
    try {
      const {
        data: { token },
      } = await axios.post(`${apiUrl}user/login`, userCredentials);

      dispatch(showModalActionCreator(successFeedback.credentials));

      dispatch(showLoadingActionCreator());

      return token;
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      dispatch(showModalActionCreator(errorFeedback.credentials));
    }
  };

  return { getUserToken };
};

export default useUser;
