import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Button, Title } from "../../components";
import {
  AttributesType,
  AttributeType,
  ContentTableType,
  JsonContentType,
} from "../../interfaces";
import LocalStorage from "../../api/local-storage";
import AttributesModal from "./AttributesModal";
import contentJson from "../../content/attributes.json";

export default function Attributes() {
  const navigate = useNavigate();
  const [attributes, setAttributes] = useState<AttributesType[]>([]);
  const [selectedSet, setSelectedSet] = useState<number>(99);
  const [selectedAttributes, setSelectedAttributes] =
    useState<AttributesType>();
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ContentTableType>({
    header: [],
    rows: [],
  });

  useEffect(() => {
    const getAttributes = LocalStorage.GetItem("attributes", true);
    if (!getAttributes) navigate("/home");
    const getAttr = getAttributes as AttributesType[];
    if (process.env.NODE_ENV === "development") {
      const cheat = {
        Strength: 18,
        Dexterity: 18,
        Constitution: 18,
        Intelligence: 18,
        Wisdom: 18,
        Charisma: 18,
      };
      getAttr.push(cheat);
    }
    setAttributes(getAttr);
  }, [navigate]);

  const showAttrTable = (a: AttributeType, v: number) => {
    const c = (contentJson as JsonContentType)[
      (a as string).toLocaleLowerCase()
    ];
    setModalContent(c);
    setSelectedValue(v);
    setShowModal(true);
  };

  const handleSelectAttributes = (i: number) => {
    setSelectedSet(i);
    setSelectedAttributes(attributes[i]);
    LocalStorage.Save('char', {attributes: attributes[i]}, true);
  };

  const renderRadio = (i: number) => (
    <div
      key={uuidv4()}
      className="w-full p-2 text-center inverted rounded-b-md"
    >
      <div className="form-group form-check flex flex-row justify-center">
        <input
          type="radio"
          name="attributesSet"
          value={i}
          checked={i === selectedSet}
          onChange={(e) => handleSelectAttributes(+e.target.value)}
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
  );

  const renderAttribute = (attr: AttributesType, a: AttributeType) => (
    <div key={uuidv4()} className="grid grid-cols-12">
      <dt className="col-span-8 p-2 flex justify-start items-center gap-2 -mt-1">
        <button
          type="button"
          className="cursor-pointer mt-1"
          onClick={() => {
            showAttrTable(a, attr[a]);
          }}
        >
          <i className="bx bx-help-circle" />
        </button>
        {a}
      </dt>
      <dd className="relative col-span-4 p-2 text-right">{attr[a]}</dd>
    </div>
  );

  return (
    <section className="relative">
      <Title
        text="Attributes"
        className="font-bold text-xl text-center"
        back="/home"
      />
      <p className="mb-4 mt-4">
        You need to choose one of the thre attributes sets for your character.
        Attributes can be changed by Race, and will reflect when select Class.
      </p>
      <p className="mb-4">
        Each attribute has it's table, which will be used during the game
        depending on the choices made by you.
      </p>
      <div className="grid sm:grid-cols-3 gap-4 mx-8">
        {attributes.map((attr, i) => (
          <dl
            key={uuidv4()}
            className="border bg-white dark:bg-stone-700 rounded-md shadow-md"
          >
            {Object.keys(attr).map((a) =>
              renderAttribute(attr, a as AttributeType)
            )}
            {renderRadio(i)}
          </dl>
        ))}
      </div>
      <div className="text-center mt-4 mb-4">
        <Button
          text="Continue to Races"
          handler={() => navigate("/character-creation/races")}
          disabled={!selectedAttributes}
        />
      </div>
      <AttributesModal
        value={selectedValue}
        header={modalContent.header}
        rows={modalContent.rows}
        show={showModal}
        setShow={setShowModal}
      />
    </section>
  );
}
