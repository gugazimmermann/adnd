import { v4 as uuidv4 } from "uuid";
import { Button } from "../../components";
import { AbilityAdjustmentsType, AttributesType } from "../../ts/types";

type AttributesModalProps = {
  attributes: AttributesType;
  adjustments: AbilityAdjustmentsType[];
  show: boolean;
  setShow: (show: boolean) => void;
};

const RacesAttributesModal = ({
  attributes,
  adjustments,
  show,
  setShow,
}: AttributesModalProps) => {
  return (
    <div
      className={`fixed z-40 w-screen inset-0 bg-gray-900 bg-opacity-80 ${
        show ? "flex" : "hidden"
      }`}
    >
      <div className="fixed z-50 top-0 left-1/2 -translate-x-1/2 w-auto h-auto overflow-auto layout rounded-md px-8 py-6 shadow-lg">
        <dl
          key={uuidv4()}
          className="border bg-white dark:bg-stone-700 rounded-md shadow-md"
        >
          {Object.keys(attributes).map((a) => (
            <div key={uuidv4()} className="grid grid-cols-12">
              <dt className="col-span-8 p-2 flex justify-start items-center gap-2 -mt-1">
                {a}
              </dt>
              {/* <dd className="relative col-span-4 p-2 text-right">{attributes[a]}</dd> */}
            </div>
          ))}
        </dl>
        <div className="my-4 w-full">
          <Button text="Close" handler={() => setShow(false)} full />
        </div>
      </div>
    </div>
  );
};

export default RacesAttributesModal;
