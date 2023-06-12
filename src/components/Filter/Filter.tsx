import useBoardgames from "../../hooks/useBoardgames/useBoardgames";
import { useAppDispatch } from "../../store";
import { loadBoardgamesActionCreator } from "../../store/boardgames/boardgameSlice";
import { addFilterActionCreator } from "../../store/ui/uiSlice";
import FilterStyled from "./FilterStyled";

interface FilterProps {
  setTotalBoardgames: (totalBoardgames: number) => void;
}

const Filter = ({ setTotalBoardgames }: FilterProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getBoardgames } = useBoardgames();

  const handleOnFilter = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const filter = event.target.value;
    dispatch(addFilterActionCreator(filter));

    const response = await getBoardgames(filter);
    if (response) {
      const { boardgames, totalBoardgames } = response;

      setTotalBoardgames(totalBoardgames);

      dispatch(loadBoardgamesActionCreator(boardgames));
    }
  };

  return (
    <FilterStyled className="filter">
      <select
        className="filter__select"
        aria-label="filter by category"
        onChange={handleOnFilter}
      >
        <option value="">Filter by Category</option>
        <option value="Eurogame">Eurogame</option>
        <option value="Filler">Filler</option>
        <option value="Legacy">Legacy</option>
        <option value="Party Game">Party Game</option>
        <option value="War Game">War Game</option>
        <option value="Card Game">Card Game</option>
        <option value="Cooperative">Cooperative</option>
        <option value="Role Playing">Role Playing</option>
        <option value="Abstract">Abstract</option>
      </select>
    </FilterStyled>
  );
};

export default Filter;
