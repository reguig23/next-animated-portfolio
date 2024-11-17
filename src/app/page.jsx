"use client";

import { motion } from "framer-motion";
import Link from "next/link";
const Homepage = () => {
  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg;px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative"></div>

        {/* TEXT CONTAINER */}
        <motion.div
          
          className="h-1/2 flex flex-col lg:h-full lg:w-1/2 gap-8 items-end justify-center"
        >
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-title  text-right  ">
            Ilyes Reguig
          </h1>
          {/* DESC */}
          <p className="text-2xl md:text-4xl text-end font-sans ">
            Bonjour et bienvenue ! Je m&#39;appelle Ilyes et je suis développeur
            spécialisé dans full-stack. Ici, vous trouverez une sélection de mes
            projets et mon parcours en développement.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 items-end justify-end">
            <Link
              className="p-4 rounded-lg ring-1 font-raleway ring-primary bg-primary text-white"
              href={"/portfolio"}
            >
              View My Work
            </Link>
            <Link
              className="p-4 rounded-lg ring-1 ring-primary font-raleway"
              href={"/contact"}
            >
              Contact Me {""}
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Homepage;
