import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name"></label>
        <input
          id="name"
          name="name"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Name"
          required
        />

        <label htmlFor="date"></label>
        <input
          id="date"
          name="date"
          type="date"
          min={getTodayString()}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label htmlFor="time"></label>
        <input
          id="time"
          name="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <ContactPicker name="contacts" contacts={contacts} contact={contact} setContact={setContact} />

        <button type="submit">Add Appointment</button>
      </form>
    </>
  );
};
