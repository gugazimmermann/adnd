import { useEffect, useState } from "react";

const ls = process.env.REACT_APP_LOCALSTORAGE || "adnd_solo";

const Theme = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    const storage = JSON.parse(localStorage.getItem(ls) || "");
    const newTheme = storage.theme === "light" ? "dark" : "light";
    localStorage.setItem(ls, JSON.stringify({ ...storage, theme: newTheme }));
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  useEffect(() => {
    const seeLocalStorageMode = () => {
      const storage = JSON.parse(localStorage.getItem(ls) || "");
      if (!storage)
        localStorage.setItem(ls, JSON.stringify({ theme: "light" }));
      setTheme(storage?.theme ? storage.theme : "light");
    };
    seeLocalStorageMode();
  }, []);

  return (
    <div className="flex flex-row justify-center items-center">
      <button type="button" onClick={() => changeTheme()}>
        <i
          className={`bx ${
            theme === "light" ? "bxs-sun" : "bxs-moon"
          } text-xl mr-2`}
        />
      </button>
    </div>
  );
};

export default Theme;
