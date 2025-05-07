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
      <div style={{ position: "relative", width: "100%", height: "500px" }}>
        <Image
          src="/images/banner2.png"
          fill
          priority
          className="object-contain"
          alt="hero-mobile-image"
        />
      </div>
      <p className="text-center">Trusted by world famous companies:</p>
      <div className="flex flex-wrap gap-4 justify-center">
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
