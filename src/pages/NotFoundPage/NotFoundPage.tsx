import errorIcon from "../../assets/icons/error-404.svg";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled className="not-found">
      <span className="not-found__first-comment">!Oops!</span>
      <span className="not-found__second-comment">Analysis-Paralysis</span>
      <img
        className="not-found__image"
        src={errorIcon}
        alt="page not found"
        width={151}
        height={196}
      />
      <h2 className="not-found__title">error 404</h2>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
