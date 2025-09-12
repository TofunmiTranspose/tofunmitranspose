import { use } from "react";
import { IoMdClose } from "react-icons/io";
import { ThemeContext } from "../context/ThemeContext";

const DropDown = ({
  isOpen,
  toggleOpen,
}: {
  isOpen: boolean;
  toggleOpen: () => void;
}) => {
  const theme = use(ThemeContext);
  return (
    <div
      className={`${
        isOpen ? "translate-y-0" : ""
      } z-101 fixed top-0 left-0 transition ease-in-out duration-300 border border-t-0 border-white/10 -translate-y-full  sm:hidden flex items-center justify-center w-full rounded-b-xl backdrop-filter backdrop-blur-[5px]  dark:text-white ${
        theme?.theme ? "dark" : ""
      } overflow-hidden`}
    >
      <IoMdClose
        className="absolute top-2 right-3 size-10"
        onClick={toggleOpen}
      />
      <ul
        className={`h-full w-full p-5 flex flex-col items-center gap-5 font-bold text-xl dark:white dark:bg-gray-500/50
        `}
      >
        {[
          { name: "About Me", href: "about" },
          { name: "Skills", href: "skills" },
          { name: "Projects", href: "projectsSection" },
          { name: "Contact", href: "contactSection" },
        ].map((item, i) => (
          <li key={`#${item.href}`}>
            <a
              href={`#${item.href}`}
              onClick={() => toggleOpen()}
              className={"text-teal-600" }
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
