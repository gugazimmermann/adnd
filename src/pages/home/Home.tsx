import { useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import LocalStorage from "../../api/local-storage";
import { Button, Title } from "../../components";
import Dices from "../../helpers/dices";
import { AttributesType } from "../../interfaces";

export default function Home() {
  const navigate = useNavigate();

  const rowAttrs = useCallback(() => {
    const attrs: AttributesType[] = [];
    for (let i = 1; i <= 3; i += 1) {
      attrs.push({
        Strength: Dices.Row(3, "d6"),
        Dexterity: Dices.Row(3, "d6"),
        Constitution: Dices.Row(3, "d6"),
        Intelligence: Dices.Row(3, "d6"),
        Wisdom: Dices.Row(3, "d6"),
        Charisma: Dices.Row(3, "d6"),
      });
    }
    LocalStorage.Save('attributes', attrs, true);
  }, [])

  useEffect(() => {
    const attrsExists = LocalStorage.GetItem("attributes", true);
    if (!attrsExists) rowAttrs()
  }, [rowAttrs]);

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
        <Button text="Character Creation" handler={() => navigate("/character-creation/attributes")} />
      </div>
    </section>
  );
}
