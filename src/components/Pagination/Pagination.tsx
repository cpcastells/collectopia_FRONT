import Button from "../Button/Button";
import loadMore from "../../assets/icons/button-load-more.svg";
interface PaginationProps {
  onClick: () => void;
}

const Pagination = ({ onClick }: PaginationProps): React.ReactElement => {
  return (
    <Button
      url={loadMore}
      altText="load more button"
      height="89"
      width="121"
      className="collection-load"
      onClick={onClick}
    />
  );
};

export default Pagination;
