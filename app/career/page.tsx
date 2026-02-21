import CareerForm from "../_components/CareerForm";
import CareerHero from "../_components/CareerHero";
import CareerValues from "../_components/CareerValues";



export default function About() {
  return (
      <main className="bg-white pt-15">
        <CareerHero/>
        <CareerValues/>
        <CareerForm/>
      </main>
  );
}