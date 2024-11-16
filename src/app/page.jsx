"use client";

import { motion } from "framer-motion";
import Link from "next/link";
const Homepage = () => {
  return (
    <div
   
      className="h-full "
     
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg;px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative"></div>

        {/* TEXT CONTAINER */}
        <motion.div
           mode = {"wait"}
          initial={{ x: "-95%", opacity: 0 }}
          animate={{ x: "0px", opacity: 1 }}
          end ={{x : "0px",opacity : 1}}
          transition={{
            x: { duration: 1.7, ease: "easeInOut" }, // Animation du déplacement
            opacity: { duration: 2.1, ease: "easeIn"}, // Opacité plus lente
          }}
          className="h-1/2 flex flex-col lg:h-full lg:w-1/2 gap-8 items-end justify-center"
        >
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-title font-bold text-right  ">
            Ilyes Reguig
          </h1>
          {/* DESC */}
          <p className="md:text-xl text-center font-sans ">
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
    </div>
  );
};

export default Homepage;
