"use client"

import { useContext, useEffect } from "react";
import { FormContext, DispatchContext } from "../../contexts/FormContext";
import TicketSelection from "../Cart/TicketSelection";

import Personalinfo from "../Cart/Personalinfo";
import CardDetails from "../Cart/CardDetails";
import ThankYou from "../Cart/ThankYou";
import Basket from "../Cart/Basket";

import styles from "../Cart/BookingForm.module.css";


export default function BookingForm() {
  const { currentStep, formData, spots, expirationDate } = useContext(FormContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    fetch("https://bittersweet-painted-willow.glitch.me/reserve-spot")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SET_AREAS",
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [dispatch]);

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return <TicketSelection />;
     
        
      case 2:
        return <Personalinfo />;
      case 3:
        return <CardDetails />;
      case 4:
        return <ThankYou />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.wrapper}>
      {currentStep < 5 && expirationDate }
      {renderFormStep()}
      {currentStep < 5 && formData.modal }
      <Basket />
    </div>
  );
}
