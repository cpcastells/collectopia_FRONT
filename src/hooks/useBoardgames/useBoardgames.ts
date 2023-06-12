import axios from "axios";
import { useCallback } from "react";
import paths from "../../routers/paths";
import {
  BoardgameApiResponse,
  BoardgameBaseStructure,
  BoardgameCreateResponse,
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
  const { stack } = useAppSelector((state) => state.boardgameStore);

  const dispatch = useAppDispatch();

  const getBoardgames = useCallback(
    async (filter?: string): Promise<BoardgameApiResponse | undefined> => {
      try {
        const {
          data: { boardgames, totalBoardgames },
        } = await axios.get<BoardgameApiResponse>(
          `${apiUrl}${paths.boardgames}?limit=${stack}&filter=${filter}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        dispatch(hideLoadingActionCreator());

        return { boardgames, totalBoardgames };
      } catch (error) {
        dispatch(hideLoadingActionCreator());

        dispatch(showModalActionCreator(errorFeedback.loadBoardgames));
      }
    },
    [dispatch, stack, token]
  );

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

  const addBoardgame = async (
    boardgame: BoardgameBaseStructure
  ): Promise<BoardgameCreateResponse | undefined> => {
    try {
      dispatch(showLoadingActionCreator());

      const { data } = await axios.post<BoardgameCreateResponse>(
        `${apiUrl}${paths.createEndpoint}`,
        boardgame,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(hideLoadingActionCreator());

      dispatch(showModalActionCreator(successFeedback.add));
      return data;
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      dispatch(showModalActionCreator(errorFeedback.add));
    }
  };

  return { getBoardgames, deleteBoardgame, addBoardgame };
};

export default useBoardgames;
