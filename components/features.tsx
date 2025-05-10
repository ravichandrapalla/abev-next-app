import Image from "next/image";

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
    <div className="flex flex-col p-2 space-y-4 justify-center text-center bg-[#F3FEFF] mt-6 pt-12">
      <div className="mb-10">
        <p className="text-[#00B3CC] text-[13px] font-semibold tracking-wider mb-2">
          {Features[0].featureTitle}
        </p>
        <p className="text-2xl font-bolder text-[#1D2B53] font-bold ">
          {Features[0].featureDescription}
        </p>
      </div>

      {Features[0].cards.map((card) => {
        return (
          <div
            data-aos="fade-up"
            data-aos-duration="7000"
            key={card.cardTitle}
            className="flex flex-col space-y-3 justify-start text-start border-1 border-gray-200 rounded-md px-8 py-6 mb-12 group"
          >
            <div className="group-hover:bg-[#00B3CC] transition-colors duration-300 h-[60px] w-[60px] inline-flex items-center justify-center bg-white border-1 rounded-2xl  border-[#00B3CC]">
              <Image
                src={card.cardImg}
                alt="card-image"
                height={27}
                width={27}
                className="text-[#00B3CC]"
              />
            </div>

            <p className="text-[#1D2B53] text-[17px] tracking-wide font-bold">
              {card.cardTitle}
            </p>
            <p className="text-[#616B7E] text-[14px] font-medium">
              {card.cardDescription}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesComponent;
