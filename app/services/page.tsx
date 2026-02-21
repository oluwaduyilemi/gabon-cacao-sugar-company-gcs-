import ServiceGrid from "../_components/ServiceGrid";
import ServiceHero from "../_components/ServiceHero";
import ServicePartnership from "../_components/ServicePartnership";


export default function About() {
  return (
      <main className="bg-white pt-15">
       <ServiceHero/>
       <ServiceGrid/>
       <ServicePartnership/>
      </main>
  );
}