import { ReactElement } from "react";
import { AlertType } from "../interfaces/helpers";

const Alert = ({ type, text }: AlertType): ReactElement | null => {
  if (text) {
    return (
      <div
        className={`my-2 text-center font-bold
      ${!text && "hidden"} ${
          type === "error"
            ? "text-orange-600"
            : type === "info"
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
