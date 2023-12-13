"use client"

import React from 'react';
import Image from 'next/image';
import styles from "./footer.module.css"
import sektion4 from "../../public/images/sektion4.svg";
import footer from "../../public/images/footer.svg";
import Line4 from "../../public/images/line4.svg";
import Link from "next/link";
import {Button} from "@nextui-org/Button";
import { useState } from "react";


const Footer = () => {
    const [newLogo] = useState(sektion4);
    const [newLogo1] = useState(footer);
    const [newImage] = useState(Line4);
    const email = 'contact@sahara-elixir.dk';
  const subject = 'Inquiry%20from%20Website';

  return (


   <div className={styles.Section1}>
   

   <section className={styles.myflex}>


    
    
<div >
<Image className={styles.HeroImage} src={newLogo1} alt="logo"></Image></div>



</section>
    
    <div className={styles.btnFlex} >
<Link href="/contact">
      <Button className={styles.btn5} variant="solid">
        <span>Contact us</span>
  
      </Button>
    </Link>


</div>


<div className={styles.socialmedia}>
<Link  className={styles.linkArrow} href="https://www.linkedin.com/in/ali-merkouk/" target="_blank" rel="noopener">LinkedIn <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-1.16297" y="26.3848" width="28" height="28" rx="14" transform="rotate(-79.68 -1.16297 26.3848)" stroke="#E1E444" stroke-width="2"/>
<rect x="9.81863" y="9.32812" width="1.5" height="12.5" transform="rotate(-79.68 9.81863 9.32812)" fill="#E1E444" stroke="#E1E444" stroke-width="0.5"/>
<rect x="20.1465" y="22.3864" width="1.5" height="12.5" transform="rotate(-169.68 20.1465 22.3864)" fill="#E1E444" stroke="#E1E444" stroke-width="0.5"/>
<rect x="8.80441" y="20.4124" width="1.5" height="15.5371" transform="rotate(-124.773 8.80441 20.4124)" fill="#E1E444" stroke="#E1E444" stroke-width="0.5"/>
</svg>
</Link>
<Link  className={styles.linkArrow} href="https://www.instagram.com/linspecteur_3li/?hl=da" target="_blank" rel="noopener">Instagram<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-1.16297" y="26.3848" width="28" height="28" rx="14" transform="rotate(-79.68 -1.16297 26.3848)" stroke="#E1E444" stroke-width="2"/>
<rect x="9.81863" y="9.32812" width="1.5" height="12.5" transform="rotate(-79.68 9.81863 9.32812)" fill="#E1E444" stroke="#E1E444" stroke-width="0.5"/>
<rect x="20.1465" y="22.3864" width="1.5" height="12.5" transform="rotate(-169.68 20.1465 22.3864)" fill="#E1E444" stroke="#E1E444" stroke-width="0.5"/>
<rect x="8.80441" y="20.4124" width="1.5" height="15.5371" transform="rotate(-124.773 8.80441 20.4124)" fill="#E1E444" stroke="#E1E444" stroke-width="0.5"/>
</svg>
</Link>
<Link  className={styles.linkArrow}  href="https://www.behance.net/alimerkouk" target="_blank" rel="noopener">Behance<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-1.16297" y="26.3848" width="28" height="28" rx="14" transform="rotate(-79.68 -1.16297 26.3848)" stroke="#E1E444" stroke-width="2"/>
<rect x="9.81863" y="9.32812" width="1.5" height="12.5" transform="rotate(-79.68 9.81863 9.32812)" fill="#E1E444" stroke="#E1E444" stroke-width="0.5"/>
<rect x="20.1465" y="22.3864" width="1.5" height="12.5" transform="rotate(-169.68 20.1465 22.3864)" fill="#E1E444" stroke="#E1E444" stroke-width="0.5"/>
<rect x="8.80441" y="20.4124" width="1.5" height="15.5371" transform="rotate(-124.773 8.80441 20.4124)" fill="#E1E444" stroke="#E1E444" stroke-width="0.5"/>
</svg>
</Link>

</div>


<div className={styles.scrollingLink}>
<Link href="mailto:your-email@example.com?subject=Inquiry%20from%20Website" target="_blank" rel="noopener">
      <span className={styles.contactus}>contact@sahara-elixir.dk      </span>
      <span className={styles.contactus}>contact@sahara-elixir.dk      </span>
      <span className={styles.contactus}>contact@sahara-elixir.dk      </span>       <span className={styles.contactus}>contact@sahara-elixir.dk      </span>    <span className={styles.contactus}>contact@sahara-elixir.dk      </span>    <span className={styles.contactus}>contact@sahara-elixir.dk      </span>
      <span className={styles.contactus}>contact@sahara-elixir.dk      </span>
      <span className={styles.contactus}>contact@sahara-elixir.dk      </span>
      <span className={styles.contactus}>contact@sahara-elixir.dk      </span>       <span className={styles.contactus}>contact@sahara-elixir.dk      </span>    <span className={styles.contactus}>contact@sahara-elixir.dk      </span>    <span className={styles.contactus}>contact@sahara-elixir.dk      </span>
    </Link>
</div>
</div>




  );
};

export default Footer;