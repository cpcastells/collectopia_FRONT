import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/index.js";
import CollectionPageStyled from "./CollectionPageStyled.js";
import {
  loadAdditionalStackActionCreator,
  loadBoardgamesActionCreator,
  updateTotalBoardgamesActionCreator,
} from "../../store/boardgames/boardgameSlice.js";
import BoardgamesList from "../../components/BoardgamesList/BoardgamesList.js";
import useBoardgames from "../../hooks/useBoardgames/useBoardgames.js";
import Pagination from "../../components/Pagination/Pagination.js";
import Filter from "../../components/Filter/Filter.js";

const CollectionPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { boardgames, totalBoardgames } = useAppSelector(
    (state) => state.boardgameStore
  );
  const { filter } = useAppSelector((state) => state.uiStore);
  const { getBoardgames } = useBoardgames();

  useEffect(() => {
    (async () => {
      const response = await getBoardgames(filter);

      if (response) {
        const { boardgames, totalBoardgames } = response;

        dispatch(updateTotalBoardgamesActionCreator(totalBoardgames));

        dispatch(loadBoardgamesActionCreator(boardgames));

        if (boardgames.length > 0) {
          const firstImage = boardgames[0].image;

          const preconnectElement = document.createElement("link");
          preconnectElement.rel = "preload";
          preconnectElement.as = "image";
          preconnectElement.href = firstImage;

          const parent = document.head;
          const firstChild = document.head.firstChild;
          parent.insertBefore(preconnectElement, firstChild);
        }
      }
    })();
  }, [dispatch, filter, getBoardgames]);

  const handleOnLoadMore = () => {
    dispatch(loadAdditionalStackActionCreator());
  };

  return (
    <CollectionPageStyled>
      <h2 className="collection-title">My collection</h2>
      <Filter />
      <BoardgamesList boardgames={boardgames} />
      {boardgames.length < totalBoardgames && (
        <Pagination onClick={handleOnLoadMore} />
      )}
    </CollectionPageStyled>
  );
};

export default CollectionPage;
