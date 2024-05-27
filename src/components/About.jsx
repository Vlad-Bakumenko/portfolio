import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT, ABOUT_TEXT_DE } from "../constants";
import { motion } from "framer-motion";

const About = ({language}) => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        {language? "About":"Über"} <span className="text-neutral-500">{language ? "me":"mich"}</span>
      </h2>
      <div className="flex flex-wrap lg:items-center">
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:0.5}} className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:0.5}} className="w-full lg:w-1/2">
          <div className="flex justify-center text-center md:text-start">
            <p className="my-2 max-w-xl py-6 md:text-xl">{language ? ABOUT_TEXT : ABOUT_TEXT_DE}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
