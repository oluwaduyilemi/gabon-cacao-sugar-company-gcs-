"use client";

import NewsCard from "../_components/NewsCard";
import NewsContent from "../_components/NewsContent";
import NewsHero from "../_components/NewsHero";

const ACFIF_ARTICLE = {
  badge: "EXECUTIVE FORUM",
  headline: "ACFIF 2026: Executive Presentation on African Trade Finance",
  description: "Our Chief Executive Officer presented a comprehensive model for localized structured trade finance facilities at the Africa Cocoa Finance & Investment Forum (ACFIF) 2026. This strategic approach strengthens Central African trade desks and capital flows into regional agricultural transformation.",
  meta: "MAY 2026 • CONFERENCE REPORT",
  imageSrc: "/images/neww.jpeg" 
};

export default function News() {
  return (
      <main className="bg-white pt-15 pb-10">
        <NewsHero/>
        <div className="container mx-auto max-w-5xl space-y-12">
        <NewsCard {...ACFIF_ARTICLE} />
        </div>
        <NewsContent/>
      </main>
  );
}