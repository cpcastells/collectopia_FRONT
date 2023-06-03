import { boardGamesMock } from "../../mocks/boardgames/boardgamesMocks";
import BoardgameCard from "../BoardgameCard/BoardgameCard";

const BoardgamesList = (): React.ReactElement => {
  return (
    <ul>
      {boardGamesMock.map((boardgame) => (
        <li key={boardgame.id} className="card">
          <BoardgameCard boardgame={boardgame} />
        </li>
      ))}
    </ul>
  );
};

export default BoardgamesList;
