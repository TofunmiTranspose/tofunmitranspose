import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { ThemeContext } from "../context/ThemeContext";

const DropDown = ({
  isOpen,
  toggleOpen,
}: {
  isOpen: boolean;
  toggleOpen: () => void;
}) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={`${
        isOpen ? "translate-y-0" : ""
      } fixed top-0 left-0 transition ease-in-out duration-300 border border-white/10 -translate-y-full  sm:hidden flex items-center justify-center w-full rounded-b-xl backdrop-filter backdrop-blur-[5px] text-${
        theme?.theme ? "white" : "black"
      } overflow-hidden`}
    >
      <IoMdClose
        className="absolute top-2 right-3 size-10"
        onClick={toggleOpen}
      />
      <ul
        className={`h-full w-full p-5 flex flex-col items-center gap-5 font-bold text-xl ${
          theme?.theme ? "white" : "bg-gray-500/10"
        }`}
      >
        {["About Me", "Skills", "Experience", "Projects", "Contact"].map(
          (item) => (
            <li key={item}>
              <a href={`#`} onClick={() => toggleOpen()}>
                {item}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default DropDown;
