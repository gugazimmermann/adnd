import { Link as RouterLink } from "react-router-dom";

type LinkProps = {
  to: string;
  text: string;
  className?: string;
};

const Link = ({ to, text, className }: LinkProps) => (
  <RouterLink
    to={to}
    className={`duration-200 hover:text-red-600 transition ease-in-out ${
      className && className
    }`}
  >
    {text}
  </RouterLink>
);

export default Link;
