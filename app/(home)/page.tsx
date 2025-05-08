import FeaturesComponent from "@/components/features";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="flex flex-col pt-8">
      <Hero />
      <Services />
      <FeaturesComponent />
    </div>
  );
}
