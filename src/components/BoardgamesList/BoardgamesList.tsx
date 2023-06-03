import { boardGamesMock } from "../../mocks/boardgames/boardgamesMocks";
import BoardgameCard from "../BoardgameCard/BoardgameCard";
import BoardgamesListStyled from "./BoardgameListStyled";

const BoardgamesList = (): React.ReactElement => {
  return (
    <BoardgamesListStyled>
      {boardGamesMock.map((boardgame) => (
        <li key={boardgame.id} className="card">
          <BoardgameCard boardgame={boardgame} />
        </li>
      ))}
    </BoardgamesListStyled>
  );
};

export default BoardgamesList;
