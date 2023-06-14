import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import useBoardgames from "../../hooks/useBoardgames/useBoardgames";
import { useAppDispatch, useAppSelector } from "../../store";
import DetailPageStyled from "./DetailPageStyled";
import Button from "../../components/Button/Button";
import { removeBoardgameActionCreator } from "../../store/boardgames/boardgameSlice";
import paths from "../../routers/paths";

const DetailPage = (): React.ReactElement => {
  const { getBoardgameById, deleteBoardgame } = useBoardgames();
  const dispatch = useAppDispatch();
  const { boardgame } = useAppSelector((state) => state.boardgameStore);
  const { boardgameId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getBoardgameById(boardgameId as string);
  }, [boardgameId, getBoardgameById]);

  const handleOnDelete = async (): Promise<void> => {
    await deleteBoardgame(boardgame.id);
    dispatch(removeBoardgameActionCreator(boardgame.id));
    navigate(paths.collection);
  };

  return (
    <DetailPageStyled>
      <article className="detail">
        <h2 className="detail__page-title">{`What's about`}</h2>
        <div className="detail__info-container">
          <div className="detail__image-container">
            <img
              src={boardgame.image}
              alt={boardgame.title}
              width={411}
              height={411}
              className="detail__image"
            />
          </div>
          <div className="detail__secondary-container">
            <div className="detail__title-container">
              <h3 className="detail__main-title">{boardgame.title}</h3>
              <span className="detail__author">
                by {boardgame.author !== "" ? boardgame.author : "-"}
              </span>
            </div>
            <div className="detail__price-container">
              <span className="detail__price">
                {boardgame.price !== 0 ? boardgame.price : "-"}
              </span>
              <span className="detail__euro-symbol">€</span>
            </div>
          </div>
          <span>
            Published:{" "}
            <span className="detail__data">
              {boardgame.releaseYear !== 0 ? boardgame.releaseYear : "-"}
            </span>
          </span>
          <span>
            Players:{" "}
            <span className="detail__data">
              {`${boardgame.players.min}${
                boardgame.players.max !== 0 ? ` - ${boardgame.players.max}` : ""
              }`}
            </span>
          </span>
          <span>
            Playtime:{" "}
            <span className="detail__data">{boardgame.duration} min</span>
          </span>
          <span>
            Category: <span className="detail__data">{boardgame.category}</span>
          </span>
          <span>
            Mechanics:{" "}
            <span className="detail__data">{boardgame.mechanics}</span>
          </span>
        </div>
        <div className="detail__description-container">
          <h3 className="detail__description-title">Description</h3>
          <p className="detail__description">{boardgame.briefDescription}</p>
        </div>
        <div className="detail__button-container">
          <Button
            text="Modify"
            className="detail__button detail__button--modify"
          />
          <Button
            text="Delete"
            className="detail__button detail__button--delete"
            onClick={handleOnDelete}
          />
        </div>
      </article>
    </DetailPageStyled>
  );
};

export default DetailPage;
