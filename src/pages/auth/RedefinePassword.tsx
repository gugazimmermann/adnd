import { useEffect, useState } from "react";
import { useOutletContext, useLocation } from "react-router-dom";
import { isValidEmail } from "../../helpers";
import { Button, Input, Link } from "../../components";
import { AlertType, StateType, useOutletContextProps } from "../../interfaces";

export default function RedefinePassword() {
  const location = useLocation();
  const state = location?.state as StateType;
  const { setAlert, setTitle, redefinePassword }: useOutletContextProps = useOutletContext();
  const [email, setEmail] = useState(state?.email || "");
  const [code, setCode] = useState("");
  const [pwd, setPwd] = useState("");
  const [repeat, setRepeat] = useState("");

  useEffect(
    () => setAlert(state.alert as AlertType),
    [state?.alert, setAlert]
  );

  useEffect(() => setTitle("redefine password"), [setTitle]);

  const disabled = () =>
    email === "" ||
    !isValidEmail(email) ||
    code === "" ||
    code.length < 6 ||
    pwd === "" ||
    repeat === "" ||
    pwd !== repeat;

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
      <div className="mb-4">
        <Input
          type="password"
          placeholder="Password"
          value={pwd}
          handler={setPwd}
          showTooltip
        />
      </div>
      <div className="mb-4">
        <Input
          type="password"
          placeholder="Repeat Password"
          value={repeat}
          handler={setRepeat}
        />
      </div>
      <div className="mb-4">
        <Button
          text="Redefine Password"
          disabled={disabled()}
          handler={() => redefinePassword(email, code, pwd)}
          full
        />
      </div>
      <div className="w-full text-center mt-4">
        <Link to="/" text="Back to Sign In" className="text-xl font-bold" />
      </div>
    </form>
  );
}
