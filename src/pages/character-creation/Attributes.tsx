import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Button, Title } from "../../components";
import Dices from "../../helpers/dices";
import { AttributesType, AttributeType } from "../../interfaces/helpers";
import content from "../../content/attributes.json";

type AContentType = {
  [key: string]: any;
};

export default function Attributes() {
  const navigate = useNavigate();
  const [attributes, setAttributes] = useState<AttributesType[]>([]);
  const [selectedAttribute, setSelectedAttribute] = useState<AttributesType>();
  const [modal, setModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<any>();

  useEffect(() => {
    const attrs: AttributesType[] = [];
    for (let i = 1; i <= 3; i += 1) {
      attrs.push({
        Strength: Dices.Row(3, "d6"),
        Dexterity: Dices.Row(3, "d6"),
        Constitution: Dices.Row(3, "d6"),
        Intelligence: Dices.Row(3, "d6"),
        Wisdom: Dices.Row(3, "d6"),
        Charisma: Dices.Row(3, "d6"),
      });
    }
    setAttributes(attrs);
  }, []);

  const showAttrTable = (a: AttributeType) => {
    const c = (content as AContentType)[(a as string).toLocaleLowerCase()];
    setModalContent(c);
    setModal(true);
  };

  const attribute = (attr: AttributesType, a: AttributeType, i: number) => (
    <div key={uuidv4()} className="grid grid-cols-12">
      <dt className="col-span-8 p-2  flex justify-start items-center gap-2 -mt-1">
        <button
          type="button"
          className="cursor-pointer mt-1"
          onClick={() => showAttrTable(a)}
        >
          <i className="bx bx-help-circle" />
        </button>
        {a}
      </dt>
      <dd className="relative col-span-4 p-2 text-right">{attr[a]}</dd>
    </div>
  );

  const renderModal = () => {
    return (
        <div
          className={`fixed ${
            modal ? "flex" : "hidden"
          } z-40 w-screen inset-0 bg-gray-900 bg-opacity-80`}
        >
          <div
            className={`fixed z-50 top-0 left-1/2 -translate-x-1/2 h-screen w-full overflow-scroll layout rounded-md px-8 py-6 shadow-lg`}
          >
            <table>
              <thead>
                <tr className="border border-slate-800">
                  <th className="border p-1  border-slate-800">Value</th>
                  {modalContent?.header &&
                    modalContent.header.map((th: string) => (
                      <th
                        key={uuidv4()}
                        className="p-1 border border-slate-800"
                      >
                        {th}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {modalContent?.rows &&
                  modalContent.rows.map((row: string[], i: number) => (
                    <tr key={uuidv4()} className="border border-slate-800">
                      <td className="text-center">{i + 1}</td>
                      {row.map((td: string) => (
                        <td
                          key={uuidv4()}
                          className="text-center border border-slate-800"
                        >
                          {td}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="my-4 w-full">
              <Button text="Close" handler={() => setModal(false)} full />
            </div>
          </div>
        </div>
    );
  };

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
        {attributes.map((attr, k) => (
          <dl key={uuidv4()} className="border bg-white dark:bg-stone-700 ">
            {Object.keys(attr).map((a, i) =>
              attribute(attr, a as AttributeType, i)
            )}
          </dl>
        ))}
      </div>
      <div className="text-center mt-4 mb-4">
        <Button
          text="Continue to Races"
          handler={() => navigate("/character-creation/atrributes")}
        />
      </div>
      {renderModal()}
    </section>
  );
}
