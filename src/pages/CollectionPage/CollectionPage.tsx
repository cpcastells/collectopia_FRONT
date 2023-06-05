import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/index.js";
import CollectionPageStyled from "./CollectionPageStyled.js";
import { loadBoardgamesActionCreator } from "../../store/boardgames/boardgameSlice.js";
import BoardgamesList from "../../components/BoardgamesList/BoardgamesList.js";
import useBoardgames from "../../hooks/useBoardgames/useBoardgames.js";

const CollectionPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const boardgames = useAppSelector((state) => state.boardgameStore);
  const { getBoardgames } = useBoardgames();

  useEffect(() => {
    (async () => {
      const boardgames = await getBoardgames();
      if (boardgames) {
        dispatch(loadBoardgamesActionCreator(boardgames));
      }
    })();
  }, [dispatch, getBoardgames]);

  return (
    <CollectionPageStyled>
      <h2 className="collection-title">My collection</h2>
      <BoardgamesList boardgames={boardgames} />
    </CollectionPageStyled>
  );
};

export default CollectionPage;
