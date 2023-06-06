import { BoardgameStructure } from "../../store/boardgames/types";
import Button from "../Button/Button";
import BoardgameCardStyled from "./BoardgameCardStyled";
import peopleIcon from "../../assets/icons/people-icon.svg";
import timeIcon from "../../assets/icons/time-icon.svg";

interface BoardgameCardProps {
  boardgame: BoardgameStructure;
  isLazy?: "lazy" | "eager";
  onClick: (id: string) => void;
}

const BoardgameCard = ({
  boardgame: {
    title,
    category,
    duration,
    image,
    players: { min, max },
    id,
  },
  isLazy,
  onClick,
}: BoardgameCardProps): React.ReactElement => {
  return (
    <BoardgameCardStyled>
      <div className="card__header">
        <h3 className="card__title">{title}</h3>
        <span className="card__category">{category}</span>
      </div>
      <div className="card__image">
        <img
          src={image}
          alt={title}
          width={274}
          height={274}
          loading={isLazy}
        ></img>
      </div>
      <div className="card__info">
        <div className="card__players">
          <img
            src={peopleIcon}
            alt="players icon"
            width={35}
            height={37}
            loading={isLazy}
          ></img>
          <span>
            {min}-{max}
          </span>
        </div>
        <div className="card__playtime">
          <img
            src={timeIcon}
            alt="time icon"
            width={29}
            height={41}
            loading={isLazy}
          ></img>
          <span>{duration} min</span>
        </div>
      </div>
      <div className="card__buttons-container">
        <Button className={"card__details-button"} text={"Details"} />
        <Button
          className={"card__delete-button"}
          text={"Delete"}
          onClick={() => onClick(id)}
        />
      </div>
    </BoardgameCardStyled>
  );
};

export default BoardgameCard;
