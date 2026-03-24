import Hero from "./_components/Hero";
import Mission from "./_components/Mission";
import Commodities from "./_components/Commodities";
import Process from "./_components/Process";
import Footprint from "./_components/Footprint";
import News from "./_components/News";
import CTA from "./_components/CTA";
import Leadership from "./_components/Leadership";

export default function Home() {
  return (
      <main className="">
        <Hero/>
        <Mission/>
        <Commodities/>
        <Process/>
        <Footprint/>
        <Leadership/>
        <News/>
        <CTA/>
      </main>
  );
}
