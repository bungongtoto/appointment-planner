import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name" ></label>
        <input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <label htmlFor="email"></label>
        <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <label htmlFor="phone"></label>
        <input
          id="phone"
          name="phone"
          pattern="^(\+44\s?|0)(7\d{9}|1\d{8,9}|2\d{8,9}|3\d{8,9}|5\d{8,9}|8\d{8,9}|9\d{8,9})$"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)} placeholder="+447712345678 or 07712345678"
          required
        />
        <button type="submit">Add Contact</button>
      </form>
    </>
  );
};

