import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const PaymentFeatures = [
  { feature: "Verification for 1 business day" },
  { feature: "No setup fee, no hidden fees" },
  { feature: "Transparant payments details" },
];

const Services = () => {
  return (
    <div className="mt-6 flex flex-col space-y-3 p-3">
      <p className="text-[#3DE7FF] text-sm font-semibold">
        Send & Receive Payments
      </p>
      <p className="font-bold text-2xl">
        Online payments for any business setup
      </p>
      {PaymentFeatures.map((feature) => {
        return (
          <div
            key={feature.feature}
            className="flex space-x-2 items-center justify-start"
          >
            <Image
              alt="correct-icon"
              src="/icons/tick.png"
              width={25}
              height={25}
            />
            <p className="font-medium">{feature.feature}</p>
          </div>
        );
      })}
      <div>
        <Button className="bg-[#00B3CC] p-4" size="lg">
          <p>Get Started Now</p> <ChevronRight />
        </Button>
      </div>
      <div className="p-2 h-[240px] overflow-hidden">
        <Image
          alt="overview-1"
          src="/images/overview3.png"
          width={500}
          height={50}
        />
      </div>
      <div className="p-2 h-[240px] overflow-hidden">
        <Image
          alt="overview-1"
          src="/images/overview4.png"
          width={500}
          height={50}
        />
      </div>
    </div>
  );
};

export default Services;
