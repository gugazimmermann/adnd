import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Button, Title } from "../../components";
import { ContentRaceType } from "../../interfaces";
import contentJson from "../../content/races.json";
import { ShowList } from "../../helpers";

const STORAGE_PUBLIC = process.env.REACT_APP_STORAGE_PUBLIC || "";

export default function Races() {
  const navigate = useNavigate();
  const [races, setRaces] = useState<ContentRaceType[]>([]);
  const [selectedRace, setSelectedRace] = useState<number>(99);
  const [race, setRace] = useState<ContentRaceType>();

  useEffect(() => {
    setRaces(contentJson);
  }, []);

  const handleSelectRace = (i: number) => {
    setSelectedRace(i);
    setRace(races[i]);
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
        {races.map((r, i) => (
          <div
            key={uuidv4()}
            className="border bg-white dark:bg-stone-700 rounded-md shadow-md p-2"
          >
            <div className="flex flex-row items-start">
              <img
                src={`${STORAGE_PUBLIC}/portraits/${r.portait}.png`}
                alt={`${r.name} portrait`}
                className="w-2/12 mr-2 object-contain"
              />
              <div className="w-10/12 flex flex-col gap-2 items-start">
                  <h2 className="font-bold text-lg">{r.name}</h2>
                  <p className="text-sm">
                    <span className="font-bold">Description</span>: Click Here
                  </p>
                  <p className="text-sm">
                    <span className="font-bold">Clases</span>:{" "}
                    {ShowList(r.classes)}
                  </p>
                  <p className="text-sm">
                    <span className="font-bold">Languages</span>:{" "}
                    {ShowList(r.languages)}
                  </p>
                  {!!r.advantages.length && (
                    <p className="text-sm">
                      <span className="font-bold">Advantages</span>:{" "}
                      {ShowList(r.advantages)}
                    </p>
                  )}
                  {!!r.disadvantages.length && (
                    <p className="text-sm">
                      <span className="font-bold">Disadvantages</span>:{" "}
                      {ShowList(r.disadvantages)}
                    </p>
                  )}
                  {!!r["favorite-enemies"].length && (
                    <p className="text-sm">
                      <span className="font-bold">Favorite Enemies</span>:{" "}
                      {ShowList(r["favorite-enemies"])}
                    </p>
                  )}
                <div className="form-group form-check flex flex-row justify-center my-4">
                  <input
                    type="radio"
                    name="attributesSet"
                    value={i}
                    checked={i === selectedRace}
                    onChange={(e) => handleSelectRace(+e.target.value)}
                    className="form-radio h-4 w-4 rounded-sm text-red-600 bg-stone-100 border border-stone-400 focus:outline-none focus:ring-offset-0 focus:ring-0 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                  <label
                    className="form-radio-label inline-block"
                    htmlFor="attributesSet"
                  >
                    Play as a {r.name}
                  </label>
                </div>
              </div>
            </div>
          </div>
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
