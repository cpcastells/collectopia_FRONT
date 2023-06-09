import { useNavigate } from "react-router";
import BoardgameForm from "../../components/BoardgameForm/BoardgameForm";
import useBoardgames from "../../hooks/useBoardgames/useBoardgames";
import { useAppDispatch } from "../../store";
import { addBoardgameActionCreator } from "../../store/boardgames/boardgameSlice";
import { BoardgameBaseStructure } from "../../store/boardgames/types";
import AddBoardgamePageStyled from "./AddBoardgamePageStyled";
import paths from "../../routers/paths";

const AddBoardgamePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { addBoardgame } = useBoardgames();
  const navigate = useNavigate();

  const submitBoardgameForm = async (boardgame: BoardgameBaseStructure) => {
    const newBoardgame = await addBoardgame(boardgame);

    if (newBoardgame) {
      dispatch(addBoardgameActionCreator(newBoardgame.boardgame));
      navigate(paths.collection);
    }
  };

  return (
    <AddBoardgamePageStyled>
      <h2 className="add-title">add</h2>
      <span className="add-subtitle">bordgame!</span>
      <BoardgameForm submitBoardgameForm={submitBoardgameForm} />
    </AddBoardgamePageStyled>
  );
};

export default AddBoardgamePage;
