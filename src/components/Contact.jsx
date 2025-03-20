import React from "react";
import { EnvelopeCanvas, ContactForm } from "../components/index";
import { responsiveText } from "../styles/responsiveText";
import { contact } from "../constants/content";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className={`${responsiveText.sectionHeading} section-title`}>
        {contact.title} 
        <span>{contact.tagline}</span>
      </h2>
      <div className="flex flex-col lg:flex-row justify-around">
        <div className="w-full lg:w-[40%]">
          <ContactForm />
        </div>
        <div className="w-full lg:w-[50%]">
          <EnvelopeCanvas />
        </div>
      </div>
    </section>
  );
};

export default Contact;
