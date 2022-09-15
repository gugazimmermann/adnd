import { useState } from "react";
import {
  AttributesType,
  ContentTableType,
  JsonContentTableType,
} from "../../ts/types";
import { ATTRIBUTE } from "../../ts/enums";
import AttributesModal from "./AttributesModal";
import contentJson from "../../content/attributes.json";
import { CapitalizeFirstLetter } from "../../helpers";

type AttributesCardProps = {
  attributes: AttributesType;
  index?: number;
  selectedSet?: number;
  handleSelect?: (selected: number) => void;
};

export default function AttributesCard({
  attributes,
  index,
  selectedSet,
  handleSelect,
}: AttributesCardProps) {
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ContentTableType>({
    header: [],
    rows: [],
  });

  const showAttrTable = (attribute: string, value: number) => {
    const content = (contentJson as JsonContentTableType)[
      attribute.toLocaleLowerCase()
    ];
    setModalContent(content);
    setSelectedValue(value);
    setShowModal(true);
  };

  return (
    <dl className="border bg-white dark:bg-stone-700 rounded-md shadow-md">
      {Object.keys(attributes).map((attribute) => (
        <div key={attribute.toLocaleLowerCase()} className="grid grid-cols-12">
          <dt className="col-span-8 p-2 flex justify-start items-center gap-2 -mt-1">
            <button
              type="button"
              className="cursor-pointer mt-1"
              onClick={() => {
                showAttrTable(attribute, attributes[attribute as ATTRIBUTE]);
              }}
            >
              <i className="bx bx-help-circle" />
            </button>
            {CapitalizeFirstLetter(attribute)}
          </dt>
          <dd className="relative col-span-4 p-2 text-right">
            {attributes[attribute as ATTRIBUTE]}
          </dd>
        </div>
      ))}
      {handleSelect && (
        <div className="w-full p-2 text-center inverted rounded-b-md">
          <div className="form-group form-check flex flex-row justify-center">
            <input
              type="radio"
              name="attributesSet"
              value={index}
              checked={index === selectedSet}
              onChange={(e) => handleSelect(+e.target.value)}
              className="form-radio h-4 w-4 rounded-sm text-red-600 bg-stone-100 border border-stone-400 focus:outline-none focus:ring-offset-0 focus:ring-0 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              className="form-radio-label inline-block"
              htmlFor="attributesSet"
            >
              Use this Attributes Set
            </label>
          </div>
        </div>
      )}

      {showModal && (
        <AttributesModal
          value={selectedValue}
          header={modalContent.header}
          rows={modalContent.rows}
          show={showModal}
          setShow={setShowModal}
        />
      )}
    </dl>
  );
}
