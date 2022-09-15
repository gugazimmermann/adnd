import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import LocalStorage from "../../api/local-storage";
import { AttributesType } from "../../ts/types";
import { ATTRIBUTE } from "../../ts/enums";
import { Button, Title } from "../../components";
import AttributesCard from "./AttributesCard";


export default function Attributes() {
  const navigate = useNavigate();
  const [attributes, setAttributes] = useState<AttributesType[]>([]);
  const [selectedSet, setSelectedSet] = useState<number>(99);
  const [selectedAttributes, setSelectedAttributes] = useState<AttributesType>();

  useEffect(() => {
    const getAttributes = LocalStorage.GetItem("attributes", true);
    if (!getAttributes) navigate("/home");
    const getAttr = getAttributes as AttributesType[];
    if (process.env.NODE_ENV === "development") {
      const cheat = {
        [ATTRIBUTE.STRENGTH]: 18,
        [ATTRIBUTE.DEXTERITY]: 18,
        [ATTRIBUTE.CONSTITUTION]: 18,
        [ATTRIBUTE.INTELLIGENCE]: 18,
        [ATTRIBUTE.WISDOM]: 18,
        [ATTRIBUTE.CHARISMA]: 18,
      };
      getAttr.push(cheat);
    }
    setAttributes(getAttr);
  }, [navigate]);

  const handleSelect = (i: number) => {
    setSelectedSet(i);
    setSelectedAttributes(attributes[i]);
    LocalStorage.Save("char", { attributes: attributes[i] }, true);
  };

  return (
    <section className="relative">
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
        {attributes.map((attr, i) => (
          <AttributesCard key={uuidv4()} attributes={attr} index={i} selectedSet={selectedSet} handleSelect={handleSelect} />
        ))}
      </div>
      <div className="text-center mt-4 mb-4">
        <Button
          text="Continue to Races"
          handler={() => navigate("/character-creation/races")}
          disabled={!selectedAttributes}
        />
      </div>
    </section>
  );
}
