


import React from 'react';
import Image from 'next/image';
import styles from "./Section0.module.css"
import image0 from "../../public/images/image0.svg";
import { useState } from "react";
const Section0 = () => {
    const [newLogo] = useState(image0);
  return (

    <div className={styles.backgrounds}>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={styles.neonEffekt}>Discover Pure Harmony in Every Jar&nbsp;</h1>
        
    </div>
    
    
    <div >
    <Image className={styles.neonEffekt} src={newLogo} alt="logo"></Image></div>
    
    
    
    </section>
</div>
  );
};

export default Section0;