import { Link } from "react-router-dom";

type TitleProps = {
  text: string;
  className?: string;
  back?: string;
};

const Title = ({ text, className, back }: TitleProps) => {
  return (
    <div className="flex">
      {back && (
        <Link to={back} className="flex-none">
          <i className="bx bx-left-arrow-circle text-xl" />
        </Link>
      )}
      <h1
        className={`flex-auto ${!className ? "text-base text-center" : className}`}
      >
        {text.toLocaleUpperCase()}
      </h1>
    </div>
  );
};

export default Title;
