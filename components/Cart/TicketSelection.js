/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useContext, useState } from "react";
import { FormContext, DispatchContext } from "../../contexts/FormContext";
import styles from "../Cart//TicketSelection.module.css";
import pist1 from "../../public/images/pist1.png"
import Image from "next/image";



export default function TicketSelection() {
  const { formData } = useContext(FormContext);
  const dispatch = useContext(DispatchContext);
const [Image1]= useState (pist1); 
  const handleNext = () => {
    dispatch({ type: "NEXT_STEP" });
  };

  const handleTicketTypeChange = (e) => {
    const ticketType = e.target.value;
    dispatch({
      type: "UPDATE_FIELD",
      payload: {
        section: "ticketData",
        field: "ticketType",
        value: ticketType,
      },
    });
    dispatch({
      type: "CALCULATE_TICKET_PRICE",
    });
  };

  const handleTicketQuantityChange = (e) => {
    const ticketQuantity = Number(e.target.value);
    if (ticketQuantity >= 1) {
      dispatch({
        type: "UPDATE_FIELD",
        payload: {
          section: "ticketData",
          field: "ticketQuantity",
          value: ticketQuantity,
        },
      });
      
    }
  };

  return (
    <div className={styles.wrapper}>
 




<Image className={styles.HeroImage5} src={Image1} alt="logo"></Image>

<p4>Argan Almond Bliss </p4>


      <div className={styles.ticketsTypes}>
        <label className={styles.radioButton}>
          <input
            type="radio"
            value="VIP"
            checked={formData.ticketData.ticketType === "VIP"}
            onChange={handleTicketTypeChange}
          />
          Standard Portion 250g 
        </label>
        <label className={styles.radioButton}>
          <input
            type="radio"
            value="Regular"
            checked={formData.ticketData.ticketType === "Regular"}
            onChange={handleTicketTypeChange}
          />
          Family Portion 500g 
        </label>
      </div>
      <div className={styles.ticketsQuantity}>
        <label className={styles.inputFieldLabel}>
          Quantity
          <input
            className={styles.inputField}
            type="number"
            value={formData.ticketData.ticketQuantity}
            min={1}
            onChange={handleTicketQuantityChange}
          />
        </label>

        <button className={styles.nextButton} onClick={handleNext}>
          Next &nbsp; →
        </button>
      </div>
    
      <div className={styles.ticketInfo}>
        <div className={styles.section}>
          <h2>nutritions /100g:</h2>
          <p>Calories:                      700 kcal</p>
          <p>
          Protein:                        20 g
          </p>
          <p>Fat:                              55 g</p>
          <p>Carbohydrates:           20g</p>
          <p>
          Salt:                             1g
          </p>
       
        </div>
        <div className={styles.section}>
          <h2>ingredients:</h2>
          <p>Organic Almonds:                 74%</p>
          <p>Moroccan Argan Oil:           10%</p>
          <p>Organic Thyme Honey:         10%</p>
          <p>Sesame oil:                            5%</p>
          <p>Sea Salt:                                1%</p>
        </div>
      </div>
    </div>
  );
}
