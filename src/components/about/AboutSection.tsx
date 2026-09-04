import { about, profile } from "@/data/profile";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-t border-[var(--border)] px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-medium tracking-[0.28em] text-[var(--accent)] uppercase">
          About
        </p>
        <h2
          id="about-heading"
          className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl"
        >
          {about.title}
        </h2>
        <p className="mt-3 text-sm text-[var(--muted)]">
          {profile.positioning} · {profile.yearsOfExperienceLabel} of experience
        </p>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)]">
          <div className="space-y-5 text-[var(--muted)] sm:text-lg">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-[0.16em] text-[var(--foreground)] uppercase">
              Core strengths
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Core strengths">
              {about.strengths.map((strength) => (
                <li
                  key={strength}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--foreground)]"
                >
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
