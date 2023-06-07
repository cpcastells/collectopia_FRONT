import axios from "axios";
import { useCallback } from "react";
import paths from "../../routers/paths";
import {
  BoardgameStructure,
  BoardgamesApiResponse,
} from "../../store/boardgames/types";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../store/ui/uiSlice";
import { errorFeedback, successFeedback } from "../modalData";

const apiUrl = import.meta.env.VITE_API_URL;

const useBoardgames = () => {
  const { token } = useAppSelector((state) => state.userStore);
  const dispatch = useAppDispatch();

  const getBoardgames = useCallback(async (): Promise<
    BoardgameStructure[] | undefined
  > => {
    try {
      const {
        data: { boardgames },
      } = await axios.get<BoardgamesApiResponse>(
        `${apiUrl}${paths.boardgames}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(hideLoadingActionCreator());

      return boardgames;
    } catch (error) {
      dispatch(showModalActionCreator(errorFeedback.loadBoardgames));

      dispatch(hideLoadingActionCreator());
    }
  }, [dispatch, token]);

  const deleteBoardgame = async (boargameId: string) => {
    try {
      dispatch(showLoadingActionCreator());

      await axios.delete(`${apiUrl}${paths.boardgames}/${boargameId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(hideLoadingActionCreator());

      dispatch(showModalActionCreator(successFeedback.delete));
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      dispatch(showModalActionCreator(errorFeedback.delete));
    }
  };

  return { getBoardgames, deleteBoardgame };
};

export default useBoardgames;
