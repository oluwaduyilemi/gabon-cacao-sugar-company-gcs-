"use client";

import NewsContent from "../_components/NewsContent";
import NewsHero from "../_components/NewsHero";

export default function News() {
  return (
      <main className="bg-white pt-15 pb-10">
        <NewsHero/>
        <NewsContent/>
      </main>
  );
}