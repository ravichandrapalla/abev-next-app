import React from "react";

const TestimonialsMock = [
  {
    headerTitle: "Testimonials",
    headerName: "Here's what our amazing clients are saying",
    quotes: [
      {
        short: "I never really lost it to begin with",
        long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna facilisi viverra felis eleifend ornare urna. Eu mauris, velit volutpat massa volutpat. Risus pellentesque felis nisl ut laoreet euismod vel, integer. Massa sodales lorem nisi, sed massa volutpat.",
        userBanner: "",
      },

      {
        short: "this is soo cool",
        long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna facilisi viverra felis eleifend ornare urna. Eu mauris, velit volutpat massa volutpat. Risus pellentesque felis nisl ut laoreet euismod vel, integer. Massa sodales lorem nisi, sed massa volutpat.",
        userBanner: "",
      },
      {
        short: "fantastic product",
        long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna facilisi viverra felis eleifend ornare urna. Eu mauris, velit volutpat massa volutpat. Risus pellentesque felis nisl ut laoreet euismod vel, integer. Massa sodales lorem nisi, sed massa volutpat.",
        userBanner: "",
      },
    ],
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col space-y-4 px-2 text-center">
      <p>{TestimonialsMock[0].headerTitle}</p>
      <p>{TestimonialsMock[0].headerName}</p>
      {TestimonialsMock[0].quotes.map((item) => {
        return <div key={item.short}></div>;
      })}
    </div>
  );
};

export default Testimonials;
