import { v4 as uuidv4 } from "uuid";
import { Button } from "../../components";
import { ContentTableRowType } from "../../ts/types";

type AttributesModalProps = {
  value: number;
  header: string[];
  rows: ContentTableRowType[];
  show: boolean;
  setShow: (show: boolean) => void;
};

const AttributesModal = ({
  value,
  header,
  rows,
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
        <table>
          <thead>
            <tr className="border border-slate-800">
              {header &&
                header.map((th: string) => (
                  <th key={uuidv4()} className="p-1 border border-slate-800">
                    {th}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {rows &&
              rows.map((row: string[]) => (
                <tr key={uuidv4()} className="border border-slate-800">
                  {row.map((td: string, i: number) => (
                    <td
                      key={uuidv4()}
                      className={`text-center border border-slate-800 ${
                        i === 0 && value === +td && "inverted font-bold"
                      }`}
                    >
                      {td}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        <div className="my-4 w-full">
          <Button text="Close" handler={() => setShow(false)} full />
        </div>
      </div>
    </div>
  );
};

export default AttributesModal;
