import type { Skill } from "@/data/profile";

type SkillBadgeProps = {
  skill: Skill;
};

export function SkillBadge({ skill }: SkillBadgeProps) {
  const isPrimary = skill.emphasis === "primary";

  return (
    <li>
      <span
        className={
          isPrimary
            ? "inline-flex items-center rounded-full border border-[var(--accent)]/50 bg-[var(--surface)] px-3 py-1.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)]"
            : "inline-flex items-center rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)] transition-colors hover:border-[var(--muted)] hover:text-[var(--foreground)]"
        }
      >
        {skill.name}
        {isPrimary ? <span className="sr-only">, primary focus</span> : null}
      </span>
    </li>
  );
}
