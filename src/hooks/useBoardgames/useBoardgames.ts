import axios from "axios";
import { useCallback } from "react";
import paths from "../../routers/paths";
import {
  BoardgameApiResponse,
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
import { loadBoardgameByIdActionCreator } from "../../store/boardgames/boardgameSlice";

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

  const deleteBoardgame = async (boardgameId: string): Promise<void> => {
    try {
      dispatch(showLoadingActionCreator());

      await axios.delete(`${apiUrl}${paths.boardgames}/${boardgameId}`, {
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
    boardgame: Partial<BoardgameStructure>
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

  const getBoardgameById = useCallback(
    async (boardgameId: string) => {
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

        dispatch(loadBoardgameByIdActionCreator(boardgame));

        dispatch(hideLoadingActionCreator());
      } catch (error) {
        dispatch(hideLoadingActionCreator());

        dispatch(showModalActionCreator(errorFeedback.loadBoardgames));
      }
    },
    [dispatch, token]
  );

  const updateBoardgame = async (
    boardgame: BoardgameStructure
  ): Promise<void> => {
    try {
      dispatch(showLoadingActionCreator());

      await axios.put(
        `${apiUrl}${paths.boardgames}/${paths.updateEndpoint}`,
        boardgame,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      dispatch(hideLoadingActionCreator());

      dispatch(showModalActionCreator(successFeedback.edit));
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      dispatch(showModalActionCreator(errorFeedback.edit));
    }
  };

  return {
    getBoardgames,
    deleteBoardgame,
    addBoardgame,
    getBoardgameById,
    updateBoardgame,
  };
};

export default useBoardgames;
