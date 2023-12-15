


import React from "react";
import Image from 'next/image';
import styles from "./Section1.module.css"
import image0 from "../../public/images/image0.svg";
import sektion1 from "../../public/images/sektion1.svg";
import sektion2 from "../../public/images/sektion2.svg";
import sektion3 from "../../public/images/sektion3.svg";
import sektion7 from "../../public/images/sektion7.svg";
import sektion8 from "../../public/images/sektion8.svg";
import sektion9 from "../../public/images/sektion9.svg";
import sektion10 from "../../public/images/sektion10.svg";
import Link from "next/link";
import {Button} from "@nextui-org/react";

import { useState } from "react";
export default function  Section1(){
    const [newLogo] = useState(image0);
    const [newImage] = useState(sektion1);
    const [newImage1] = useState(sektion2);
    const [newImage2] = useState(sektion7);
    const [newImage3] = useState(sektion8);
    const [newImage4] = useState(sektion9);
    const [newImage5] = useState(sektion10);


  return (




    
<div>



<div className={styles.Section2}>

<div >
<Image className={styles.HeroImage5} src={newImage2} alt="logo"></Image></div>


<div className={styles.btnFlex} >
<Link href="/booking">
      <Button className={styles.btn5} variant="solid">
        <span>Show Product</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.33333 1.5H22V19M22 1.5L2 22.5L22 1.5Z"
            stroke="black"
            stroke-width="3"
            stroke-linecap="square"
          />
        </svg>
      </Button>
    </Link>
</div>

</div>


<div className={styles.Section2}>

<div >
<Image className={styles.HeroImage6} src={newImage3} alt="logo"></Image></div>


<div className={styles.btnFlex} >
<Link href="/booking">
      <Button className={styles.btn6} variant="solid">
        <span>Show Product</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.33333 1.5H22V19M22 1.5L2 22.5L22 1.5Z"
            stroke="black"
            stroke-width="3"
            stroke-linecap="square"
          />
        </svg>
      </Button>
    </Link>
</div>

</div>


<div className={styles.Section2}>

<div >
<Image className={styles.HeroImage7} src={newImage4} alt="logo"></Image></div>


<div className={styles.btnFlex} >
<Link href="/booking">
      <Button className={styles.btn7} variant="solid">
        <span>Show Product</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.33333 1.5H22V19M22 1.5L2 22.5L22 1.5Z"
            stroke="black"
            stroke-width="3"
            stroke-linecap="square"
          />
        </svg>
      </Button>
    </Link>
</div>

</div>



<div className={styles.Section2}>

<div >
<Image className={styles.HeroImage8} src={newImage5} alt="logo"></Image></div>


<div className={styles.btnFlex} >
<Link href="/booking">
      <Button className={styles.btn8} variant="solid">
        <span>Show Product</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.33333 1.5H22V19M22 1.5L2 22.5L22 1.5Z"
            stroke="black"
            stroke-width="3"
            stroke-linecap="square"
          />
        </svg>
      </Button>
    </Link>
</div>

</div>



   <div className={styles.Section2}>

    <div >
    <Image className={styles.HeroImage1} src={newImage} alt="logo"></Image></div>
    
   
    <div className={styles.btnFlex} >
    <Link href="/Cooperative-section">   <Button className={styles.btn0} variant="solid">
    learn more
  </Button> </Link>
  </div>
    
</div>


<div className={styles.Section3}>

<div >
<Image className={styles.HeroImage2} src={newImage1} alt="logo"></Image></div>


<div className={styles.btnFle1} >
<Link href="/arganThree-section"> <Button className={styles.btn1} variant="solid">
learn more
</Button> </Link>
</div>

</div>





</div>



  );
};

