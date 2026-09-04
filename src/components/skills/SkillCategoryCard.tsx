import type { SkillCategory } from "@/data/profile";
import { SkillBadge } from "@/components/skills/SkillBadge";

type SkillCategoryCardProps = {
  category: SkillCategory;
};

export function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  const primarySkills = category.skills.filter(
    (skill) => skill.emphasis === "primary",
  );
  const secondarySkills = category.skills.filter(
    (skill) => skill.emphasis === "secondary",
  );

  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
      <h3 className="text-sm font-medium tracking-[0.16em] text-[var(--foreground)] uppercase">
        {category.title}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label={category.title}>
        {primarySkills.map((skill) => (
          <SkillBadge key={`${category.id}-${skill.name}`} skill={skill} />
        ))}
        {secondarySkills.map((skill) => (
          <SkillBadge key={`${category.id}-${skill.name}`} skill={skill} />
        ))}
      </ul>
    </article>
  );
}
