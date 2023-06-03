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
} from "../../store/ui/uiSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const useBoardgames = () => {
  const { token } = useAppSelector((state) => state.userStore);
  const dispatch = useAppDispatch();

  const getBoardgames = useCallback(async (): Promise<BoardgameStructure[]> => {
    dispatch(showLoadingActionCreator());

    const {
      data: { boardgames },
    } = await axios.get<BoardgamesApiResponse>(`${apiUrl}${paths.boardgames}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(hideLoadingActionCreator());

    return boardgames;
  }, [dispatch, token]);
  return { getBoardgames };
};

export default useBoardgames;
