import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun } from "react-icons/fa";
import Head from "./Head";
import MenuBar from "./MenuBar";

const Navbar = ({ toggleOpen }: { toggleOpen: () => void }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-between gap-2 px-4 pb-2">
      <Head />
      <div className="flex items-center gap-2">
        <FaSun
          onClick={() => {theme?.toggleTheme(theme); document.getElementById("theme-color")?.setAttribute("content", theme?.theme ? "#ffffee" : "#0f0f0f"); console.log(document.getElementById("theme-color"));
          }}
          className={`${theme?.theme ? "text-white" : "text-[#1b1b1b]"} size-5`}
        />
        {theme && <MenuBar theme={theme} toggleOpen={toggleOpen} />}
      </div>
    </div>
  );
};
export default Navbar;
