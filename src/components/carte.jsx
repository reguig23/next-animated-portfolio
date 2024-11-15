"use client";
import React from "react";
import Image from "next/image";

const Carte = ({ imageSrc, legende }) => {
  return (
    <div
      className="max-w-xs rounded overflow-hidden shadow-md flex flex-col  justify-center items-center hover:scale-105 transition-transform duration-300 border-grisFonce border-2 "
      style={{ "backgroundColor": "rgba(224, 219, 204, 0.8)" }}
    >
      <Image
        src={imageSrc}
        alt="logo"
        width={70}
        height={70}
        className="justify-center items-center"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold font-raleway text-gray-800 text-center">
          {legende}
        </h3>
      </div>
    </div>
  );
};

export default Carte;
