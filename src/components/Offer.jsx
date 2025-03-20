import React from "react";
import { offer } from "../constants/content";
import { responsiveText } from "../styles/responsiveText";

export const Card = ({ title, icon, subtitle, index }) => (
  <div
    className={`offer-card relative min-h-36 sm:min-h-48 lg:min-h-56 text-center 
    rounded-2xl backdrop-blur-sm overflow-hidden border-tertiary border-[1px]
    hover:scale-110 transition-all duration-300 ease-in
    ${index % 2 === 0 ? "hover:rotate-3" : "hover:-rotate-3"}`}
  >
    <div className="flex w-full h-[70%] justify-center items-center px-4">
      {icon}
    </div>
    <div className="flex flex-col w-full h-[30%] justify-center items-center  px-2 bg-white/10">
      <h3 className="text-base lg:text-lg font-semibold ">{title}</h3>
      <p className="text-sm lg:text-base font-light text-light">{subtitle}</p>
    </div>
  </div>
);

const Offer = () => {
  return (
    <section id="offer" className="section">
      <div className="mb-10">
        <h2 className={`${responsiveText.sectionHeading}`}>{offer.title}</h2>
      </div>
      <div className="grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(310px,1fr))] justify-center">
        {offer.points.map((offer, index) => (
          <Card
            key={index}
            index={index}
            title={offer.title}
            icon={
              <offer.icon className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mt-2" />
            }
            subtitle={offer.subtitle}
          ></Card>
        ))}
      </div>
      <p className={`${responsiveText.sectionContent} text-center p-6 mt-8 `}>
        {offer.description}
      </p>
    </section>
  );
};

export default Offer;
