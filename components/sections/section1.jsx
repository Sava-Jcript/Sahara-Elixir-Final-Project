


import React from "react";
import Image from 'next/image';
import styles from "./Section1.module.css"
import image0 from "../../public/images/image0.svg";
import sektion1 from "../../public/images/sektion1.svg";
import sektion2 from "../../public/images/sektion2.svg";
import sektion3 from "../../public/images/sektion3.svg";

import {Button} from "@nextui-org/Button";

import { useState } from "react";
export default function  Section1(){
    const [newLogo] = useState(image0);
    const [newImage] = useState(sektion1);
    const [newImage1] = useState(sektion2);
    const [newImage2] = useState(sektion3);


  return (

<div>
   <div className={styles.Section2}>

    <div >
    <Image className={styles.HeroImage1} src={newImage} alt="logo"></Image></div>
    
   
    <div className={styles.btnFlex} >
    <Button className={styles.btn0} variant="solid">
    learn more
  </Button> 
  </div>
    
</div>


<div className={styles.Section3}>

<div >
<Image className={styles.HeroImage2} src={newImage1} alt="logo"></Image></div>


<div className={styles.btnFle1} >
<Button className={styles.btn1} variant="solid">
learn more
</Button> 
</div>

</div>





</div>



  );
};

