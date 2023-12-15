"use client"

import React from 'react';
import Image from 'next/image';
import styles from "./about.module.css"
import Footer from '@/components/Footer/page';
import sektion11 from "../../public/images/sektion11.svg";



import { useState } from "react";
const Section0 = () => {

    const [newLogo1] = useState(sektion11);

    const email = 'your-email@example.com';
  const subject = 'Inquiry%20from%20Website';

  return (


   <div className={styles.Section1}>
   


    <section className={styles.myflex}>


    
    
    <div >
    <Image className={styles.HeroImage} src={newLogo1} alt="logo"></Image></div>
    
    
    
    </section>
    <Footer/>
   
</div>




  );
};

export default Section0;