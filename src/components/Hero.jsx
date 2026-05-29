import PropTypes from "prop-types";
import { HERO_CONTENT, HERO_CONTENT_DE } from "../constants";
import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition: {duration:0.5, delay: delay}
    }
});
const Hero = ({language}) => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center">
            <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-5xl tracking-tight lg:mt-16 text-center">
              Vladyslav Bakumenko
            </motion.h1>
            <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              {language ? "Web Developer" : "Webentwickler"}
            </motion.span>
            <motion.p className="my-2 max-w-xl py-6 md:text-xl text-justify tracking-tighter" variants={container(1)} initial="hidden" animate="visible">
              {language ? HERO_CONTENT : HERO_CONTENT_DE}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img initial={{x:100, opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1, delay:1.2}} src={profile} alt="profile_pic" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  language: PropTypes.bool,
};

export default Hero;
