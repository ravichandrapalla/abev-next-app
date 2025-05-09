"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import FeaturesComponent from "@/components/features";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="flex flex-col pt-8">
      <Hero />
      <Services />
      <FeaturesComponent />
      <Testimonials />
      <Pricing />
    </div>
  );
}
