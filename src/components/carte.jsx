"use client";
import React from 'react';
import Image from 'next/image';

const Carte = ({ imageSrc, legende }) => {
  return (

      <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300">
      <Image src={imageSrc} alt='logo' width={40} height={40} className="w-full h-28 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 text-center">{legende}</h3>
      </div>
    </div>
    
  );
}

export default Carte;