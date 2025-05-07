import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col space-y-4 px-5 font-sans">
      <p className="text-red-700 text-xs">#Get your 7 days free trail</p>
      <p className="text-3xl font-semibold">
        Using your phone to payment & transfer money with Abev
      </p>
      <p>
        Velit hendrerit sit auctor tempor sem. Congue mi tempor condimentum
        felis arcu, non cursus. Nulla pharetra porttitor sed platea arcu et leo
        odio.{" "}
      </p>
      <div className="flex items-center justify-start space-x-4">
        <Button className="bg-[#008FA3]">
          <span>Get Started Now</span> <ChevronRight />
        </Button>
        <Button className="bg-[#181A1B]">
          <span>About Us</span> <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
