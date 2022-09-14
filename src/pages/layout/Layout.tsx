import { useCallback, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Auth from "../../api/auth";
import { Loading, Nav } from "../../components";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

export default function Layout() {
  const navigate = useNavigate();
  const [user, setUser] = useState<CognitoUserAttribute>();
  const [loading, setLoading] = useState(false);

  const loadUser = useCallback(
    async (force?: boolean) => {
      if (!user || force === true) {
        setLoading(true);
        try {
          const attributes = await Auth.GetUser();
          console.log(attributes);
          setUser(attributes);
          setLoading(false);
        } catch (error) {
          navigate("/");
        }
      }
    },
    [navigate, user]
  );

  const handleSignOut = async () => {
    await Auth.SignOut();
    navigate("/");
  };

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <main className="layout flex flex-col h-screen justify-between container mx-auto max-w-5xl">
      {loading && <Loading />}
      <Nav handleSignOut={handleSignOut} />
      <div className="layout mb-auto p-4">
        <Outlet context={{ user, loadUser, setLoading }} />
      </div>
      {/* <footer className="h-10 bg-blue-500">Footer</footer> */}
    </main>
  );
}
