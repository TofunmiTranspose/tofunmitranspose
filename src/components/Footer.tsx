import { MdMailOutline } from "react-icons/md";
import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaPhoneSquareAlt,
  FaGitAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contactSection"
      className="w-full py-2 px-4 bg-[#1d1d1d] flex flex-col gap-2"
    >
      <div>
        <h1 className="text-white font-semibold text-xl">Contact</h1>
      </div>
      <div className="text-gray-400 text-[12px]  pb-2">
        Seasoned Front-end Developer with hands-on experience in designing,
        bringing Figma to life, and building web solutions. <br />
        <div className="font-semibold mt-1 text-gray-300">
          <MdMailOutline className="text-gray-300 inline text-[16px]" />{" "}
          <a target="_blank" href="mailto:tofexzyno@gmail.com">
            tofexzyno@gmail.com
          </a>
        </div>
      </div>
      <div className="flex text-white gap-5 text-xl">
        <a target="_blank" href="https://wa.link/yjileb">
          <FaWhatsapp className="text-green-400" />
        </a>
        <a target="_blank" href="https://facebook.com/tofexzyno2005">
          <FaFacebook className="text-[#148dff]" />
        </a>
        <a target="_blank" href="http://linkedin.com/in/tofunmitranspose?">
          <FaLinkedin className="text-[#235dfc]" />
        </a>
        <a href="tel:+2349134744279">
          <FaPhoneSquareAlt className="text-[#3bff3c]" />
        </a>
        <a target="_blank" href="https://github.com/TofunmiTranspose">
          <FaGitAlt className="text-[#fff]" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
