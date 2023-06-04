import { SVGProps } from "react";
import { useAppSelector } from "../../store";
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

const Feedback = (): React.ReactElement => {
  const { title, firstMessage, secondMessage, icon, isError, isSuccess } =
    useAppSelector((state) => state.uiStore.modalInfo);

  let IconComponent!: React.FunctionComponent<SVGProps<SVGSVGElement>>;

  switch (icon) {
    case "delete success":
      IconComponent = SuccessDelete;
      break;
    case "delete failed":
      IconComponent = FailDelete;
      break;
    case "edit success":
      IconComponent = SuccessEdit;
      break;
    case "edit failed":
      IconComponent = FailEdit;
      break;
    case "add success":
      IconComponent = SuccessAdd;
      break;
    case "add failed":
      IconComponent = FailedAdd;
      break;
    case "credentials success":
      IconComponent = SuccessCredentials;
      break;
    case "credentials failed":
      IconComponent = FailedCredentials;
  }

  return (
    <FeedbackStyled>
      <div className="modal">
        <button className="modal__exit">
          {isSuccess && <img src={successExit} alt="exit button" />}
          {isError && <img src={failedExit} alt="exit button" />}
        </button>
        <div className="modal__info">
          <h4 className="modal__title">{title}</h4>
          {icon && <IconComponent className="modal__icon" />}
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
