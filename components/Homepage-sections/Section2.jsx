import React from "react";
import Image from 'next/image';
import styles from "./Section2.module.css";
import dots from "../../public/images/dots.svg";
import Line2 from "../../public/images/Line2.svg";
import sektion1 from "../../public/images/sektion1.svg";
import sektion2 from "../../public/images/sektion2.svg";
import sektion3 from "../../public/images/sektion3.svg";
import image3 from "../../public/images/image3.svg";
import image4 from "../../public/images/image4.svg";
import image5 from "../../public/images/image5.svg";
import image6 from "../../public/images/image6.svg";

import { Button } from "@nextui-org/Button";

import { useState } from "react";

export default function Section2() {
  const [newdots] = useState(dots);
  const [newImage3] = useState(image3);
  const [newImage5] = useState(image5);
  const [newImage4] = useState(image4);
  const [newImage6] = useState(image6);
  const [newLine] = useState(Line2);
  

  return (
    <div>
      <div className={styles.Section4}>
        <div className={styles.heading1}>
          <div className={styles.headingTitlte}>Recipes & Inspirations</div>
          <div>
            <Image className={styles.HeroDots} src={newdots} alt="logo" />
          </div>
        </div>
      </div>


      <div className={styles.section4Flex}>
        <div className={styles.section4FlexZone}>
          <div className={styles.section4FlexZoneImage}>
            { <Image className={styles.HeroDots1} src={newImage5} alt="logo" />}
          </div>
          <div className={styles.section4FlexZoneText}>
            {<p>Almond Butter & Argan Oil Smoothie Bowl</p>}
            { <Image className={styles.HeroDots1} src={newLine} alt="logo" />}

          </div>
        </div>




        <div className={styles.section4FlexZone2}>
          <div className={styles.section4FlexZoneImage2}>
          
            { <Image className={styles.HeroDots1} src={newImage4} alt="logo" />}
          </div>
          <div className={styles.section4FlexZoneText2}>
             {<p>Almond Butter & Argan Oil Smoothie Bowl</p>}
             { <Image className={styles.HeroDots1} src={newLine} alt="logo" />}
          </div>
        </div>



        <div className={styles.section4FlexZone3}>
          <div className={styles.section4FlexZoneImage3}>
            { <Image className={styles.HeroDots1} src={newImage6} alt="logo" />}
          </div>
          <div className={styles.section4FlexZoneText3}>
             {<p>Almond Butter & Argan Oil Smoothie Bowl</p>}
             { <Image className={styles.HeroDots1} src={newLine} alt="logo" />}
          </div>
        </div>

        <div className={styles.section4FlexZone4}>
          <div className={styles.section4FlexZoneImage4}>
            { <Image className={styles.HeroDots1} src={newImage3} alt="logo" />}
          </div>
          <div className={styles.section4FlexZoneText4}>
             {<p>Almond Butter & Argan Oil Smoothie Bowl</p>}
             { <Image className={styles.HeroDots1} src={newLine} alt="logo" />}
          </div>
        </div>
      </div>
    </div>
  );
}
