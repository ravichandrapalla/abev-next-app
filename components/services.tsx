import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const PaymentFeatures = [
  {
    headerTitle: "Send & Receive Payments",
    headerName: "Online payments for any business setup",
    features: [
      {
        feature: "Verification for 1 business day",
        imgPath: "/icons/tick.png",
        delay: 600,
      },
      {
        feature: "No setup fee, no hidden fees",
        imgPath: "/icons/tick.png",
        delay: 800,
      },
      {
        feature: "Transparant payments details",
        imgPath: "/icons/tick.png",
        delay: 1000,
      },
    ],
    overViewImgPath: ["/images/overview3.png", "/images/overview4.png"],
  },
  {
    headerTitle: "Minimal Dashboard",
    headerName: "The world's most powerful & easy-to-use",
    features: [
      {
        feature: "Fastest way to integrate payments",
        imgPath: "/icons/tick.png",
        delay: 600,
      },
      {
        feature: "Get instant notifications",
        imgPath: "/icons/tick.png",
        delay: 800,
      },
      {
        feature: "Support assistance with integration",
        imgPath: "/icons/tick.png",
        delay: 1000,
      },
    ],
    overViewImgPath: ["/images/overview5.png", "/images/overview6.png"],
  },
];

const Services = () => {
  return PaymentFeatures.map((item) => (
    <div key={item.headerName} className="mt-6 flex flex-col space-y-3 p-3">
      <p className="text-[#3DE7FF] text-sm font-semibold">{item.headerTitle}</p>
      <p className="font-bold text-2xl">{item.headerName}</p>
      {item.features.map((feature) => {
        return (
          <div
            key={feature.feature}
            className="flex space-x-2 items-center justify-start"
            data-aos="fade-up"
            data-aos-duration={`${feature.delay}`}
          >
            <Image
              alt="correct-icon"
              src={feature.imgPath}
              width={25}
              height={25}
            />
            <p className="font-medium">{feature.feature}</p>
          </div>
        );
      })}
      <div>
        <Button
          className="bg-[#00B3CC] p-4"
          size="lg"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p>Get Started Now</p> <ChevronRight />
        </Button>
      </div>
      {item.overViewImgPath.map((i) => (
        <div
          key={i}
          className="p-2  overflow-hidden"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <Image alt="overview-1" src={i} width={500} height={50} />
        </div>
      ))}
    </div>
  ));
};

export default Services;
