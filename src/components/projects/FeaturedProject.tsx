import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { TechnologyBadge } from "@/components/projects/TechnologyBadge";
import type { FeaturedProject as FeaturedProjectData } from "@/data/projects";

type FeaturedProjectProps = {
  project: FeaturedProjectData;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="rounded-2xl border border-[var(--accent)]/30 bg-[var(--surface)] p-5 transition-colors hover:border-[var(--accent)]/55 sm:p-7">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-xs tracking-[0.16em] text-[var(--accent)] uppercase">
          {project.badge}
        </p>
        {project.status ? (
          <p className="rounded-full border border-[var(--accent)]/40 px-2.5 py-0.5 text-xs text-[var(--foreground)]">
            {project.status}
          </p>
        ) : null}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)]">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            {project.name}
          </h3>
          {project.alsoKnownAs ? (
            <p className="mt-1 text-sm text-[var(--muted)]">
              Also known as {project.alsoKnownAs}
            </p>
          ) : null}
          <p className="mt-2 text-sm text-[var(--muted)]">
            {project.role} · {project.company}
          </p>
          <p className="mt-4 text-[var(--muted)]">{project.description}</p>

          {project.overviewItems ? (
            <>
              <h4 className="mt-6 text-sm font-medium tracking-[0.14em] text-[var(--foreground)] uppercase">
                {project.overviewTitle}
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.overviewItems.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {project.focusAreas ? (
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Focus areas">
              {project.focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-[var(--accent)]/30 px-2.5 py-1 text-xs text-[var(--foreground)]"
                >
                  {area}
                </li>
              ))}
            </ul>
          ) : null}

          <h4 className="mt-6 text-sm font-medium tracking-[0.14em] text-[var(--foreground)] uppercase">
            {project.contributionTitle}
          </h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            {project.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <div>
            <h4 className="text-sm font-medium tracking-[0.14em] text-[var(--foreground)] uppercase">
              Technology
            </h4>
            <ul
              className="mt-3 flex flex-wrap gap-2"
              aria-label={`${project.name} technologies`}
            >
              {project.technologies.map((technology) => (
                <TechnologyBadge key={technology} name={technology} />
              ))}
            </ul>
          </div>
          <ArchitectureDiagram architecture={project.architecture} />
          {project.architectureSummary ? (
            <p className="text-xs text-[var(--muted)]">
              {project.architectureSummary}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
