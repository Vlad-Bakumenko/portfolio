import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";

const headingVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Projects = () => {
  const { t } = useLanguage();

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        className="my-10 text-center text-4xl"
      >
        {t("Projects", "Projekte")}
      </motion.h2>
      <div>
        {PROJECTS.map((project) => (
          <div key={project.id} className="mb-12 flex flex-wrap lg:justify-center">
            <motion.div
              variants={slideInFromLeft}
              initial="hidden"
              whileInView="visible"
              className="w-full lg:w-1/4 mb-5"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded object-cover w-full lg:w-3/4"
              />
            </motion.div>
            <motion.div
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              className="w-full max-w-2xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-2xl">{project.title}</h6>
              <p className="mb-4 text-neutral-300 md:text-base text-justify">{t(project.description.en, project.description.de)}</p>
              {project.technologies.map((tech) => (
                <span key={tech} className="mr-2 mt-4 rounded bg-purple-400 px-2 py-0.5 text-base font-semibold md:text-base text-neutral-900 tracking-wide inline-block">{tech}</span>
              ))}
              {project.links.map((link) => (
                <a
                  key={link.link}
                  href={link.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={`${link.resource} for ${project.title}`}
                  className="w-1/3 md:w-1/5 rounded-3xl bg-neutral-300 py-1 md:p-2 text-sm md:text-base font-semibold text-purple-700 text-center tracking-wide block hover:underline hover:scale-110 mt-7"
                >
                  {link.resource}
                  <FaArrowUpRightFromSquare className="inline-block align-text-bottom ml-2" />
                </a>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
