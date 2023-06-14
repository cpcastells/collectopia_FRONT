import useBoardgames from "../../hooks/useBoardgames/useBoardgames";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  loadBoardgamesActionCreator,
  removeBoardgameActionCreator,
  updateTotalBoardgamesActionCreator,
} from "../../store/boardgames/boardgameSlice";
import { BoardgameStructure } from "../../store/boardgames/types";
import BoardgameCard from "../BoardgameCard/BoardgameCard";
import BoardgamesListStyled from "./BoardgameListStyled";

interface BoardgamesListProps {
  boardgames: BoardgameStructure[];
}

const BoardgamesList = ({
  boardgames,
}: BoardgamesListProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deleteBoardgame, getBoardgames } = useBoardgames();
  const { filter } = useAppSelector((state) => state.uiStore);

  const handleOnDelete = async (id: string): Promise<void> => {
    await deleteBoardgame(id);
    dispatch(removeBoardgameActionCreator(id));

    const response = await getBoardgames(filter);
    if (response) {
      const { boardgames, totalBoardgames } = response;

      dispatch(updateTotalBoardgamesActionCreator(totalBoardgames));

      dispatch(loadBoardgamesActionCreator(boardgames));
    }
  };

  return (
    <BoardgamesListStyled>
      {boardgames.map((boardgame, index) => (
        <li key={boardgame.id} className="card">
          <BoardgameCard
            boardgame={boardgame}
            isLazy={index === 0 ? "eager" : "lazy"}
            onClick={handleOnDelete}
          />
        </li>
      ))}
    </BoardgamesListStyled>
  );
};

export default BoardgamesList;
