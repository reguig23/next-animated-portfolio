"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="w-full h-full">
        {/* Bande supérieure */}
        <motion.div
          className="h-screen w-screen fixed bg-primary rounded-b-[100px] z-40"
          style={{ transformOrigin: "top" }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }} 
        />
        {/* Texte au centre */}
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 font-title text-white text-8xl cursor-default z-50 w-fit h-fit pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }} 
        >
          {pathName.substring(1)}
        </motion.div>
        {/* Bande inférieure */}
        <motion.div
          className="h-screen w-screen fixed bg-primary rounded-t-[100px] bottom-0 z-30"
          style={{ transformOrigin: "bottom" }}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0, transition: { delay: 0.5 } }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }} 
        />
        {/* Contenus principaux */}
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;