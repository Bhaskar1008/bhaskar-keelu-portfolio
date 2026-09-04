import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-xs font-medium tracking-[0.28em] text-[var(--accent)] uppercase">
          Professional IT Portfolio
        </p>
        <h1 className="max-w-4xl text-4xl leading-tight font-semibold tracking-tight text-[var(--foreground)] sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-[var(--muted)] sm:text-xl">
          {profile.headlineRole} with {profile.yearsOfExperienceLabel} of
          experience in Node.js, TypeScript, React, AWS, and full-stack
          development.
        </p>

        <ul className="mt-10 flex flex-wrap gap-2" aria-label="Core technologies">
          {profile.coreTechnologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 font-mono text-xs tracking-wide text-[var(--foreground)]"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
