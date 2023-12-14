"use client"

import { useContext } from "react";
import { FormContext, DispatchContext } from "../../contexts/FormContext";
import styles from "../Cart/AttendeeInfo.module.css";

export default function AttendeeInfo() {
  const { formData } = useContext(FormContext);
  const dispatch = useContext(DispatchContext);
  const { attendees } = formData;

  const handleFieldChange = (index, field, value) => {
    dispatch({
      type: "UPDATE_ATTENDEE_FIELD",
      payload: { index, field, value },
    });
  };

  return (
    <form className={styles.allAttendees}>
      {attendees.map((attendee, index) => (
        <div key={index} className={styles.attendeeDiv}>

          <div className={styles.oneAttendee}>
            <label className={styles.inputFieldLabel}>
              First name *
              <input
                className={styles.inputField}
                type="text"
                required
                placeholder="Gullan"
                value={attendee.firstName}
                onChange={(e) =>
                  handleFieldChange(index, "firstName", e.target.value)
                }
              />
            </label>
            <label className={styles.inputFieldLabel}>
              Last name *
              <input
                className={styles.inputField}
                type="text"
                required
                placeholder="Chrstiansen"
                value={attendee.lastName}
                onChange={(e) =>
                  handleFieldChange(index, "lastName", e.target.value)
                }
              />
            </label>
            <label className={styles.inputFieldLabel}>
              Email *
              <input
                className={styles.inputField}
                type="email"
                required
                placeholder="gullan.christiansen@gmail.com"
                value={attendee.email}
                onChange={(e) =>
                  handleFieldChange(index, "email", e.target.value)
                }
              />
            </label>
            <label className={styles.inputFieldLabel  }>
              Street *
              <input
                className={styles.inputField}
                type="email"
                required
                placeholder="Kongens Nytorv"
                value={attendee.email}
                onChange={(e) =>
                  handleFieldChange(index, "email", e.target.value)
                }
              />
            </label><label className={styles.inputFieldLabel}>
            Number *
            <input
              className={styles.inputField1}
              type="email"
              required
              placeholder="13"
              value={attendee.email}
              onChange={(e) =>
                handleFieldChange(index, "email", e.target.value)
              }
            />
          </label>
          <label className={styles.inputFieldLabel}>
              city *
              <input
                className={styles.inputField}
                type="email"
                required
                placeholder="Copenhagen"
                value={attendee.email}
                onChange={(e) =>
                  handleFieldChange(index, "email", e.target.value)
                }
              />
            </label>
            <label className={styles.inputFieldLabel}>
              Postal code *
              <input
                className={styles.inputField1}
                type="email"
                required
                placeholder="2300"
                value={attendee.email}
                onChange={(e) =>
                  handleFieldChange(index, "email", e.target.value)
                }
              />
            </label>
          </div>
        </div>
      ))}
    </form>
  );
}
