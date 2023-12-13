"use client"

import React from 'react';
import Image from 'next/image';
import styles from "./Cooperative-Section0.module.css"
import sektion4 from "../../public/images/sektion4.svg";
import sektion6 from "../../public/images/sektion6.svg";
import Line4 from "../../public/images/line4.svg";
import Footer from '@/components/Footer/page';
import { useState } from "react";
const Section0 = () => {
    const [newLogo] = useState(sektion4);
    const [newLogo1] = useState(sektion6);
    const [newImage] = useState(Line4);
  return (


   <div className={styles.Section1}>
   


    <section className={styles.myflex}>


    
    
    <div >
    <Image className={styles.HeroImage} src={newLogo1} alt="logo"></Image></div>
    
    
    
    </section>
    
    <div>
      <Footer/>
    </div>
</div>




  );
};

export default Section0;