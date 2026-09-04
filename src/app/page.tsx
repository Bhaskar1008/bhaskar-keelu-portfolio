import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { Hero } from "@/components/home/Hero";
import { SectionPlaceholder } from "@/components/home/SectionPlaceholder";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { upcomingSections } from "@/data/profile";

export default function Home() {
  const aboutSection = upcomingSections.find((section) => section.id === "about");
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
      <ProjectsSection />
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
