import LoaderStyled from "./LoaderStyled";

const Loader = (): React.ReactElement => {
  return (
    <>
      <LoaderStyled>
        <span className="loader" aria-label="loading spinner"></span>
        <span className="loading-text">Waiting for your turn...</span>
      </LoaderStyled>
    </>
  );
};

export default Loader;
