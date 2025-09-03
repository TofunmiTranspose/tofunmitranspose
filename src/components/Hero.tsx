import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";
import profilePic from "../assets/ProfilePic.png";
const Hero = () => {
  const theme = useContext(ThemeContext);
  const headCol = theme?.theme ? "text-gray-200" : "text-[#000000]";
  const nameCol = theme?.theme ? "text-yellow-400" : "text-[#c7a200]";
  const pasCol = theme?.theme ? "text-gray-200" : "text-[#4A4A4A]";
  const borCol = theme?.theme
    ? "border-2 border-teal-300"
    : "border-3 text-[#3b3b3b]";
  const bCol = theme?.theme ? "text-white" : "text-black";
  return (
    <div className="sm:px-5 sm:mt-10 flex sm:justify-around flex-col sm:flex-row">
      <div className="sm:pl-10 h-screen/2 sm:w-full mt-8 flex flex-col justify-center items-center sm:items-start px-[0.5px]">
        <h2
          className={`text-md lg:text-lg 2xl:text-xl font-bold sm:font-semibold ${headCol} sm:text-gray-400`}
        >
          FRONT-END WEB DEVELOPER
        </h2>
        <h1
          className={`text-2xl sm:text-4xl xl:text-5xl 2xl:text-6xl ${nameCol} font-semibold my-2`}
        >
          TOFUNMI PAUL OKEOWO
        </h1>
        <p
          className={`text-sm xl:text-lg text-center sm:text-start sm:max-w-65 xl:max-w-80 ${pasCol} font-semibold mb-2`}
        >
          A passionate Web Developer bringing ideas to life,{" "}
          <b className={`${bCol}`}>pixel by pixel</b>
        </p>
        <a href="https://drive.google.com/uc?export=download&id=1vFnS3HBRhU1_jxYkWod5cHk0A2i5FC0n">
          <button
            className="self-center sm:self-start my-2 mb-4 text-[10px] lg:text-[11px] xl:text-[12px] font-semibold lg:font-bold lg:text-gray-800 shadow-[#777777] shadow-xs bg-yellow-400 w-30 lg:w-33 xl:w-35 h-8 rounded-sm hover:translate-y-[-5px]
             transition-all duration-300 ease-in-out cursor-pointer"
          >
            Download My Resume
          </button>
        </a>
      </div>
      <div className="w-full sm:w-7/10 flex justify-center items-center">
        <div className={`rounded-full ${borCol}  w-8/10 max-w-90 sm:w-10/10`}>
          <img src={profilePic} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
