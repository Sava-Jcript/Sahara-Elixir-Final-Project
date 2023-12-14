"use client"

import React from 'react';
import Image from 'next/image';
import styles from "./Cooperative-Section0.module.css"
import sektion4 from "../../public/images/sektion4.svg";
import sektion5 from "../../public/images/sektion5.svg";

import Footer from '@/components/Footer/page';
import { useState } from "react";
const Section0 = () => {
    const [newLogo] = useState(sektion4);
    const [newLogo1] = useState(sektion5);

  return (


   <div className={styles.Section1}>
   


    <section className={styles.myflex}>


    
    
    <div >
    <Image className={styles.HeroImage} src={newLogo} alt="logo"></Image></div>
    
    
    
    </section>
    <div  className={styles.HeroSmallText}> 
    </div>

  

<div>


</div>
<div >
    <Image className={styles.HeroImage} src={newLogo1} alt="logo"></Image></div>
    <div>
    <Footer/>
    </div>
</div>




  );

};

export default Section0;