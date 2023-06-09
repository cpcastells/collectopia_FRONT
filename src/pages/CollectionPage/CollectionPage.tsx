import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/index.js";
import CollectionPageStyled from "./CollectionPageStyled.js";
import { loadBoardgamesActionCreator } from "../../store/boardgames/boardgameSlice.js";
import BoardgamesList from "../../components/BoardgamesList/BoardgamesList.js";
import useBoardgames from "../../hooks/useBoardgames/useBoardgames.js";
import Pagination from "../../components/Pagination/Pagination.js";

const CollectionPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const boardgames = useAppSelector((state) => state.boardgameStore);
  const { getBoardgames } = useBoardgames();

  useEffect(() => {
    (async () => {
      const boardgames = await getBoardgames();
      if (boardgames) {
        dispatch(loadBoardgamesActionCreator(boardgames));

        const firstImage = boardgames[0].image;

        const preconnectElement = await document.createElement("link");
        preconnectElement.rel = "preload";
        preconnectElement.as = "image";
        preconnectElement.href = firstImage;

        const parent = document.head;
        const firstChild = document.head.firstChild;
        parent.insertBefore(preconnectElement, firstChild);
      }
    })();
  }, [dispatch, getBoardgames]);

  return (
    <CollectionPageStyled>
      <h2 className="collection-title">My collection</h2>
      <BoardgamesList boardgames={boardgames.boardgames} />
      <Pagination />
    </CollectionPageStyled>
  );
};

export default CollectionPage;
