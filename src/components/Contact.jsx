import PropTypes from "prop-types";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = ({language}) => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className="my-10 text-center text-4xl">{language ? "Get in touch" : "In Verbindung treten"}</motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className="my-4 md:text-xl">{language ? CONTACT.address : CONTACT.address_de}</motion.p>
        <a href="mailto:bakumenkovladyslav@gmail.com" className="border-b md:text-2xl">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

Contact.propTypes = {
  language: PropTypes.bool,
};

export default Contact;
