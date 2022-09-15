import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LocalStorage from "../../api/local-storage";
import { CharType, ContentRaceType } from "../../ts/types";
import { Button, Title } from "../../components";
import contentJson from "../../content/races.json";
import RacesCard from "./RacesCard";

export default function Races() {
  const navigate = useNavigate();
  const [character, setCharacter] = useState<CharType>();
  const [races, setRaces] = useState<ContentRaceType[]>([]);
  const [selectedRace, setSelectedRace] = useState<number>(99);
  const [race, setRace] = useState<ContentRaceType>();

  const getChar = useCallback(() => {
    const char = LocalStorage.GetItem("char", true);
    if (!char) navigate("/home");
    setCharacter(char as CharType);
  }, [navigate]);

  useEffect(() => {
    setRaces(contentJson);
    getChar();
  }, [getChar]);

  const handleSelectRace = (i: number) => {
    setSelectedRace(i);
    setRace(races[i]);
    LocalStorage.Save("char", { ...character, race: races[i].name }, true);
  };

  return (
    <section className="relative">
      <Title
        text="Races"
        className="font-bold text-xl text-center"
        back="/character-creation/attributes"
      />
      <p className="mb-4 mt-4">
        Now you need to choose your Character's Race, choose carefully, as this
        will reflect on the Class you will have to choose.
      </p>
      <p className="mb-4">
        Each race has different characteristics, far beyond appearance, they
        have natural advantages and disadvantages and can change attributes.
      </p>
      <div className="grid sm:grid-cols-1 gap-4 mx-2">
        {races.map((race, index) => (
          <RacesCard
            key={race.name.toLocaleLowerCase()}
            race={race}
            index={index}
            selectedRace={selectedRace}
            handleSelectRace={handleSelectRace}
            character={character}
          />
        ))}
      </div>
      <div className="text-center mt-4 mb-4">
        <Button
          text="Continue to Classes"
          handler={() => navigate("/character-creation/classes")}
          disabled={!race}
        />
      </div>
    </section>
  );
}
