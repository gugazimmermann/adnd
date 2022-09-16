import { v4 as uuidv4 } from "uuid";
import { Button } from "../../components";

type AttributesModalProps = {
  value: number;
  header: string[];
  rows: string[][];
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
    <div className={`fixed z-40 inset-0 bg-gray-900 bg-opacity-80 ${show ? "flex" : "hidden"}`}>
      <div className="z-50 p-4 overflow-auto w-full">
        <div className="layout  rounded-md shadow-md p-2 flex flex-col justify-start items-center">
          <table className="layout table-fixed">
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
                  <tr
                    key={row[0]}
                    className={`border border-slate-800 ${
                      +row[0] === value && "inverted font-bold"
                    }`}
                  >
                    {row.map((td: string, i: number) => (
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
          <div className="my-4 w-6/12">
            <Button text="Close" handler={() => setShow(false)} full />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttributesModal;
