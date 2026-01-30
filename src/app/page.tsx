import Hero from "@/components/Hero";
import TrustCounters from "@/components/TrustCounters";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustCounters />
      <BentoGrid />
    </div>
  );
}
