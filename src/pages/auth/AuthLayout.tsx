import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Auth from "../../api/auth";
import { Alert, Loading, Theme, Title } from "../../components";
import { AlertType } from "../../interfaces";

export default function AuthLayout() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<AlertType>({
    type: undefined,
    text: undefined,
  });
  const [title, setTitle] = useState<string>("");

  const projectName = process.env.REACT_APP_TITLE || "AD&D Solo Adventure";

  const startLoading = () => {
    setLoading(true);
    setAlert({ type: undefined, text: undefined });
  };

  const stopLoading = () => {
    setLoading(false);
    setAlert({ type: undefined, text: undefined });
  };

  const getLanguage = () =>
    navigator.language ||
    (navigator.languages &&
      navigator.languages.length &&
      navigator.languages[0]) ||
    navigator.language ||
    "en";

  const signIn = async (email: string, pwd: string, remember: boolean) => {
    startLoading();
    try {
      await Auth.SignIn(email, pwd, remember);
      stopLoading();
      navigate("/home");
    } catch (err) {
      stopLoading();
      setAlert({ type: "error", text: "Sorry, Unable to login" });
    }
  };

  const sendForgotPasswordCode = async (email: string) => {
    startLoading();
    try {
      await Auth.ForgotPassword(email);
      stopLoading();
      navigate("/redefinepassword", {
        state: { email, alert: { type: "info", text: "Check your Email" } },
      });
    } catch (err) {
      stopLoading();
      setAlert({
        type: "error",
        text: "Unable to send code, email is correct?",
      });
    }
  };

  const redefinePassword = async (email: string, code: string, pwd: string) => {
    startLoading();
    try {
      await Auth.RedefinePassword(email, code, pwd);
      stopLoading();
      navigate("/", {
        state: {
          email,
          alert: { type: "success", text: "Password changed successfully!" },
        },
      });
    } catch (err) {
      stopLoading();
      setAlert({
        type: "error",
        text: "Unable to redifine password, email, code or new password are wrong!",
      });
    }
  };

  const signUp = async (email: string, pwd: string) => {
    startLoading();
    try {
      await Auth.SignUp(email, pwd, getLanguage());
      stopLoading();
      navigate("/confirmsignup", {
        state: { email, alert: { type: "info", text: "Check your Email" } },
      });
    } catch (err) {
      stopLoading();
      setAlert({
        type: "error",
        text: "Unable to Register, email, code or new password are wrong!",
      });
    }
  };

  const resendConfirmationCode = async (email: string) => {
    startLoading();
    try {
      await Auth.ResendConfirmationCode(email);
      stopLoading();
      navigate("/confirmsignup", {
        state: {
          email,
          alert: { type: "success", text: "Code Resent, Check your Email" },
        },
      });
    } catch (err) {
      stopLoading();
      setAlert({
        type: "error",
        text: "Unable to send code, email is correct?",
      });
    }
  };

  const confirmSignUp = async (email: string, code: string) => {
    startLoading();
    try {
      await Auth.ConfirmSignUp(email, code);
      stopLoading();
      navigate("/", {
        state: {
          email,
          alert: { type: "success", text: "Confirmation successful!" },
        },
      });
    } catch (err) {
      stopLoading();
      setAlert({
        type: "error",
        text: "Unable to confirm registration, email or code are wrong!",
      });
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);
      try {
        await Auth.GetUser();
        setLoading(false);
        navigate("/home");
      } catch (error) {
        setLoading(false);
      }
    };

    loadUser();
  }, [navigate]);

  return (
    <main className="h-screen mx-auto">
      {loading && <Loading />}
      <section className="container h-full fixed">
        <div className="relative h-full flex flex-col-reverse md:flex-row items-center justify-evenly">
          <div className="absolute top-2 right-2">
            <Theme />
          </div>
          <div className="w-10/12 md:w-6/12 lg:w-4/12 md:mb-0 flex justify-center items-center">
            <img
              src="/icon-192x192.png"
              alt="Logo"
              width={192}
              height={192}
            />
          </div>
          <div className="w-10/12 md:w-5/12 lg:w-4/12">
            <Title
              text={projectName}
              className="text-2xl font-bold text-center mb-4 text-red-600"
            />
            <Title
              text={title}
              className="text-xl font-bold text-center mb-4"
            />
            <Alert type={alert?.type} text={alert?.text} />
            <Outlet
              context={{
                setAlert,
                setTitle,
                signIn,
                sendForgotPasswordCode,
                redefinePassword,
                signUp,
                resendConfirmationCode,
                confirmSignUp,
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
