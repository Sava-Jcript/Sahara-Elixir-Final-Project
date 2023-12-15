

'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import styles from "./contact.module.css";
import sektion4 from "../../public/images/sektion4.svg";
import sektion12 from "../../public/images/sektion12.svg";

const Section0 = () => {
    const [newLogo] = useState(sektion4);
    const [newLogo1] = useState(sektion12);

    return (
        <div className={styles.Section1}>
            <section className={styles.myflex}>
                <div>
                    <Image className={styles.HeroImage} src={newLogo1} alt="logo" />
                    <div className={styles.contactForm}>
                    <form>
                        <input type="text" name="name" placeholder="Your Name" />
                        <input type="email" name="email" placeholder="Your Email" />
                        <textarea name="message" placeholder="Your Message"></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
                </div>


            
            </section>
        </div>
    );
};

export default Section0;
