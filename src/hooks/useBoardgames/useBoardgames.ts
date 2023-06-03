import axios from "axios";
import { useCallback } from "react";
import paths from "../../routers/paths";
import {
  BoardgameStructure,
  BoardgamesApiResponse,
} from "../../store/boardgames/types";
import { useAppSelector } from "../../store";

const apiUrl = import.meta.env.VITE_API_URL;

const useBoardgames = () => {
  const { token } = useAppSelector((state) => state.userStore);

  const getBoardgames = useCallback(async (): Promise<BoardgameStructure[]> => {
    const {
      data: { boardgames },
    } = await axios.get<BoardgamesApiResponse>(`${apiUrl}${paths.boardgames}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return boardgames;
  }, [token]);
  return { getBoardgames };
};

export default useBoardgames;
