import { useNavigate } from "react-router";
import BoardgameForm from "../../components/BoardgameForm/BoardgameForm";
import useBoardgames from "../../hooks/useBoardgames/useBoardgames";
import { BoardgameStructure } from "../../store/boardgames/types";
import UpdateBoardgamePageStyled from "./UpdateBoardgamePageStyled";
import { useAppSelector } from "../../store";
import paths from "../../routers/paths";

const UpdateBoardgamePage = (): React.ReactElement => {
  const { boardgame } = useAppSelector((state) => state.boardgameStore);
  const { updateBoardgame } = useBoardgames();
  const navigate = useNavigate();

  const submitBoardgameForm = async (
    boardgame: BoardgameStructure | Partial<BoardgameStructure>
  ) => {
    await updateBoardgame(boardgame as BoardgameStructure);
    navigate(paths.collection);
  };

  return (
    <UpdateBoardgamePageStyled>
      <h2 className="modify-title">modify</h2>
      <span className="modify-subtitle">boardgame!</span>
      <BoardgameForm
        submitBoardgameForm={submitBoardgameForm}
        boardgame={boardgame}
      />
    </UpdateBoardgamePageStyled>
  );
};

export default UpdateBoardgamePage;
