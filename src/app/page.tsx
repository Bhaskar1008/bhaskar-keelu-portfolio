import { Hero } from "@/components/home/Hero";
import { SectionPlaceholder } from "@/components/home/SectionPlaceholder";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { upcomingSections } from "@/data/profile";

export default function Home() {
  const sectionsBeforeSkills = upcomingSections.filter(
    (section) => section.id !== "contact",
  );
  const contactSection = upcomingSections.find(
    (section) => section.id === "contact",
  );

  return (
    <main id="main" className="flex-1">
      <div id="top">
        <Hero />
      </div>
      {sectionsBeforeSkills.map((section) => (
        <SectionPlaceholder
          key={section.id}
          id={section.id}
          title={section.title}
          summary={section.summary}
        />
      ))}
      <SkillsSection />
      {contactSection ? (
        <SectionPlaceholder
          id={contactSection.id}
          title={contactSection.title}
          summary={contactSection.summary}
        />
      ) : null}
    </main>
  );
}
