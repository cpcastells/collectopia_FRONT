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
  showModalActionCreator,
} from "../../store/ui/uiSlice";
import { errorFeedback } from "../modalData";

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
  return { getBoardgames };
};

export default useBoardgames;
