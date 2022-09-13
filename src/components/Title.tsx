import { Link } from "react-router-dom";

type TitleProps = {
  text: string;
  className?: string;
  back?: string;
};

const Title = ({ text, className, back }: TitleProps) => {
  return (
    <h1 className={`${!className ? "mb-2 text-base text-center" : className}`}>
      {back && (
        <Link to={back}>
          <i className="bx bx-left-arrow-circle mr-2" />
        </Link>
      )}
      {text.toLocaleUpperCase()}
    </h1>
  );
};

export default Title;
