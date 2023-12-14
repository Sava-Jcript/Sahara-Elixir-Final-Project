"use client"

import React from 'react';
import Image from 'next/image';
import styles from "./contact.module.css"
import sektion4 from "../../public/images/sektion4.svg";
import sektion12 from "../../public/images/sektion12.svg";


import { useState } from "react";
const Section0 = () => {
    const [newLogo] = useState(sektion4);
    const [newLogo1] = useState(sektion12);

  return (


   <div className={styles.Section1}>
   


    <section className={styles.myflex}>


    
    
    <div >
    <Image className={styles.HeroImage} src={newLogo1} alt="logo"></Image></div>
    
    
    
    </section>
    
</div>




  );
};

export default Section0;