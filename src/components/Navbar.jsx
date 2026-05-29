import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { SOCIAL_LINKS } from "../constants";

const Navbar = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="m-2 w-16 md:w-40" src={logo} alt="logo" />
      </div>
      <div className="m-2 flex items-center justify-center gap-4 text-3xl">
        <button aria-label="Switch to English" className={language ? "selected text-xl md:text-2xl" : "text-xl md:text-2xl"} onClick={() => setLanguage(true)}>EN</button>
        <button aria-label="Switch to German" onClick={() => setLanguage(false)} className={!language ? "selected text-xl md:text-2xl" : "text-xl md:text-2xl"}>DE</button>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><FaLinkedin className="hover:text-purple-500 hover:scale-125 transition duration-300 md:text-5xl"/></a>
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><FaGithub className="hover:text-purple-500 hover:scale-125 transition duration-300 md:text-5xl"/></a>
      </div>
    </nav>
  );
};

export default Navbar;
