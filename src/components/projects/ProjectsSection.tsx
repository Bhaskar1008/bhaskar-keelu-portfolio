import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ProjectCard } from "@/components/projects/ProjectCard";
import {
  featuredProjects,
  projectsIntro,
  selectedProjects,
} from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 border-t border-[var(--border)] px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-medium tracking-[0.28em] text-[var(--accent)] uppercase">
          Projects
        </p>
        <h2
          id="projects-heading"
          className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl"
        >
          Featured Projects
        </h2>
        <p className="mt-4 max-w-3xl text-[var(--muted)] sm:text-lg">
          {projectsIntro}
        </p>

        <div className="mt-10 space-y-6">
          {featuredProjects.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </div>

        <h3 className="mt-14 text-sm font-medium tracking-[0.16em] text-[var(--foreground)] uppercase">
          Selected projects
        </h3>
        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
