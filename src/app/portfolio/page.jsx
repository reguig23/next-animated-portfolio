"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Experience from "@/data/experience";
import { Carrousel } from "@/components/carrousel";

const PortFolioPage = () => {
  const experiences = Experience;
  const [selectedId, setSelectedId] = React.useState(null);
  const expSelect = experiences.filter((exp) => exp.id == selectedId)[0];
  return (
    <motion.div
      className="h-full w-full flex justify-center items-center  "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="w-[70%] h-[90%]  mt-10 flex flex-col gap-3 md:gap-16 md:flex-wrap md:flex-row ">
        {experiences.map((experience) => (
          <motion.div
            key={experience.id}
            layoutId={experience.id}
            className="w-full md:w-1/2 lg:w-1/4 h-40 md:h-56 lg:h-72 flex flex-col justify-end rounded-2xl overflow-hidden shadow-lg m-2 relative"
            style={{
              backgroundImage: `url(${experience.backgroundImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => setSelectedId(experience.id)}
          >
            {/* Background blur */}
            <motion.div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-2xl"></motion.div>

            {/* Content */}
            <motion.h2 className="relative font-bold text-xl md:text-2xl lg:text-3xl text-gray-100 p-4 z-10">
              {experience.Name}
            </motion.h2>
          </motion.div>
        ))}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className="w-full md:w-[80%] h-full md:h-[90%] bg-slate-100 z-10 flex flex-col rounded-2xl shadow-lg absolute left-0 md:left-[10%] top-0 md:top-[5%] p-4 md:p-6 overflow-y-auto"
            >
              {/* Header */}
              <motion.div className="flex items-center justify-between w-full mb-4">
                <motion.h2 className="text-2xl md:text-4xl font-semibold text-gray-800 text-center flex-grow">
                  {expSelect.Name}
                </motion.h2>
                <motion.button
                  className="w-8 h-8 md:w-10 md:h-10 bg-red-500 text-lg font-bold text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  onClick={() => setSelectedId(null)}
                >
                  X
                </motion.button>
              </motion.div>

              {/* Citation */}
              <motion.div className="w-full h-auto justify-center items-center mb-4">
                <p className="text-center font-bold text-slate-700">
                  &#34;{expSelect.MyFeedBack}&#34;
                </p>
              </motion.div>

              {/* Body */}
              <motion.div className="flex flex-col gap-4 flex-grow overflow-y-auto">
                {/* Info */}
                <motion.div className="mb-4">
                  <motion.h5 className="text-lg md:text-xl font-bold text-gray-700 mb-2">
                    Informations
                  </motion.h5>
                  <motion.div className="text-gray-600 text-sm md:text-base">
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Rôle :</strong> {expSelect.role}
                      </li>
                      <li>
                        <strong>Entreprise :</strong> {expSelect.CompanyName}
                      </li>
                      <li>
                        <strong>Durée :</strong> {expSelect.durée}
                      </li>
                      <li>
                        <strong>Technologies :</strong> {expSelect.techno}
                      </li>
                      {expSelect.lienArticles.length > 0 && (
                        <li>
                          <strong>Article(s) de mes travaux :</strong>{" "}
                          {expSelect.lienArticles.map((article, index) => (
                            <a
                              key={index}
                              href={article}
                              download="articleIlyes.pdf"
                              className="text-blue-600 hover:underline"
                            >
                              Lien {index + 1}
                              {index < expSelect.lienArticles.length - 1 &&
                                ", "}
                            </a>
                          ))}
                        </li>
                      )}
                    </ul>
                  </motion.div>
                </motion.div>

                {/* Missions */}
                <motion.div className="mb-4">
                  <motion.h5 className="text-lg md:text-xl font-bold text-gray-700 mb-2">
                    Missions
                  </motion.h5>
                  <motion.div className="text-gray-600 text-sm md:text-base">
                    <ul className="list-disc list-inside space-y-1">
                      {expSelect.missions.map((mission, index) => (
                        <li key={index}>{mission}</li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
                
                {/* Photos */}
                <motion.div className="flex flex-col gap-4 h-[70vh]">
                  <motion.h5 className="text-lg md:text-xl font-bold text-gray-700">
                    Photos
                  </motion.h5>
                  {expSelect.isConfidentiel && (
                    <motion.div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 italic text-center rounded-lg p-4">
                      &#34;Ce projet est soumis à des restrictions de
                      confidentialité, je ne peux donc pas en partager les
                      images.&#34;
                    </motion.div>
                  )}
                  {!expSelect.isConfidentiel && expSelect.img.length > 0 && (
                    <motion.div className="example-container   overflow-hidden ">
                      <Carrousel images={expSelect.img} />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default PortFolioPage;
