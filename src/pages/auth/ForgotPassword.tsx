import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { isValidEmail } from "../../helpers";
import { useOutletContextProps } from "../../ts/types";
import { Button, Input, Link } from "../../components";

export default function ForgorPassword() {
  const { setTitle, sendForgotPasswordCode }: useOutletContextProps = useOutletContext();
  const [email, setEmail] = useState("");

  useEffect(() => setTitle("forgot password"), [setTitle]);

  const disabled = () => email === "" || !isValidEmail(email);

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
        <Button
          text="Send Code"
          disabled={disabled()}
          handler={() => sendForgotPasswordCode(email)}
          full
        />
      </div>
      <div className="w-full text-center mt-4">
        <Link to="/" text="Back to Sign In" className="text-xl font-bold" />
      </div>
    </form>
  );
}
