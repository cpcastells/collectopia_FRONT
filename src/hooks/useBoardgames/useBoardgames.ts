import axios from "axios";
import { useCallback } from "react";
import paths from "../../routers/paths";
import {
  BoardgameApiResponse,
  BoardgameBaseStructure,
  BoardgameResponse,
  BoardgameStructure,
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
        dispatch(showLoadingActionCreator());
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
  ): Promise<BoardgameResponse | undefined> => {
    try {
      dispatch(showLoadingActionCreator());

      const { data } = await axios.post<BoardgameResponse>(
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

  const getBoardgameById = async (
    boardgameId: string
  ): Promise<BoardgameStructure | undefined> => {
    try {
      dispatch(showLoadingActionCreator());

      const {
        data: { boardgame },
      } = await axios.get<BoardgameResponse>(
        `${apiUrl}${paths.boardgames}/${boardgameId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      return boardgame;
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      dispatch(showModalActionCreator(errorFeedback.loadBoardgames));
    }
  };

  return { getBoardgames, deleteBoardgame, addBoardgame, getBoardgameById };
};

export default useBoardgames;
