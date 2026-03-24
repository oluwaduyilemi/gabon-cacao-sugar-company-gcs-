"use client";

import CoreValues from "../_components/CoreValues";
import FieldOperations from "../_components/FieldOperations";
import JoinTeam from "../_components/JoinTeam";
import TeamHero from "../_components/TeamHero";
import VideoGallery from "../_components/VideoGallery";


export default function Team() {
  return (
      <main className="bg-white pt-15">
        <TeamHero />
        <CoreValues />
        <VideoGallery/>
        <FieldOperations/>
        <JoinTeam />
      </main>
  );
}