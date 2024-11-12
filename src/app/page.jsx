"use client";

import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg;px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
         
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2 gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold text-charkoal ">Ilyes Reguig</h1>
          {/* DESC */}
          <p className="md:text-xl text-charkoal">
            Welcome to my digital canvas,je sais pas quoi écrire encore mais
            ecoute on est la hein ?!!
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-charkoal bg-charkoal text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-charkoal">
              Contact Me{" "}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
