import { useCallback, useEffect, useState } from "react";
import LocalStorage from "../../api/local-storage";
import { ATTRIBUTE } from "../../ts/enums";
import { CharType } from "../../ts/types";
import { Button, Title } from "../../components";
import AttributesCard from "./AttributesCard";
import races from "../../content/races";
import { CapitalizeFirstLetter } from "../../helpers/general";

type AttributesModalProps = {
  show: boolean;
  setShow: (show: boolean) => void;
};

const CharacterModal = ({ show, setShow }: AttributesModalProps) => {
  const [character, setCharacter] = useState<CharType>();

  const getChar = useCallback(() => {
    const char = LocalStorage.GetItem("char", true) as CharType;
    if (char?.race) {
      const race = races.find((c) => c.name === char.race);
      if (race) {
        Object.keys(char.attributes).forEach((attr) => {
          const adj = race["ability-adjustments"][attr as ATTRIBUTE];
          if (adj)
            char.attributes[attr as ATTRIBUTE] =
              char.attributes[attr as ATTRIBUTE] + +adj;
        });
      }
    }
    setCharacter(char);
  }, []);

  useEffect(() => {
    getChar();
  }, [getChar]);

  return (
    <div
      className={`fixed z-40 inset-0 bg-gray-900 bg-opacity-80 ${
        show ? "flex" : "hidden"
      }`}
    >
      <div className="z-50 p-4 overflow-auto w-full">
        <div className="layout rounded-md shadow-md p-2 flex flex-col justify-start items-center">
          <Title
            text="Character Sheet"
            className="font-bold text-xl text-center mb-4"
          />
          {character?.attributes && (
            <div className="mb-4">
              <h2 className="text-center font-bold mb-2">Attributes</h2>
              <AttributesCard attributes={character.attributes} />
            </div>
          )}
          {character?.race && (
            <div className="mb-4">
              <h2>
                <span className="font-bold ">Race</span>:{" "}
                {CapitalizeFirstLetter(character?.race)}
              </h2>
            </div>
          )}
          <div className="my-4 w-6/12">
            <Button text="Close" handler={() => setShow(false)} full />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
