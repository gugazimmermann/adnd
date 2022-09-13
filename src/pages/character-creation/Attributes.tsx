import { useEffect, useState, Fragment } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Title } from "../../components";
import Dices from "../../helpers/dices";
import { AttributesType, AttributeType } from "../../interfaces/helpers";

export default function Attributes() {
  const navigate = useNavigate();
  const [attributes, setAttributes] = useState<AttributesType[]>([]);
  const [selectedAttribute, setSelectedAttribute] = useState<AttributesType>();

  useEffect(() => {
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
    setAttributes(attrs);
  }, []);

  const attribute = (attr: AttributesType, a: AttributeType, i: number) => (
    <div key={a} className="grid grid-cols-12">
      <dt className="col-span-8 p-2">{a}</dt>
      <dd className="col-span-4 p-2 text-right flex justify-end items-center gap-2 -mt-1">
        {attr[a]}
        <button type="button" className="cursor-pointer mt-1">
          <i className="bx bx-help-circle" />
        </button>
      </dd>
    </div>
  );

  return (
    <section>
      <Title
        text="Attributes"
        className="font-bold text-xl text-center"
        back="/home"
      />
      <p className="mb-4 mt-4">
        You need to choose one of the thre attributes sets for your character.
        Attributes can be changed by Race, and will reflect when select Class.
      </p>
      <p className="mb-4">
        Each attribute has it's table, which will be used during the game
        depending on the choices made by you.
      </p>
      <div className="grid sm:grid-cols-3 gap-4 mx-8">
        {attributes.map((attr, k) => (
          <dl key={k} className="border bg-white dark:bg-stone-700 ">
            {Object.keys(attr).map((a, i) =>
              attribute(attr, a as AttributeType, i)
            )}
          </dl>
        ))}
      </div>
      <div className="text-center mt-4 mb-4">
        <Button
          text="Continue to Races"
          handler={() => navigate("/character-creation/atrributes")}
        />
      </div>
    </section>
  );
}
