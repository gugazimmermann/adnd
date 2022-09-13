import { useNavigate } from "react-router-dom";
import { Button, Title } from "../../components";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section>
      <Title text="Welcome" className="font-bold text-xl text-center mb-4" />
      <p className="mb-4">
        This app uses an adaptation of Advanced Dungeons and Dragons second
        edition rules to play an adaptation of The Warlock of Firetop Mountain
        (Fighting Fantasy) story.
      </p>
      <p className="mb-4">
        First you must create your character, let's get started.
      </p>
      <div className="text-center">
        <Button text="Character Creation" handler={() => navigate("/character-creation/atrributes")} />
      </div>
    </section>
  );
}
