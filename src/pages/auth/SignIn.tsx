import { useEffect, useState } from "react";
import { useOutletContext, useLocation } from "react-router-dom";
import { isValidEmail } from "../../helpers";
import { AlertType, StateType, useOutletContextProps } from "../../ts/types";
import { Button, Input, Link, RememberMe } from "../../components";

export default function SignIn() {
  const location = useLocation();
  const state = location?.state as StateType;
  const { setAlert, setTitle, signIn }: useOutletContextProps =
    useOutletContext();
  const [email, setEmail] = useState(state?.email || "");
  const [pwd, setPwd] = useState("");
  const [remember, setRemember] = useState(false);

  useEffect(
    () => setAlert((state?.alert as AlertType) || {}),
    [state?.alert, setAlert]
  );

  useEffect(() => setTitle("sign in"), [setTitle]);

  const disabled = () => email === "" || !isValidEmail(email) || pwd === "";

  return (
    <form>
      <p className="text-justify font-bold italic mb-2">
        Warning: This app was made for those who like to read. It contains a lot
        of information about how to play and the game itself is fully written,
        don't expect graphics or animations.
      </p>
      <div className="mb-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          handler={setEmail}
        />
      </div>
      <div className="mb-4">
        <Input
          type="password"
          placeholder="Password"
          value={pwd}
          handler={setPwd}
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <RememberMe remember={remember} setRemember={setRemember} />
        <Link to="/forgorpassword" text="Forgot Password?" />
      </div>
      <div className="mb-4">
        <Button
          text="Sign In"
          disabled={disabled()}
          handler={() => signIn(email, pwd, remember)}
          full
        />
      </div>
      <div className="w-full text-center mt-4">
        <Link
          to="/signup"
          text="Not registered?"
          className="text-xl font-bold"
        />
      </div>
    </form>
  );
}
