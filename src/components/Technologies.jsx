import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiTailwindcss, SiExpress, SiJavascript } from "react-icons/si";
import { FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TECH_ICONS = [
  { icon: FaHtml5,      color: "text-orange-500", duration: 3,   label: "HTML5" },
  { icon: FaCss3Alt,    color: "text-blue-500",   duration: 2,   label: "CSS3" },
  { icon: FaSass,       color: "text-pink-600",   duration: 4,   label: "Sass" },
  { icon: SiTailwindcss,color: "text-cyan-300",   duration: 4,   label: "Tailwind CSS" },
  { icon: SiJavascript, color: "text-yellow-400", duration: 2.5, label: "JavaScript" },
  { icon: RiReactjsLine,color: "text-cyan-400",   duration: 2.5, label: "React" },
  { icon: SiMongodb,    color: "text-green-500",  duration: 5,   label: "MongoDB" },
  { icon: FaNodeJs,     color: "text-green-500",  duration: 6,   label: "Node.js" },
  { icon: SiExpress,    color: "text-gray-400",   duration: 6,   label: "Express" },
];

const Technologies = () => {
  const { t } = useLanguage();
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-50}} transition={{duration:1.5}} className="my-20 text-center text-4xl">
        {t("Technologies", "Technologien")}
      </motion.h2>
      <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
        {TECH_ICONS.map(({ icon: Icon, color, duration, label }) => (
          <motion.div key={label} variants={iconVariants(duration)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <Icon className={`text-7xl ${color}`} aria-label={label} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
