import { BoardgameStructure } from "../../store/boardgames/types";
import Button from "../Button/Button";
import BoardgameCardStyled from "./BoardgameCardStyled";

interface BoardgameCardProps {
  boardgame: BoardgameStructure;
}

const BoardgameCard = ({
  boardgame: {
    title,
    category,
    duration,
    image,
    players: { min, max },
  },
}: BoardgameCardProps): React.ReactElement => {
  return (
    <BoardgameCardStyled>
      <div className="card__header">
        <h3 className="card__title">{title}</h3>
        <span className="card__category">{category}</span>
      </div>
      <div className="card__image">
        <img src={image} alt={title}></img>
      </div>
      <div className="card__info">
        <div className="card__players">
          <img src="/images/people-icon.svg" alt="players icon"></img>
          <span>
            {min}-{max}
          </span>
        </div>
        <div className="card__playtime">
          <img src="/images/time-icon.svg" alt="time icon"></img>
          <span>{duration} min</span>
        </div>
      </div>
      <div className="card__buttons-container">
        <Button className={"card__details-button"} text={"Details"} />
        <Button className={"card__delete-button"} text={"Delete"} />
      </div>
    </BoardgameCardStyled>
  );
};

export default BoardgameCard;
