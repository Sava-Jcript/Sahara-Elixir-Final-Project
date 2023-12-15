


import React from 'react';
import Image from 'next/image';
import styles from "./Section0.module.css"
import image0 from "../../public/images/image0.svg";


import { useState } from "react";
const Section0 = () => {
    const [newLogo] = useState(image0);

  return (


   <div className={styles.Section1}>
   


    <section className={styles.myflex}>
    <div>
        <h1 className={styles.HeroText}>Discover Pure Harmony in Every Jar&nbsp;</h1>
        
    </div>

    
    
    <div >
    <Image className={styles.HeroImage} src={newLogo} alt="logo"></Image></div>
    
    
    
    </section>
    <div  className={styles.HeroSmallText}> <p>    Each jar is a masterpiece crafted with ethically sourced ingredients—honey and argan oil—bringing you the pure essence of nature in every spoonful</p>

    </div>



<div>

<p className={styles.ScrollText}>Scroll down
</p>
</div>

</div>




  );
};

export default Section0;