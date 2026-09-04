import { Hero } from "@/components/home/Hero";
import { SectionPlaceholder } from "@/components/home/SectionPlaceholder";
import { upcomingSections } from "@/data/profile";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <div id="top">
        <Hero />
      </div>
      {upcomingSections.map((section) => (
        <SectionPlaceholder
          key={section.id}
          id={section.id}
          title={section.title}
          summary={section.summary}
        />
      ))}
    </main>
  );
}
