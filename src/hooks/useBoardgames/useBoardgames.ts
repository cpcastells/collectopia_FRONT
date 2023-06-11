import axios from "axios";
import { useCallback } from "react";
import paths from "../../routers/paths";
import {
  BoardgameBaseStructure,
  BoardgameCreateResponse,
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
  const { stack } = useAppSelector((state) => state.boardgameStore);
  const { filter } = useAppSelector((state) => state.uiStore);
  const dispatch = useAppDispatch();

  const getBoardgames = useCallback(async (): Promise<
    BoardgameStructure[] | undefined
  > => {
    try {
      const {
        data: { boardgames },
      } = await axios.get<BoardgamesApiResponse>(
        `${apiUrl}${paths.boardgames}?limit=${stack}&filter=${filter}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(hideLoadingActionCreator());

      return boardgames;
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      dispatch(showModalActionCreator(errorFeedback.loadBoardgames));
    }
  }, [dispatch, filter, stack, token]);

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
