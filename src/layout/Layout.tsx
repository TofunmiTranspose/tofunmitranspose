import React, { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DropDown from "../components/DropDown";
import { ThemeContext } from "../context/ThemeContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggleOpen = () => setOpen(!isOpen);
  const theme = useContext(ThemeContext);  
  return (
    <div className={`${theme?.theme ? "bg-[#0f0f0f]" : "bg-[#ffffee]"}  h-screen pt-2 flex flex-col justify-between`}>
      <DropDown isOpen={isOpen} toggleOpen={toggleOpen} />
      <NavBar toggleOpen={toggleOpen} />
      <div className="h-full">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
