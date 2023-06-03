import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import CollectionPageStyled from "./CollectionPageStyled.js";
import { loadBoardgamesActionCreator } from "../../store/boardgames/boardgameSlice.js";
import { boardGamesMock } from "../../mocks/boardgames/boardgamesMocks.js";
import BoardgamesList from "../../components/CollectionList/BoardgamesList.js";

const CollectionPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadBoardgamesActionCreator(boardGamesMock));
  }, [dispatch]);

  return (
    <>
      <CollectionPageStyled>
        <h2 className="collection-title">My collection</h2>
        <BoardgamesList />
      </CollectionPageStyled>
    </>
  );
};

export default CollectionPage;
