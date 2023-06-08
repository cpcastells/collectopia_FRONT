import BoardgameForm from "../../components/BoardgameForm/BoardgameForm";
import AddBoardgamePageStyled from "./AddBoardgamePageStyled";

const AddBoardgamePage = (): React.ReactElement => {
  return (
    <AddBoardgamePageStyled>
      <h2 className="add-title">add</h2>
      <span className="add-subtitle">bordgame!</span>
      <BoardgameForm />
    </AddBoardgamePageStyled>
  );
};

export default AddBoardgamePage;