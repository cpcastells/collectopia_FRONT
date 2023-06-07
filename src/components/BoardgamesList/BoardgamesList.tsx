import { useAppDispatch } from "../../store";
import { removeBoardgameActionCreator } from "../../store/boardgames/boardgameSlice";
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

  const handleOnDelete = (id: string): void => {
    dispatch(removeBoardgameActionCreator(id));
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
