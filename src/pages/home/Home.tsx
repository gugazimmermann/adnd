import { useOutletContext } from "react-router-dom";
import { CognitoUserType } from "../../interfaces/helpers";

export default function Home() {
  const { user }: { user: CognitoUserType } = useOutletContext();

  return (
    <section>{user && <pre>{JSON.stringify(user, undefined, 2)}</pre>}</section>
  );
}
