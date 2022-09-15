import { v4 as uuidv4 } from "uuid";
import ReactMarkdown from 'react-markdown'
import { Button } from "../../components";

type AttributesModalProps = {
  description: string;
  show: boolean;
  setShow: (show: boolean) => void;
};

const RacesDescriptionModal = ({
  description,
  show,
  setShow,
}: AttributesModalProps) => {
  return (
    <div
      className={`fixed z-40 w-screen inset-0 bg-gray-900 bg-opacity-80 ${
        show ? "flex" : "hidden"
      }`}
    >
      <div className="fixed z-50 top-0 left-1/2 -translate-x-1/2 w-auto h-screen overflow-auto layout rounded-md px-8 py-6 shadow-lg">
        <div
          key={uuidv4()}
          className="border bg-white dark:bg-stone-700 rounded-md shadow-md"
        >
          <ReactMarkdown className="prose p-2">{description}</ReactMarkdown>
        </div>
        <div className="my-4 w-full">
          <Button text="Close" handler={() => setShow(false)} full />
        </div>
      </div>
    </div>
  );
};

export default RacesDescriptionModal;
