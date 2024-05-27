import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = ({language, setLanguage}) => {

  function setGermanLanguage() {
    setLanguage(false);
  }

  function setEnglishLanguage() {
    setLanguage(true);
  }

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="m-2 w-16 md:w-40" src={logo} alt="logo" />
      </div>
      <div className="m-2 flex items-center justify-center gap-4 text-3xl">
        <button className={language ? "selected text-xl md:text-2xl":"text-xl md:text-2xl"} onClick={setEnglishLanguage}>EN</button>
        <button onClick={setGermanLanguage} className={!language ? "selected text-xl md:text-2xl":"text-xl md:text-2xl"}>DE</button>
        <a href="http://www.linkedin.com/in/vladyslav-bakumenko-2b537b308" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-purple-500 hover:scale-125 transition duration-300 md:text-5xl"/></a>
        <a href="https://github.com/Vlad-Bakumenko" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-purple-500 hover:scale-125 transition duration-300 md:text-5xl"/></a>
      </div>
    </nav>
  );
};

export default Navbar;
