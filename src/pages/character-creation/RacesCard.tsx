import { ReactElement, useState, useEffect, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import { ATTRIBUTE } from "../../ts/enums";
import {
  AdjustementsType,
  AttributesType,
  ContentRaceType,
} from "../../ts/types";
import { CapitalizeFirstLetter, ShowList } from "../../helpers";
import RacesAttributesModal from "./RacesAttributesModal";

type RacesCardProps = {
  race: ContentRaceType;
  index: number;
  attributes?: AttributesType;
  selectedRace: number;
  handleSelectRace: (i: number) => void;
};

const STORAGE_PUBLIC = process.env.REACT_APP_STORAGE_PUBLIC || "";

export default function RacesCard({
  race,
  index,
  attributes,
  selectedRace,
  handleSelectRace,
}: RacesCardProps): ReactElement {
  const [abilityAdjustments, setAbilityAdjustments] = useState<
    AdjustementsType[]
  >([]);
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [selectedAdjustments, setSelectedAdjustments] =
    useState<AdjustementsType[]>([]);
  const [showAttrModal, setShowAttrModal] = useState<boolean>(false);

  const handleAttrAdj = (abilityAdjustments: AdjustementsType[]): string => {
    let adj = abilityAdjustments.map(
      (a) =>
        `${CapitalizeFirstLetter(a.name)}: ${
          a.value > 0 ? "+" + a.value : a.value
        }`
    );
    return adj.join(", ");
  };

  const handleAdjustments = (abilityAdjustments: AdjustementsType[]) => {
    setSelectedAdjustments(abilityAdjustments);
    setShowAttrModal(true);
  };

  const handleRaceAbilityAdjustments = useCallback((): void => {
    const adjustments = Object.keys(race["ability-adjustments"])
      .map((attr) => {
        if (race["ability-adjustments"][attr as ATTRIBUTE] !== 0)
          return {
            name: attr,
            value: race["ability-adjustments"][attr as ATTRIBUTE],
          };
        else return null;
      })
      .filter((x) => x);
    setAbilityAdjustments(adjustments as AdjustementsType[]);
  }, [race]);

  useEffect(() => {
    handleRaceAbilityAdjustments();
  }, [handleRaceAbilityAdjustments]);

  return (
    <div className="border bg-white dark:bg-stone-700 rounded-md shadow-md p-2">
      <div className="flex flex-row items-start">
        <img
          src={`${STORAGE_PUBLIC}/portraits/${race.portrait}.png`}
          alt={`${race.name} portrait`}
          className="w-2/12 mr-2 object-contain rounded-xl shadow-md"
        />
        <div className="w-10/12 flex flex-col gap-2 items-start">
          <h2 className="font-bold text-lg">
            {CapitalizeFirstLetter(race.name)}
          </h2>
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
          {!!abilityAdjustments.length && (
            <p className="text-sm">
              <span className="font-bold">Attributes Adjustments</span>:{" "}
              <button
                type="button"
                className="cursor-pointer mt-1"
                onClick={() => handleAdjustments(abilityAdjustments)}
              >
                <i className="bx bx-help-circle" />
              </button>{" "}
              {handleAttrAdj(abilityAdjustments)}
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
              className={`form-radio-label inline-block font-bold uppercase ${
                index === selectedRace && "text-red-600"
              }`}
              htmlFor="attributesSet"
            >
              Play as a {race.name}
            </label>
          </div>
        </div>
      </div>
      {attributes && showAttrModal && (
        <RacesAttributesModal
          attributes={
            attributes
              ? JSON.parse(JSON.stringify(attributes))
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
