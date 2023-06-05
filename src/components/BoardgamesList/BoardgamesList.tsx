import { BoardgameStructure } from "../../store/boardgames/types";
import BoardgameCard from "../BoardgameCard/BoardgameCard";
import BoardgamesListStyled from "./BoardgameListStyled";

interface BoardgamesListProps {
  boardgames: BoardgameStructure[];
}

const BoardgamesList = ({
  boardgames,
}: BoardgamesListProps): React.ReactElement => {
  return (
    <BoardgamesListStyled>
      {boardgames.map((boardgame, index) => (
        <li key={boardgame.id} className="card">
          <BoardgameCard
            boardgame={boardgame}
            isLazy={index === 0 ? "eager" : "lazy"}
          />
        </li>
      ))}
    </BoardgamesListStyled>
  );
};

export default BoardgamesList;
