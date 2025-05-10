import { Check, ChevronRight, X } from "lucide-react";
import { Button } from "./ui/button";

const PricingData = [
  {
    title: "Small Team",
    description: "Powerful & awesome elements",
    price: 49,
    interval: "month",
    buttonText: "Purchase Plan",
    features: [
      { name: "Up to 10 Website", included: true },
      { name: "Lifetime Free Support", included: true },
      { name: "10 GB Dedicated Hosting Free", included: true },
      { name: "24/7 Support", included: true },
      { name: "SEO Optimized", included: true },
      { name: "Live Support", included: false },
    ],
  },
  {
    title: "Business Plan",
    description: "Powerful & awesome elements",
    price: 69,
    interval: "month",
    buttonText: "Purchase Plan",
    features: [
      { name: "Up to 80 Website", included: true },
      { name: "Lifetime Free Support", included: true },
      { name: "80 GB Dedicated Hosting Free", included: true },
      { name: "24/7 Support", included: true },
      { name: "SEO Optimized", included: true },
      { name: "Live Support", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <div className=" mx-auto pt-6 mb-6">
      <div className="text-center mb-8">
        <h3 className="font-bold text-[13px] mb-1 text-[#00B3CC] tracking-wide">
          Pricing Table
        </h3>
        <h2 className="text-[#1D2B53] text-2xl font-bold leading-tight">
          No Hidden Charge Applied,
          <br />
          Choose Your Plan
        </h2>
      </div>
      <div className="w-[calc(100vw-25px)] flex flex-col space-y-6">
        {PricingData.map((pricing) => {
          return (
            <div
              key={pricing.title}
              className="border border-[#00B3CC] rounded-xl px-6 py-4 bg-white hover:bg-custom-linear"
            >
              {/* Title */}
              <div className="mb-3">
                <h3 className="text-[#1D2B53] text-lg font-bold">
                  {pricing.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium">
                  {pricing.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-5">
                <span className="text-[#1D2B53] text-4xl font-bold">{`$${pricing.price}`}</span>
                <span className="text-[#616b7e] text-base font-medium ml-1">
                  /month
                </span>
              </div>

              {/* Button */}
              <div className="mb-6">
                <Button className="bg-[#5DBFD8] text-white rounded-md px-5 py-3 text-sm font-semibold flex items-center gap-2 shadow-none">
                  Purchase Plan <ChevronRight size={18} />
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {pricing.features.map((feature) => {
                  const iconBg = feature.included
                    ? "bg-[#5DBFD8]"
                    : "bg-red-600";
                  const icon = feature.included ? (
                    <Check size={16} className="text-white" />
                  ) : (
                    <X size={16} className="text-white" />
                  );

                  return (
                    <div key={feature.name} className="flex items-center">
                      <div className={`rounded-full ${iconBg} p-[6px] mr-3`}>
                        {icon}
                      </div>
                      <span className="text-slate-500 text-[15px]">
                        {feature.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
