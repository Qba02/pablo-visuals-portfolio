import React from "react";
import { responsive } from "../responsive";
import { EnvelopeCanvas } from "../components/index";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="flex flex-col lg:flex-row justify-around">
        <form className="flex flex-col w-full lg:w-[40%] p-4 gap-8 justify-around">
          <h3 className={`${responsive.sectionHeading}`}>Skontaktuj się</h3>
          <input
            type="text"
            name="name"
            placeholder="Imię"
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="contact-input"
          />
          <textarea
            rows="5"
            type="text"
            name="message"
            placeholder="Wiadomość"
            className="contact-input"
          />
          <button
            type="submit"
            className="w-full h-14 bg-light mt-6 text-dark font-medium text-lg"
          >
            Wyślij
          </button>
        </form>
        <div className="w-full lg:w-[50%]">
          <EnvelopeCanvas />
        </div>
      </div>
    </section>
  );
};

export default Contact;
