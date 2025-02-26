import React from "react";

export const ContactPicker = ({name, contacts, contact, setContact}) => {
  return (
    <>
      <select name={name} value={contact} onChange={(e) => setContact(e.target.value)} required >
        <option value={""}>No Contact Selected</option>
        {
          contacts?.map((contact, index) => <option key={index} value={contact.name}>{contact.name}</option>)
        }
      </select>
    </>
  );
};
