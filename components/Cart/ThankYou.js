'use client'

import React from "react";
import { useRouter } from "next/router";
import styles from "./ThankYou.module.css"; // Adjust the path as necessary
import Link from "next/link";
import {Button} from "@nextui-org/react";

export default function TicketSelection() {


  return (
    <div className={styles.wrapper}>
      <h1>Thank you!</h1>
      <h2>On behalf of our family, we would like to thank you for your purchase. If you have any questions or feedback, we're here to help.</h2>
      <h2>We sent an email confirmation to your address.</h2>
      
      
      
      
      
      

<Link href="/">
      <Button className={styles.nextButton}  variant="solid">
        <span> Home</span>
       
      </Button>
    </Link>
</div>
      
      
      

  );
}
