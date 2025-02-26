import React from "react";
import { Tile } from "../tile/Tile";

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
        />

        <label htmlFor="date"></label>
        <input
          id="date"
          name="date"
          type="date"
          min={getTodayString()}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="time"></label>
        <input
          id="time"
          name="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <label htmlFor="contact-select"></label>
        <select
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          name="contact"
          id="contact-select"
        >
          <option value={""}>Choose Contact</option>
          {contacts?.map((contact, index) => (
            <option key={index} value={contact.name}>
              {contact.name}
            </option>
          ))}
        </select>

        <button type="submit">Add Appointment</button>
      </form>
    </>
  );
};
