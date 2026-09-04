import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { Hero } from "@/components/home/Hero";
import { SectionPlaceholder } from "@/components/home/SectionPlaceholder";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { upcomingSections } from "@/data/profile";

export default function Home() {
  const aboutSection = upcomingSections.find((section) => section.id === "about");
  const projectsSection = upcomingSections.find(
    (section) => section.id === "projects",
  );
  const contactSection = upcomingSections.find(
    (section) => section.id === "contact",
  );

  return (
    <main id="main" className="flex-1">
      <div id="top">
        <Hero />
      </div>
      {aboutSection ? (
        <SectionPlaceholder
          id={aboutSection.id}
          title={aboutSection.title}
          summary={aboutSection.summary}
        />
      ) : null}
      <ExperienceSection />
      {projectsSection ? (
        <SectionPlaceholder
          id={projectsSection.id}
          title={projectsSection.title}
          summary={projectsSection.summary}
        />
      ) : null}
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
