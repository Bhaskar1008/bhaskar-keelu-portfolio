import { CareerProgression } from "@/components/experience/CareerProgression";
import { ExperienceRoleCard } from "@/components/experience/ExperienceRoleCard";
import { experience, experienceIntro } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 border-t border-[var(--border)] px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-medium tracking-[0.28em] text-[var(--accent)] uppercase">
          Experience
        </p>
        <h2
          id="experience-heading"
          className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl"
        >
          Professional Experience
        </h2>
        <p className="mt-4 max-w-3xl text-[var(--muted)] sm:text-lg">
          {experienceIntro}
        </p>

        <div className="mt-10">
          <h3 className="mb-4 text-sm font-medium tracking-[0.16em] text-[var(--foreground)] uppercase">
            Career progression
          </h3>
          <CareerProgression />
        </div>

        <ol className="relative mt-12 space-y-6 border-l border-[var(--border)] pl-6 sm:pl-8">
          {experience.map((role) => (
            <li key={role.id} className="relative">
              <span
                aria-hidden="true"
                className={
                  role.status === "upcoming"
                    ? "absolute top-6 -left-[1.95rem] size-3 rounded-full border border-[var(--accent)] bg-[var(--accent)] sm:-left-[2.45rem]"
                    : "absolute top-6 -left-[1.95rem] size-3 rounded-full border border-[var(--border)] bg-[var(--surface)] sm:-left-[2.45rem]"
                }
              />
              <ExperienceRoleCard role={role} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
