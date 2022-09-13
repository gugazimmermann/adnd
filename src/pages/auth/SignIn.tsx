import { useEffect, useState } from "react";
import { useOutletContext, useLocation } from 'react-router-dom';
import { isValidEmail } from "../../helpers";
import { Button, Input, Link, RememberMe } from "../../components";
import { AlertType, StateType, useOutletContextProps } from "../../interfaces/helpers";

export default function SignIn() {
  const location = useLocation();
  const state = location?.state as StateType;
  const { setAlert, setTitle, signIn }: useOutletContextProps = useOutletContext();
  const [email, setEmail] = useState(state?.email || "");
  const [pwd, setPwd] = useState("");
  const [remember, setRemember] = useState(false);

  useEffect(() => setAlert(state?.alert as AlertType || {}), [state?.alert, setAlert]);

  useEffect(() => setTitle("sign in"), [setTitle]);

  const disabled = () => email === "" || !isValidEmail(email) || pwd === "";

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
