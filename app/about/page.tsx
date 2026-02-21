import AboutHero from "../_components/AboutHero";
import AboutHistory from "../_components/AboutHistory";
import AboutTeam from "../_components/AboutTeam";
import GlobalPresence from "../_components/GlobalPresence";

export default function About() {
  return (
      <main className="bg-white pt-15 pb-10">
        <AboutHero />
        <AboutHistory/>
        <GlobalPresence/>
        <AboutTeam/>
      </main>
  );
}