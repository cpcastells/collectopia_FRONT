import { boardGamesMock } from "../../mocks/boardgames/boardgamesMocks";

const BoardgamesList = (): React.ReactElement => {
  return (
    <ul>
      {boardGamesMock.map((boardgame) => (
        <li key={boardgame.id}>
          <h3>{boardgame.title}</h3>
        </li>
      ))}
    </ul>
  );
};

export default BoardgamesList;
