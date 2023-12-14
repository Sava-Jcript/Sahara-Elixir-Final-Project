import { FormProvider } from "../../contexts/FormContext";
import BookingForm from "../../components/Cart/BookingForm";
import styles from "./Booking.module.css";
// import navbar from "@/components/Navbar";
import { createContext, useReducer } from "react";
export default function Booking() {
  return (
    <div className={styles.body}>
      <FormProvider>

        <BookingForm />
      </FormProvider>
    </div>
  );
}
