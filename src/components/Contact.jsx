import React from "react";
import { EnvelopeCanvas, ContactForm } from "../components/index";
import { responsive } from "../responsive";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h3 className={`${responsive.sectionHeading}`}>Kontakt</h3>
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
