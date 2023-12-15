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
      
      
      
      
      
      

<Link href="/Cooperative-section">
      <Button className={styles.nextButton}  variant="solid">
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
      
      
      

  );
}
