import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import isDuplicateInList from "../../utils/isDuplicate";

export const ContactsPage = ({ contacts, addNewContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("");
  const [isDuplicateName, setIsDuplicateName] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!isDuplicateName) {
      addNewContact(name, phoneNumber, email);
      setName("");
      setPhoneNumber("");
      setEmail("");
      setIsDuplicateName(false);
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    if (name) {
      const contactNameList = contacts.map(contact => contact.name);
      setIsDuplicateName(isDuplicateInList(contactNameList, name));
    }
  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} phoneNumbe={phoneNumber} email={email} setName={setName} setPhoneNumber={setPhoneNumber} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
