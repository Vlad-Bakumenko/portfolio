import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {t("Experience", "Erfahrung")}
      </motion.h2>
      <div className="">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-lg text-neutral-400">{t(experience.year.en, experience.year.de)}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-2xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-2xl">
                {t(experience.role.en, experience.role.de)} -{" "}
                <span className="text-purple-100">{experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-300 md:text-base text-justify">{t(experience.description.en, experience.description.de)}</p>
              {t(experience.technologies.en, experience.technologies.de).map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-purple-400 px-2 py-0.5 text-sm md:text-base font-semibold text-neutral-900 tracking-wide inline-block"
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
