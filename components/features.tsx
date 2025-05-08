import Image from "next/image";
import React from "react";

const Features = [
  {
    featureTitle: "Key Features",
    featureDescription: "Most probably inluded best features ever",
    cards: [
      {
        cardImg: "/icons/stopwatch.png",
        cardTitle: "Fast Start",
        cardDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat feu sagittis, donec.",
      },
      {
        cardImg: "/icons/credit-card.png",
        cardTitle: "Secure Payments",
        cardDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat feu sagittis, donec.",
      },
      {
        cardImg: "/icons/exchange.png",
        cardTitle: "Multicurrency Account",
        cardDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat feu sagittis, donec.",
      },
      {
        cardImg: "/icons/updated.png",
        cardTitle: "Regular Updates",
        cardDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat feu sagittis, donec.",
      },
      {
        cardImg: "/icons/brain.png",
        cardTitle: "Intelligent Optimizations",
        cardDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat feu sagittis, donec.",
      },
      {
        cardImg: "/icons/secure-shield.png",
        cardTitle: "Fully Secured",
        cardDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat feu sagittis, donec.",
      },
    ],
  },
];

const FeaturesComponent = () => {
  return (
    <div className="flex flex-col p-2 space-y-4 justify-center text-center bg-[#F3FEFF]">
      <p className="">{Features[0].featureTitle}</p>
      <p className="text-2xl font-bold">{Features[0].featureDescription}</p>
      {Features[0].cards.map((card) => {
        return (
          <div
            key={card.cardTitle}
            className="flex flex-col space-y-3 justify-start text-start border-1 border-gray-200 rounded-xl px-6 py-6"
          >
            <div className=" h-[60px] w-[60px] inline-flex items-center justify-center bg-white border-1 rounded-xl">
              <Image
                src={card.cardImg}
                alt="card-image"
                height={20}
                width={20}
                className="text-[#00B3CC]"
                color="#00B3CC"
              />
            </div>

            <p className="text-[#1D2B53] font-bold">{card.cardTitle}</p>
            <p className="text-[#616B7E]">{card.cardDescription}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesComponent;
