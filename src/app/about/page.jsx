"use client";

import { useRef } from "react";
import Logiciel from "@/data/logiciel";
import Carte from "@/components/carte";
import Image from "next/image";
import { motion } from "framer-motion";
const AboutPage = () => {
  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});

  const logiciel = Logiciel;

  return (
    <motion.div
      className={`w-full h-full rounded-t-lg  flex :flex-col justify-center items-center `}
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* TEXT CONTAINER */}
      <div className=" h-[95%]   md:h-[95%] w-[95%] md:bg-jaunePale md:rounded-md md:bg-opacity-90 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-20 lg:gap-32  lg:pr-0 overflow-y-auto ">
        {/* BIOGRAPHY CONTAINER */}
        <div className="flex flex-col gap-12 justify-center ">
          {/* BIOGRAPHY TITLE */}
          <h1 className="font-bold text-2xl font-title">Qui je suis ? </h1>
          {/* BIOGRAPHY DESC */}
          <p className="text-lg text-bleuFonce font-sans">
            Développeur Full Stack spécialisé en Java, React et Node.js, avec
            une solide expérience en Docker et Kubernetes pour le déploiement.
            Passionné par l&#39;innovation en UX/UI design, j&#39;allie
            esthétique et performance dans mes projets. Mes travaux ont été
            présentés lors de conférences académiques, témoignant de mon
            engagement pour des solutions performantes et centrées utilisateur.
          </p>
          {/* BIOGRAPHY QUOTE */}
          <span className="italic">
            Merci pour la visite de mon site Voici mon{" "}
            <a
              href={"/pdf/Ilyes Reguig developpeur fullstack.pdf"}
              download="Reguig_Ilyes_CV.pdf"
              className="text-blue-600 hover:underline"
            >
              cv
            </a>
          </span>
        </div>
        {/* SKILLS CONTAINER */}
        <div
          className="flex flex-col gap-3 justify-center p-0 m-0"
          ref={skillRef}
        >
          {/* SKILL TITLE */}
          <h1 className="font-bold text-2xl font-title ">Compétences</h1>

          {/* SKILL LIST */}
          <div className="flex flex-col gap-3 md:gap-16 md:flex-wrap justify-center items-center md:flex-row">
            {logiciel.map((skillItem) => (
              <div
                key={skillItem.name}
                className="flex items-center gap-2 md:gap-4"
              >
                {/* Image affichée uniquement en mode tablette et desktop */}
                <div className="hidden md:block">
                  <Carte legende={skillItem.name} imageSrc={skillItem.url} />
                </div>
                {/* Nom du skill affiché sur tous les écrans */}
                <span className="text-lg font-medium md:hidden flex flex-row gap-2">
                  <Image
                    src={skillItem.url}
                    alt="logo"
                    width={20}
                    height={20}
                    className="justify-center items-center"
                  />{" "}
                  {skillItem.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
