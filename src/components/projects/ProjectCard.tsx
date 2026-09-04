import { TechnologyBadge } from "@/components/projects/TechnologyBadge";
import type { SelectedProject } from "@/data/projects";

type ProjectCardProps = {
  project: SelectedProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--muted)]">
      <p className="text-xs tracking-[0.16em] text-[var(--muted)] uppercase">
        {project.badge}
      </p>
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-[var(--foreground)]">
        {project.name}
      </h3>
      <p className="mt-1 text-sm text-[var(--muted)]">
        {project.role} · {project.company}
      </p>
      <p className="mt-3 text-sm text-[var(--muted)]">{project.description}</p>
      {project.highlight ? (
        <p className="mt-3 text-sm text-[var(--foreground)]">{project.highlight}</p>
      ) : null}
      <ul
        className="mt-4 flex flex-wrap gap-2"
        aria-label={`${project.name} technologies`}
      >
        {project.technologies.map((technology) => (
          <TechnologyBadge key={technology} name={technology} />
        ))}
      </ul>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        {project.contributions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
