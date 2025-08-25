import { MenuIcon } from "lucide-react";
import type { Dispatch } from "react";

const MenuBar = ({
  theme,
  toggleOpen,
}: {
  theme: {
    theme: boolean;
    toggleTheme: Dispatch<any>;
    toggleOpen?: () => void;
  };
  toggleOpen: () => void;
}) => {
  return (
    
      <MenuIcon
        className={`sm:hidden ${
          theme?.theme ? "text-white" : "text-[#1b1b1b]"
        } rounded-full size-6`}
        onClick={() => toggleOpen()}
      />
  );
};

export default MenuBar;
