"use client";

// import AboutTeam from "../_components/AboutTeam";
import CoreValues from "../_components/CoreValues";
import TeamHero from "../_components/TeamHero";
import VideoGallery from "../_components/VideoGallery";


export default function Team() {
  return (
      <main className="bg-white pt-15">
        <TeamHero />
        <CoreValues />
        <VideoGallery/>
        {/* <AboutTeam/> */}
      </main>
  );
}