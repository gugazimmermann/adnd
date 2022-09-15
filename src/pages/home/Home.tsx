import { useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import LocalStorage from "../../api/local-storage";
import Dices from "../../helpers/dices";
import { AttributesType } from '../../ts/types';
import { ATTRIBUTE, DICES } from '../../ts/enums';
import { Button, Title } from "../../components";

export default function Home() {
  const navigate = useNavigate();

  const rowAttrs = useCallback(() => {
    const attrs: AttributesType[] = [];
    for (let i = 1; i <= 3; i += 1) {
      attrs.push({
        [ATTRIBUTE.STRENGTH]: Dices.Row(3, DICES.D6),
        [ATTRIBUTE.DEXTERITY]: Dices.Row(3, DICES.D6),
        [ATTRIBUTE.CONSTITUTION]: Dices.Row(3, DICES.D6),
        [ATTRIBUTE.INTELLIGENCE]: Dices.Row(3, DICES.D6),
        [ATTRIBUTE.WISDOM]: Dices.Row(3, DICES.D6),
        [ATTRIBUTE.CHARISMA]: Dices.Row(3, DICES.D6),
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
