import { useEffect, useState, useCallback } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import LocalStorage from "../../api/local-storage";
import classesContent from "../../content/classes";
import {
  CharacterCreationContextType,
  CharType,
  ContentClassesType
} from "../../ts/types";
import ClassesCard from "./ClassesCard";

export default function Classes() {
  const navigate = useNavigate();
  const {
    setTitle,
    setBack,
    setDescription,
    setButtonText,
    setButtonDisabled,
    setForward,
  } = useOutletContext<CharacterCreationContextType>();
  const [character, setCharacter] = useState<CharType>();
  const [selectedCharClass, setSelectedCharClass] = useState<number>(99);
  const [charClass, setCharClass] = useState<ContentClassesType>();

  const handleSelectCharClass = (i: number) => {
    setSelectedCharClass(i);
    setCharClass(classesContent[i]);
    LocalStorage.Save("char", { ...character, class: classesContent[i].name }, true);
  };

  const setLayoutContent = useCallback(() => {
    setTitle("Classes");
    setBack("/character-creation/races");
    setDescription(
      "Now you can choose your character's class, choose it calmly and patiently, this is the main characteristic of your character.\n\nClasses are divided by types: **Warrior**, **Wizard**, **Priest** or **Rogue**. Read carefully each type to be able to better choose the Class you want to play.\n\nNot every class will be available to you, they have attribute restrictions, as well as races restrictions. If you want you can go back to previous screens and choose another Attribute Set or another Race."
    );
    setButtonText("Continue to Alignments");
    setButtonDisabled(!charClass);
    setForward("/character-creation/alignments");
  }, [
    charClass,
    setBack,
    setButtonDisabled,
    setButtonText,
    setDescription,
    setForward,
    setTitle,
  ]);

  const getCharacter = useCallback(() => {
    const char = LocalStorage.GetItem("char", true);
    if (!char) navigate("/home");
    setCharacter(char as CharType);
  }, [navigate]);

  useEffect(() => {
    setLayoutContent();
    getCharacter();
  }, [getCharacter, setLayoutContent]);

  return (
    <>
      <div className="grid sm:grid-cols-1 gap-4 mx-2">
        {classesContent.map((c, i) => (
          <ClassesCard
            key={c.name}
            charClass={c}
            index={i}
            selectedCharClass={selectedCharClass}
            handleSelectCharClass={handleSelectCharClass}
          />
        ))}
      </div>
    </>
  );
}
