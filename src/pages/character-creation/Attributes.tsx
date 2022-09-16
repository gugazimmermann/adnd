import { useEffect, useState, useCallback } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import LocalStorage from "../../api/local-storage";
import { AttributesType, CharacterCreationContextType } from "../../ts/types";
import { ATTRIBUTE } from "../../ts/enums";
import AttributesCard from "./AttributesCard";

export default function Attributes() {
  const navigate = useNavigate();
  const {
    setTitle,
    setBack,
    setDescription,
    setButtonText,
    setButtonDisabled,
    setForward,
  } = useOutletContext<CharacterCreationContextType>();
  const [attributes, setAttributes] = useState<AttributesType[]>([]);
  const [selectedSet, setSelectedSet] = useState<number>(99);
  const [selectedAttributes, setSelectedAttributes] =
    useState<AttributesType>();

  const handleSelect = (i: number) => {
    setSelectedSet(i);
    setSelectedAttributes(attributes[i]);
    LocalStorage.Save("char", { attributes: attributes[i] }, true);
  };

  const setLayoutContent = useCallback(() => {
    setTitle("Attributes");
    setBack("/home");
    setDescription(
      "You need to choose one of the thre attributes sets for your character.Attributes can be changed by Race, and will reflect when select Class.\n\nEach attribute has it's table, which will be used during the game depending on the choices made by you."
    );
    setButtonText("Continue to Races");
    setButtonDisabled(!selectedAttributes);
    setForward("/character-creation/races");
  }, [
    selectedAttributes,
    setBack,
    setButtonDisabled,
    setButtonText,
    setDescription,
    setForward,
    setTitle,
  ]);

  const getAttributes = useCallback(() => {
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
      if (getAttributes) getAttr.push(cheat);
    }
    setAttributes(getAttr);
  }, [navigate])

  useEffect(() => {
    setLayoutContent();
    getAttributes();
  }, [getAttributes, setLayoutContent]);

  return (
    <div className="grid sm:grid-cols-3 gap-4 mx-8">
      {attributes.map((a, i) => (
        <AttributesCard
          key={uuidv4()}
          attributes={a}
          index={i}
          selectedSet={selectedSet}
          handleSelect={handleSelect}
        />
      ))}
    </div>
  );
}
