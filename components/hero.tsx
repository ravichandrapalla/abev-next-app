import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const PartnerLogos = [
  { name: "Bionix", path: "/images/partner1.png" },
  { name: "Pakap", path: "/images/partner2.png" },
  { name: "django", path: "/images/partner3.png" },
  { name: "Strend", path: "/images/partner4.png" },
];

const Hero = () => {
  return (
    <div className="flex flex-col space-y-3 px-5 font-sans mt-3.5 border-b-1 border-b-gray-300">
      <p className="text-[#FF004D] text-xs font-semibold">
        #Get your 7 days free trail
      </p>
      <p className="text-3xl font-bold text-[#1D2B53]">
        Using your phone to payment & transfer money with Abev
      </p>
      <p className="text-[#616B7E] text-sm font-medium line leading-6 pt-1">
        Velit hendrerit sit auctor tempor sem. Congue mi tempor condimentum
        felis arcu, non cursus. Nulla pharetra porttitor sed platea arcu et leo
        odio.
      </p>
      <div className="flex items-center justify-start space-x-4 pt-2">
        <Button className="bg-[#00B3CC] p-4" size="lg">
          <p>Get Started Now</p> <ChevronRight />
        </Button>
        <Button className="bg-white text-[#00B3CC]" size="lg">
          <span>About Us</span> <ChevronRight />
        </Button>
      </div>
      <div className="relative w-full h-[500px] app-banner-image">
        <Image
          src="/images/banner2.png"
          fill
          priority
          className="object-contain"
          alt="hero-mobile-image"
        />
      </div>
      <p className="text-center text-[#1D2B53] text-sm font-medium">
        Trusted by world famous companies:
      </p>
      <div className="flex flex-wrap justify-between p-2">
        {PartnerLogos.map((logo) => (
          <div key={logo.name} className="w-32 h-16 relative">
            <Image
              src={logo.path}
              alt={logo.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
