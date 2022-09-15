import { ReactElement, useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  AbilityAdjustmentsType,
  AttributesType,
  CharType,
  ContentRaceType,
} from "../../ts/types";
import { CapitalizeFirstLetter, ShowList } from "../../helpers";
import RacesAttributesModal from "./RacesAttributesModal";

type RacesCardProps = {
  race: ContentRaceType;
  index: number;
  character?: CharType;
  selectedRace: number;
  handleSelectRace: (i: number) => void;
};

const STORAGE_PUBLIC = process.env.REACT_APP_STORAGE_PUBLIC || "";

export default function RacesCard({
  race,
  index,
  character,
  selectedRace,
  handleSelectRace,
}: RacesCardProps): ReactElement {
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [selectedAdjustments, setSelectedAdjustments] = useState<
    AbilityAdjustmentsType[]
  >([]);
  const [showAttrModal, setShowAttrModal] = useState<boolean>(false);

  const handleAttrAdj = (
    abilityAdjustments: AbilityAdjustmentsType[]
  ): string => {
    let adj = abilityAdjustments.map((a) => {
      return `${CapitalizeFirstLetter(a.name)}: ${a.value}`;
    });
    return adj.join(", ");
  };

  const handleAdjustments = (abilityAdjustments: AbilityAdjustmentsType[]) => {
    setSelectedAdjustments(abilityAdjustments);
    setShowAttrModal(true);
  };

  return (
    <div className="border bg-white dark:bg-stone-700 rounded-md shadow-md p-2">
      <div className="flex flex-row items-start">
        <img
          src={`${STORAGE_PUBLIC}/portraits/${race.portait}.png`}
          alt={`${race.name} portrait`}
          className="w-2/12 mr-2 object-contain"
        />
        <div className="w-10/12 flex flex-col gap-2 items-start">
          <h2 className="font-bold text-lg">{race.name}</h2>
          <p className="text-sm">
            <span className="font-bold">Description</span>:{" "}
            <button
              type="button"
              className="cursor-pointer underline"
              onClick={() => setShowDescription(!showDescription)}
            >
              {!showDescription ? "Show" : "Hide"}
            </button>
          </p>
          {showDescription && <ReactMarkdown>{race.description}</ReactMarkdown>}
          {!!race["ability-adjustments"].length && (
            <p className="text-sm">
              <span className="font-bold">Attributes Adjustments</span>:{" "}
              <button
                type="button"
                className="cursor-pointer mt-1"
                onClick={() => handleAdjustments(race["ability-adjustments"])}
              >
                <i className="bx bx-help-circle" />
              </button>{" "}
              {handleAttrAdj(race["ability-adjustments"])}
            </p>
          )}
          <p className="text-sm">
            <span className="font-bold">Clases</span>: {ShowList(race.classes)}
          </p>
          <p className="text-sm">
            <span className="font-bold">Languages</span>:{" "}
            {ShowList(race.languages)}
          </p>
          {!!race.advantages.length && (
            <p className="text-sm">
              <span className="font-bold">Advantages</span>:{" "}
              {ShowList(race.advantages)}
            </p>
          )}
          {!!race.disadvantages.length && (
            <p className="text-sm">
              <span className="font-bold">Disadvantages</span>:{" "}
              {ShowList(race.disadvantages)}
            </p>
          )}
          {!!race["favorite-enemies"].length && (
            <p className="text-sm">
              <span className="font-bold">Favorite Enemies</span>:{" "}
              {ShowList(race["favorite-enemies"])}
            </p>
          )}
          <div className="form-group form-check flex flex-row justify-center my-4">
            <input
              type="radio"
              name="attributesSet"
              value={index}
              checked={index === selectedRace}
              onChange={(e) => handleSelectRace(+e.target.value)}
              className="form-radio h-4 w-4 rounded-sm text-red-600 bg-stone-100 border border-stone-400 focus:outline-none focus:ring-offset-0 focus:ring-0 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              className="form-radio-label inline-block font-bold"
              htmlFor="attributesSet"
            >
              Play as a {race.name}
            </label>
          </div>
        </div>
      </div>
      {character && showAttrModal && (
        <RacesAttributesModal
          attributes={
            character?.attributes
              ? JSON.parse(JSON.stringify(character.attributes))
              : ({} as AttributesType)
          }
          adjustments={selectedAdjustments}
          show={showAttrModal}
          setShow={setShowAttrModal}
        />
      )}
    </div>
  );
}
