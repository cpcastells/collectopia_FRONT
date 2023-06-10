import FilterStyled from "./FilterStyled";

const Filter = (): React.ReactElement => {
  return (
    <FilterStyled className="filter">
      <select className="filter__select" aria-label="filter by category">
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
