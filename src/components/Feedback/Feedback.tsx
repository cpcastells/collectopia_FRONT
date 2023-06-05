import { SVGProps } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import successExit from "../../assets/icons/exit-modal-success.svg";
import failedExit from "../../assets/icons/exit-modal-fail.svg";
import FeedbackStyled from "./FeedbackStyled";
import { ReactComponent as FailDelete } from "../../assets/icons/failed-delete.svg";
import { ReactComponent as SuccessDelete } from "../../assets/icons/success-delete.svg";
import { ReactComponent as FailEdit } from "../../assets/icons/edit-failed.svg";
import { ReactComponent as SuccessEdit } from "../../assets/icons/edit-success.svg";
import { ReactComponent as FailedAdd } from "../../assets/icons/add-failed.svg";
import { ReactComponent as SuccessAdd } from "../../assets/icons/add-success.svg";
import { ReactComponent as FailedCredentials } from "../../assets/icons/credentials-failed.svg";
import { ReactComponent as SuccessCredentials } from "../../assets/icons/credentials-success.svg";
import { hideModalActionCreator } from "../../store/ui/uiSlice";

const Feedback = (): React.ReactElement => {
  const { title, firstMessage, secondMessage, icon, isError, isSuccess } =
    useAppSelector((state) => state.uiStore.modalData);
  const dispatch = useAppDispatch();

  let IconComponent!: React.FunctionComponent<SVGProps<SVGSVGElement>>;
  let ariaText = "";
  switch (icon) {
    case "delete success":
      IconComponent = SuccessDelete;
      ariaText = "success delete";
      break;
    case "delete failed":
      IconComponent = FailDelete;
      ariaText = "failed delete";
      break;
    case "edit success":
      IconComponent = SuccessEdit;
      ariaText = "success edit";
      break;
    case "edit failed":
      IconComponent = FailEdit;
      ariaText = "failed edit";
      break;
    case "add success":
      IconComponent = SuccessAdd;
      ariaText = "success add";
      break;
    case "add failed":
      IconComponent = FailedAdd;
      ariaText = "failed add";
      break;
    case "credentials success":
      IconComponent = SuccessCredentials;
      ariaText = "success credentials";
      break;
    case "credentials failed":
      IconComponent = FailedCredentials;
      ariaText = "failed credentials";
      break;
    case "loading failed":
      IconComponent = FailedAdd;
      ariaText = "failed loading";
      break;
  }

  const handleOnClose = (): void => {
    dispatch(hideModalActionCreator());
  };

  return (
    <FeedbackStyled>
      <div className="modal">
        <button className="modal__exit" onClick={handleOnClose}>
          {isSuccess && <img src={successExit} alt="exit button" />}
          {isError && <img src={failedExit} alt="exit button" />}
        </button>
        <div className="modal__info">
          <h4 className="modal__title">{title}</h4>
          {icon && (
            <IconComponent className="modal__icon" aria-label={ariaText} />
          )}
          <span className="modal__first-message">{firstMessage}</span>
          <span className={`modal__second-message ${isError && "error"}`}>
            {secondMessage}
          </span>
        </div>
      </div>
    </FeedbackStyled>
  );
};

export default Feedback;
