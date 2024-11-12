"use client";


import { useRef } from "react";
import Logiciel from "@/data/logiciel";
import Carte from "@/components/carte";
import { motion } from "framer-motion";
const AboutPage = () => {
  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});

  
  const logiciel = Logiciel;
 
  return (
    <motion.div 
    className={`w-full h-full overflow-scroll  lg:flex`}
    initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* TEXT CONTAINER */}
      <motion.div className=" h-full p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-48 lg:w-full lg:pr-0 xl:w-full ">
        {/* BIOGRAPHY CONTAINER */}
        <motion.div className="flex flex-col gap-12 justify-center ">
          {/* BIOGRAPHY TITLE */}
          <motion.h1 className="font-bold text-2xl">BIOGRAPHY</motion.h1>
          {/* BIOGRAPHY DESC */}
          <motion.p className="text-lg">
          Développeur Full Stack spécialisé en Java, React et Node.js, avec une solide expérience en Docker et Kubernetes pour le déploiement. 
          Passionné par l&#39;innovation en UX/UI design, j&#39;allie esthétique et performance dans mes projets. 
          Mes travaux ont été présentés lors de conférences académiques, témoignant de mon engagement pour des solutions performantes et centrées utilisateur. 
          Je suis à la recherche d’un poste dans le secteur de la R&D
          </motion.p>
          {/* BIOGRAPHY QUOTE */}
          <span className="italic">
            Merci pour la visite de mon site Voici mon cv (mettre un lien )
          </span>
        </motion.div>
        {/* SKILLS CONTAINER */}
        <motion.div
          className="flex flex-col gap-3 justify-center p-0 m-0"
          ref={skillRef}
        >
          {/* SKILL TITLE */}
          <motion.h1 className="font-bold text-2xl ">SKILLS</motion.h1>

          {/* SKILL LIST */}
          <motion.div className="flex flex-col gap-3 md:gap-16 md:flex-wrap justify-center items-center md:flex-row">
            {logiciel.map((skillItem) => (
              <motion.div
                key={skillItem.name}
                className="flex items-center gap-2 md:gap-4"
              >
                {/* Image affichée uniquement en mode tablette et desktop */}
                <motion.div className="hidden md:block">
                  <Carte legende={skillItem.name} imageSrc={skillItem.url} />
                </motion.div>
                {/* Nom du skill affiché sur tous les écrans */}
                <motion.span className="text-lg font-medium md:hidden">
                  {skillItem.name}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
