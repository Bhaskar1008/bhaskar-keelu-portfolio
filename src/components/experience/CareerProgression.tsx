import { careerProgression } from "@/data/experience";

export function CareerProgression() {
  return (
    <div>
      <p className="sr-only">
        Career progression: Software Engineer, then Team Lead, then Technology
        Lead, then Senior Product Engineer – 3, upcoming.
      </p>
      <ol
        aria-hidden="true"
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
      >
        {careerProgression.map((step, index) => {
          const isUpcoming = "upcoming" in step && step.upcoming;

          return (
            <li key={step.id} className="relative">
              <div
                className={
                  isUpcoming
                    ? "rounded-xl border border-[var(--accent)]/50 bg-[var(--surface)] px-4 py-3"
                    : "rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3"
                }
              >
                <p className="text-[0.7rem] tracking-[0.18em] text-[var(--muted)] uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--foreground)]">
                  {step.label}
                </p>
                {isUpcoming ? (
                  <p className="mt-1 text-xs text-[var(--accent)]">Upcoming</p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
