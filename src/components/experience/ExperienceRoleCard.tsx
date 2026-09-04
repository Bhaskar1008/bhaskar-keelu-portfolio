import type { ExperienceRole } from "@/data/experience";
import { ExperienceProject } from "@/components/experience/ExperienceProject";

type ExperienceRoleCardProps = {
  role: ExperienceRole;
};

function cardClasses(detailLevel: ExperienceRole["detailLevel"]) {
  if (detailLevel === "upcoming") {
    return "rounded-2xl border border-[var(--accent)]/45 bg-[var(--surface)] p-5 sm:p-6";
  }

  if (detailLevel === "compact") {
    return "rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5";
  }

  return "rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6";
}

export function ExperienceRoleCard({ role }: ExperienceRoleCardProps) {
  return (
    <article className={cardClasses(role.detailLevel)}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
            {role.position}
          </h3>
          <p className="mt-1 text-sm text-[var(--muted)]">{role.company}</p>
          {role.location ? (
            <p className="mt-1 text-sm text-[var(--muted)]">{role.location}</p>
          ) : null}
        </div>
        <div className="sm:text-right">
          <p className="text-sm text-[var(--foreground)]">{role.dateDisplay}</p>
          {role.statusLabel ? (
            <p className="mt-1 text-xs tracking-[0.14em] text-[var(--accent)] uppercase">
              {role.statusLabel}
            </p>
          ) : null}
        </div>
      </div>

      {role.projects.length > 0 ? (
        <div className="mt-5 space-y-3">
          {role.projects.map((project) => (
            <ExperienceProject
              key={`${role.id}-${project.name}`}
              project={project}
            />
          ))}
        </div>
      ) : null}
    </article>
  );
}
