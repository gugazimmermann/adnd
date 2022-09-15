import { NavProfile, Theme } from ".";

type NavProps = {
  handleSignOut: () => void;
};

const Nav = ({ handleSignOut }: NavProps) => {
  const title: string = process.env.REACT_APP_TITLE || "AD&D Solo Adventure";

  return (
    <header className="w-full shadow-md z-30 px-2 py-1.5">
      <div className="flex flex-wrap justify-between px-2">
        <p className="text-2xl">{title}</p>
        <div className="flex flex-row">
          <Theme />
          <NavProfile handleSignOut={handleSignOut} />
        </div>
      </div>
    </header>
  );
};

export default Nav;
