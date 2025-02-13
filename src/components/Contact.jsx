import { motion } from "framer-motion";
import React from "react";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Contact = () => {
  return (
    <div className="sm:my-20">
      <div className="mt-10 text-center">
        <p
          className={`${styles.paragraphText} flex items-center justify-center`}
        >
          <FaHome className="mr-2" /> Home Address: Dorfstrasse 33, 8717 Benken
          SG
        </p>
        <p
          className={`${styles.paragraphText} flex items-center justify-center`}
        >
          <FaPhone className="mr-2" /> Phone: (+41) 76 527 81 80
        </p>
        <p
          className={`${styles.paragraphText} flex items-center justify-center`}
        >
          <FaEnvelope className="mr-2" /> Email: dimaspotapov0606@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
