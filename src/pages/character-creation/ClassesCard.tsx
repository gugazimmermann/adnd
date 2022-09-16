import { ReactElement, useCallback, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ContentClassesType, RequirementType } from "../../ts/types";
import { CapitalizeFirstLetter, ShowList } from "../../helpers";
import { ATTRIBUTE } from "../../ts/enums";

type ClassesCardProps = {
  charClass: ContentClassesType;
  index: number;
  selectedCharClass: number;
  handleSelectCharClass: (i: number) => void;
};

const STORAGE_PUBLIC = process.env.REACT_APP_STORAGE_PUBLIC || "";

export default function ClassesCard({
  charClass,
  index,
  selectedCharClass,
  handleSelectCharClass,
}: ClassesCardProps): ReactElement {
  const [requirement, setRequirement] = useState<RequirementType[]>([]);
  const [showDescription, setShowDescription] = useState<boolean>(false);

  const handleReq = (red: RequirementType[]): string => {
    let r = red.map(
      (a) =>
        `${CapitalizeFirstLetter(a.name)}: ${
          a.value > 0 ? "+" + a.value : a.value
        }`
    );
    return r.join(", ");
  };

  const handleRequirement = useCallback((): void => {
    const req = Object.keys(charClass.requiremt)
      .map((r) => {
        if (charClass.requiremt[r as ATTRIBUTE] !== 0)
          return {
            name: r,
            value: charClass.requiremt[r as ATTRIBUTE],
          };
        else return null;
      })
      .filter((x) => x);
    setRequirement(req as RequirementType[]);
  }, [charClass.requiremt]);

  useEffect(() => {
    handleRequirement();
  }, [handleRequirement]);

  return (
    <div className="border bg-white dark:bg-stone-700 rounded-md shadow-md p-2">
      <div className="flex flex-row items-start">
        <img
          src={`${STORAGE_PUBLIC}/portraits/${charClass.portrait}.png`}
          alt={`${charClass.name} portrait`}
          className="w-2/12 mr-2 object-contain rounded-xl shadow-md"
        />
        <div className="w-10/12 flex flex-col gap-2 items-start">
          <h2 className="font-bold text-lg">
            {CapitalizeFirstLetter(charClass.name)}
          </h2>
          <p className="text-sm">
            <span className="font-bold">Type</span>:{" "}
            {CapitalizeFirstLetter(charClass.type)}
          </p>
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
          {showDescription && (
            <>
              <ReactMarkdown>{charClass.description}</ReactMarkdown>
              <button
                type="button"
                className="cursor-pointer underline"
                onClick={() => setShowDescription(!showDescription)}
              >
                {!showDescription ? "Show" : "Hide"}
              </button>
            </>
          )}
          <p className="text-sm">
            <span className="font-bold">{`${
              charClass.requisites.length > 1 ? "Requisites" : "Requisite"
            }`}</span>
            : {ShowList(charClass.requisites)}
          </p>
          {!!requirement.length && (
            <p className="text-sm">
              <span className="font-bold">Attributes Adjustments</span>:{" "}
              {handleReq(requirement)}
            </p>
          )}
          <p className="text-sm">
            <span className="font-bold">Races</span>:{" "}
            {ShowList(charClass.races)}
          </p>
          <p className="text-sm">
            <span className="font-bold">Alignments</span>:{" "}
            {ShowList(charClass.alignments)}
          </p>
          {!!charClass.advantages.length && (
            <p className="text-sm">
              <span className="font-bold">Advantages</span>:{" "}
              {ShowList(charClass.advantages)}
            </p>
          )}
          {!!charClass.disadvantages.length && (
            <p className="text-sm">
              <span className="font-bold">Disadvantages</span>:{" "}
              {ShowList(charClass.disadvantages)}
            </p>
          )}
          <div className="form-group form-check flex flex-row justify-center my-4">
            <input
              type="radio"
              name="attributesSet"
              value={index}
              checked={index === selectedCharClass}
              onChange={(e) => handleSelectCharClass(+e.target.value)}
              className="form-radio h-4 w-4 rounded-sm text-red-600 bg-stone-100 border border-stone-400 focus:outline-none focus:ring-offset-0 focus:ring-0 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              className={`form-radio-label inline-block font-bold uppercase ${
                index === selectedCharClass && "text-red-600"
              }`}
              htmlFor="attributesSet"
            >
              Play as a {charClass.name}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
