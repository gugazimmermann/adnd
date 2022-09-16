import { Button } from "../../components";
import { ATTRIBUTE } from "../../ts/enums";
import { AdjustementsType, AttributesType } from "../../ts/types";
import AttributesCard from "./AttributesCard";

type AttributesModalProps = {
  attributes: AttributesType;
  adjustments: AdjustementsType[];
  show: boolean;
  setShow: (show: boolean) => void;
};

const calculateAdjustments = (
  attrs: AttributesType,
  adjustments: AdjustementsType[]
) => {
  Object.keys(attrs).forEach((attr) => {
    const adj = adjustments.find(
      (a) => a.name.toLocaleLowerCase() === attr.toLocaleLowerCase()
    );
    if (adj) attrs[attr as ATTRIBUTE] = attrs[attr as ATTRIBUTE] + +adj?.value;
  });
  return attrs;
};

const RacesAttributesModal = ({
  attributes,
  adjustments,
  show,
  setShow,
}: AttributesModalProps) => {
  return (
    <div
      className={`fixed z-40 inset-0 bg-gray-900 bg-opacity-80 ${
        show ? "flex" : "hidden"
      }`}
    >
      <div className="z-50 p-4 overflow-auto w-full">
        <div className="layout  rounded-md shadow-md p-2 flex flex-col justify-start items-center">
          <AttributesCard
            attributes={calculateAdjustments(attributes, adjustments)}
          />
          <div className="my-4 w-6/12">
            <Button text="Close" handler={() => setShow(false)} full />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RacesAttributesModal;
