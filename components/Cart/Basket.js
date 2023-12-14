'use client'

import React, { useContext } from "react";
import { FormContext, DispatchContext } from "../../contexts/FormContext";
import styles from "../Cart/Basket.module.css";
export default function Basket() {
  const { formData } = useContext(FormContext);
  const dispatch = useContext(DispatchContext);

  return (
    <aside className={styles.aside}>
      <div className={styles.asideDiv}>
        <div className={styles.sectionDiv}>
          <p>
            <b className={styles.ticketsOption}>Order</b>
          </p>
          <div className={styles.basketDiv}>
      
          </div>
          <div className={styles.basketDiv}>
            <p>Amount:</p>
            <p className={styles.textInBasket}>
              {formData.ticketData.ticketQuantity}
            </p>
          </div>
          <div className={styles.basketDiv}>
            <p>Price:</p>
            <p className={styles.textInBasket}>
              {formData.ticketData.totalTicketPrice},-
            </p>
          </div>
        </div>
       
       
        <div className={styles.basketDiv}>
          <p>Shipping fee:</p>

          <p className={styles.textInBasket}>{formData.fixedFee},-</p>
        </div>
        <div className={styles.basketDiv}>
          <p>
            <b className={styles.basketTotal}>TOTAL PRICE:</b>
          </p>

          <p className={styles.textInBasket}>
            {formData.campData.campPrice +
              formData.ticketData.totalTicketPrice +
              formData.tentData.totalTentPrice +
              formData.fixedFee}
            ,-
          </p>
        </div>
      </div>
    </aside>
  );
}
