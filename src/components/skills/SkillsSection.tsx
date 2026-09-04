import { SkillCategoryCard } from "@/components/skills/SkillCategoryCard";
import {
  coreExpertise,
  skillCategories,
  skillsIntro,
} from "@/data/profile";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 border-t border-[var(--border)] px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-medium tracking-[0.28em] text-[var(--accent)] uppercase">
          Skills
        </p>
        <h2
          id="skills-heading"
          className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl"
        >
          Technical Expertise
        </h2>
        <p className="mt-4 max-w-3xl text-[var(--muted)] sm:text-lg">
          {skillsIntro}
        </p>

        <div className="mt-10">
          <h3 className="text-sm font-medium tracking-[0.16em] text-[var(--foreground)] uppercase">
            Core Expertise
          </h3>
          <ul
            className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
            aria-label="Core expertise"
          >
            {coreExpertise.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-[var(--accent)]/35 bg-[var(--surface)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-sm text-[var(--muted)]">
          Highlighted items are primary focus areas. Additional skills are
          listed with quieter emphasis and do not imply a proficiency rating.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
