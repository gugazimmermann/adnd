import { useEffect, useState, useCallback } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import LocalStorage from "../../api/local-storage";
import racesContent from "../../content/races";
import {
  CharacterCreationContextType,
  CharType,
  ContentRaceType,
} from "../../ts/types";
import RacesCard from "./RacesCard";

export default function Races() {
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
  const [selectedRace, setSelectedRace] = useState<number>(99);
  const [race, setRace] = useState<ContentRaceType>();

  const handleSelectRace = (i: number) => {
    setSelectedRace(i);
    setRace(racesContent[i]);
    LocalStorage.Save("char", { ...character, race: racesContent[i].name }, true);
  };

  const setLayoutContent = useCallback(() => {
    setTitle("Races");
    setBack("/character-creation/attributes");
    setDescription(
      "Now you need to choose your Character's Race, choose carefully, as this will reflect on the Class you will have to choose.\n\nEach race has different characteristics, far beyond appearance, they have natural advantages and disadvantages and can change attributes."
    );
    setButtonText("Continue to Classes");
    setButtonDisabled(!race);
    setForward("/character-creation/classes");
  }, [
    race,
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
        {racesContent.map((race, index) => (
          <RacesCard
            key={race.name}
            race={race}
            index={index}
            selectedRace={selectedRace}
            handleSelectRace={handleSelectRace}
            attributes={character?.attributes}
          />
        ))}
      </div>
    </>
  );
}
