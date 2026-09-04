import type { ExperienceProject as ExperienceProjectData } from "@/data/experience";

type ExperienceProjectProps = {
  project: ExperienceProjectData;
};

export function ExperienceProject({ project }: ExperienceProjectProps) {
  return (
    <details
      className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3"
      open={project.defaultExpanded}
    >
      <summary className="cursor-pointer list-none marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] [&::-webkit-details-marker]:hidden">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h4 className="text-sm font-medium text-[var(--foreground)]">
              {project.name}
            </h4>
            {project.role ? (
              <p className="mt-1 text-xs text-[var(--muted)]">{project.role}</p>
            ) : null}
          </div>
          <p className="text-xs text-[var(--muted)]">
            <span className="sm:hidden">Selected work</span>
            <span className="hidden sm:inline">Details</span>
          </p>
        </div>
        {project.statusNote ? (
          <p className="mt-2 text-xs text-[var(--accent)]">{project.statusNote}</p>
        ) : null}
        {project.architectureNote ? (
          <p className="mt-1 text-xs text-[var(--muted)]">
            {project.architectureNote}
          </p>
        ) : null}
        <ul
          className="mt-3 flex flex-wrap gap-1.5"
          aria-label={`${project.name} technologies`}
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-[var(--border)] px-2 py-0.5 font-mono text-[0.7rem] text-[var(--muted)]"
            >
              {technology}
            </li>
          ))}
        </ul>
      </summary>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </details>
  );
}
