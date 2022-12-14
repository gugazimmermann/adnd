import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Auth from "../../api/auth";
import { Alert, Button, Form, Input, Title } from "../../components";
import { isValidEmail } from "../../helpers";
import { ALERT } from "../../ts/enums";
import { AlertType, useOutletContextProfileProps } from '../../ts/types';

export default function Profile() {
  const { user, loadUser, setLoading } = useOutletContext<useOutletContextProfileProps>();
  const [alert, setAlert] = useState<AlertType>({
    type: undefined,
    text: undefined,
  });
  const [showCode, setShowCode] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  useEffect(() => {
    user && setEmail(user?.email);
  }, [user]);

  const loading = () => {
    setAlert({
      type: undefined,
      text: undefined,
    });
    setLoading(true);
  };

  const handleChangeEmail = async () => {
    loading();
    try {
      await Auth.ChangeEmail(email);
      setShowCode(true);
    } catch (error: any) {
      setAlert({ type: ALERT.ERROR, text: error.message });
    }
    setLoading(false);
  };

  const handleVerifyCode = async () => {
    loading();
    try {
      await Auth.ConfirmChangeEmail(code);
      loadUser(true);
      setShowCode(false);
      setAlert({ type: ALERT.SUCCESS, text: "Email changed successfully!" });
    } catch (error: any) {
      setAlert({ type: ALERT.ERROR, text: error.message });
    }
    setLoading(false);
  };

  const handlePassword = async () => {
    loading();
    try {
      await Auth.ChangePassword(currentPassword, newPassword);
      setAlert({ type: ALERT.SUCCESS, text: "Password changed successfully!" });
    } catch (error: any) {
      setAlert({ type: ALERT.ERROR, text: error.message });
    }
    setLoading(false);
  };

  const disabledEmail = () =>
    !email || email === user.email || !isValidEmail(email);

  const disabledCode = () => !code || code.length > 6;

  const disabledPassword = () =>
    !currentPassword ||
    newPassword !== repeatPassword ||
    newPassword.length < 8;

  const renderEmail = () => (
    <>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        handler={setEmail}
      />
      <Button
        text="Change Email"
        disabled={disabledEmail()}
        handler={() => handleChangeEmail()}
      />
    </>
  );

  const renderCode = () => (
    <>
      <Title
        text={`Please, check your email and send the code.`}
        className="text-amber-500 text-sm"
      />
      <Input type="text" placeholder="Code" value={code} handler={setCode} />
      <Button
        text="Send Code"
        disabled={disabledCode()}
        handler={() => handleVerifyCode()}
      />
    </>
  );

  const renderChangeEmail = () => (
    <Form>
      <div className="mb-4 w-full flex flex-col gap-4 justify-center">
        {!showCode ? renderEmail() : renderCode()}
      </div>
    </Form>
  );

  const renderChangePassword = () => (
    <Form>
      <div className="mb-4 w-full flex flex-col gap-4 justify-center">
        <Input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          handler={setCurrentPassword}
        />
        <Input
          type="password"
          placeholder="New Password"
          value={newPassword}
          handler={setNewPassword}
          showTooltip
        />
        <Input
          type="password"
          placeholder="Repeat New Password"
          value={repeatPassword}
          handler={setRepeatPassword}
        />
        <Button
          text="Change Password"
          disabled={disabledPassword()}
          handler={() => handlePassword()}
        />
      </div>
    </Form>
  );

  return (
    <section>
      <Title text="Profile" back="/home" />
      <Alert type={alert?.type} text={alert?.text} />
      {renderChangeEmail()}
      {renderChangePassword()}
    </section>
  );
}
