"use client"

import React from 'react';
import Image from 'next/image';
import styles from "./Cooperative-Section0.module.css"
import sektion4 from "../../public/images/sektion4.svg";
import sektion5 from "../../public/images/sektion5.svg";
import Line4 from "../../public/images/line4.svg";

import { useState } from "react";
const Section0 = () => {
    const [newLogo] = useState(sektion4);
    const [newLogo1] = useState(sektion5);
    const [newImage] = useState(Line4);
  return (


   <div className={styles.Section1}>
   


    <section className={styles.myflex}>


    
    
    <div >
    <Image className={styles.HeroImage} src={newLogo} alt="logo"></Image></div>
    
    
    
    </section>
    <div  className={styles.HeroSmallText}> <p>    Each jar is a masterpiece crafted with ethically sourced ingredients—honey and argan oil—bringing you the pure essence of nature in every spoonful</p>

    </div>

    <div className={styles.HeroLine}>
<Image className={styles.HeroLine} src={newImage} alt="logo"></Image></div>

<div>

<p className={styles.ScrollText}>Scroll down
</p>
</div>
<div >
    <Image className={styles.HeroImage} src={newLogo1} alt="logo"></Image></div>
</div>




  );
};

export default Section0;