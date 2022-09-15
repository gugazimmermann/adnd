import { ReactElement } from "react";
import { ALERT } from "../ts/enums";
import { AlertType } from "../ts/types";

const Alert = ({ type, text }: AlertType): ReactElement | null => {
  if (text) {
    return (
      <div
        className={`my-2 text-center font-bold
      ${!text && "hidden"} ${
          type === ALERT.ERROR
            ? "text-orange-600"
            : type === ALERT.INFO
            ? "text-indigo-600"
            : "text-emerald-600"
        }`}
      >
        <p className="flex flex-row justify-center items-center">
          <i className="bx bx-error-circle text-xl mr-1" />
          {text}
        </p>
      </div>
    );
  }
  return null;
};

export default Alert;
