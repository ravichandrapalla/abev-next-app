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
    <div className="max-w-md mx-auto p-6 mb-6">
      <div className="text-center mb-8">
        <h3 className="text-blue-400 font-medium mb-1">Pricing Table</h3>
        <h2 className="text-navy-800 text-3xl font-bold leading-tight">
          No Hidden Charge Applied,
          <br />
          Choose Your Plan
        </h2>
      </div>
      <div className="flex flex-col space-y-6 ">
        {PricingData.map((pricing) => {
          return (
            <div
              key={pricing.title}
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm"
            >
              <div className="mb-6">
                <h3 className="text-navy-800 text-2xl font-bold">
                  {pricing.title}
                </h3>
                <p className="text-gray-500">{pricing.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-navy-800 text-5xl font-bold">{`$${pricing.price}`}</span>
                <span className="text-gray-500">{`/month`}</span>
              </div>
              <div className="mb-6">
                <Button className="bg-[#00B3CC] p-4" size="lg">
                  <p>Purchase Plan</p> <ChevronRight />
                </Button>
              </div>

              <div className="space-y-4">
                {pricing.features.map((feature) => {
                  return (
                    <div key={feature.name} className="flex items-center">
                      {feature.included ? (
                        <div className="rounded-full bg-blue-400 p-1 mr-3">
                          <Check size={18} className="text-white" />
                        </div>
                      ) : (
                        <div className="rounded-full bg-red-600 p-1 mr-3">
                          <X size={18} className="text-white " />
                        </div>
                      )}

                      <span className="text-navy-800 font-medium">
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
