import Button from "../Button/Button";
import loadMore from "../../assets/icons/button-load-more.svg";

const Pagination = (): React.ReactElement => {
  return (
    <Button
      url={loadMore}
      altText="load more button"
      height="89"
      width="121"
      onClick={() => ({})}
      className="collection-load"
    />
  );
};

export default Pagination;
