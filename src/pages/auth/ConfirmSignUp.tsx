import { useEffect, useState } from "react";
import { useOutletContext, useLocation } from "react-router-dom";
import { isValidEmail } from "../../helpers";
import { Button, Input, Link } from "../../components";
import { StateType, useOutletContextProps, AlertType } from "../../interfaces/helpers";

export default function ConfirmSignUp() {
  const location = useLocation();
  const state = location?.state as StateType;
  const {
    setAlert,
    setTitle,
    resendConfirmationCode,
    confirmSignUp,
  }: useOutletContextProps = useOutletContext();
  const [email, setEmail] = useState(state?.email || "");
  const [code, setCode] = useState("");

  useEffect(() => setAlert(state.alert as AlertType), [state?.alert, setAlert]);

  useEffect(() => setTitle("confirm registration"), [setTitle]);

  const disabled = () =>
    email === "" || !isValidEmail(email) || code === "" || code.length < 6;

  return (
    <form>
      <div className="mb-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          handler={setEmail}
        />
      </div>
      <div className="mb-4">
        <Input type="text" placeholder="Code" value={code} handler={setCode} />
      </div>
      <div className="mb-4 flex justify-end duration-200 transition ease-in-out">
        <button type="button" onClick={() => resendConfirmationCode(email)}>
          Resend Confirmation Code
        </button>
      </div>
      <div className="mb-4">
        <Button
          text="Confim"
          disabled={disabled()}
          handler={() => confirmSignUp(email, code)}
        />
      </div>
      <div className="w-full text-center mt-4">
        <Link to="/" text="Back to Sign In" className="text-xl font-bold" />
      </div>
    </form>
  );
}
