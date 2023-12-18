import React from "react";
import Image from 'next/image';
import styles from "./Section2.module.css";
import image3 from "../../public/images/image3.svg";

export default function Section2() {
  return (
    <div className="bg-yellow-500"> {/* Background color added */}
      <div className="text-center p-4">
        <h2 className="text-2xl font-bold">Recipes & Inspirations</h2>
      </div>

      <div className="flex flex-wrap justify-around items-center"> {/* Responsive grid layout */}
        {/* ... Repeat for each recipe ... */}
        <div className="p-4 max-w-sm">
          <Image src={image3} alt="recipe image" width={300} height={300}/> {/* Responsive Image */}
          <p className="text-lg mt-2">Almond Butter & Argan Oil Smoothie Bowl</p>
        </div>
        {/* ... End Repeat ... */}
      </div>
    </div>
  );
}
