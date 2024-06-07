import FeaturedCard from "@/components/FeaturedCard";
import HeroSection from "@/components/HeroSection";
import MovingCards from "@/components/MovingCards";
import OurTutors from "@/components/OurTutors";
import SrollContent from "@/components/SrollContent";
import UpcomingSongs from "@/components/UpcomingSongs";



export default function Home() {
  return (
    <div className= " min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCard/>
      <SrollContent/>
      <MovingCards/>
      <UpcomingSongs/>
      <OurTutors/>
    </div>
  );
}
