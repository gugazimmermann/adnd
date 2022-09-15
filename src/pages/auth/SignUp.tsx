import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { isValidEmail } from "../../helpers";
import { useOutletContextProps } from "../../ts/types";
import { Button, Input, Link } from "../../components";

export default function SignUp() {
  const { setAlert, setTitle, signUp }: useOutletContextProps = useOutletContext();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [repeat, setRepeat] = useState("");

  useEffect(() => setAlert({}), [setAlert]);

  useEffect(() => setTitle("sign up"), [setTitle]);

  const disabled = () =>
    email === "" ||
    !isValidEmail(email) ||
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
          placeholder="Repeat the Password"
          value={repeat}
          handler={setRepeat}
        />
      </div>
      <div className="mb-4">
        <Button
          text="Sign Up"
          disabled={disabled()}
          handler={() => signUp(email, pwd)}
          full
        />
      </div>
      <div className="w-full text-center mt-4">
        <Link to="/" text="Back to Sign In" className="text-xl font-bold" />
      </div>
    </form>
  );
}
