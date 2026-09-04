import type { ArchitectureDiagramData } from "@/data/projects";

type ArchitectureDiagramProps = {
  architecture: ArchitectureDiagramData;
};

function FlowList({
  steps,
  label,
}: {
  steps: readonly string[];
  label?: string;
}) {
  return (
    <ol className="flex flex-col" aria-label={label}>
      {steps.map((step, index) => (
        <li key={step} className="flex flex-col items-stretch">
          <p className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-center text-xs text-[var(--foreground)]">
            {step}
          </p>
          {index < steps.length - 1 ? (
            <p aria-hidden="true" className="py-1 text-center text-[var(--accent)]">
              ↓
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function ArchitectureDiagram({ architecture }: ArchitectureDiagramProps) {
  return (
    <figure className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
      <figcaption className="mb-4 text-xs tracking-[0.16em] text-[var(--muted)] uppercase">
        {architecture.caption}
      </figcaption>

      {architecture.variant === "linear" && architecture.steps ? (
        <FlowList steps={architecture.steps} />
      ) : null}

      {architecture.variant === "fork" &&
      architecture.branches &&
      architecture.mergeSteps ? (
        <div className="space-y-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {architecture.branches.map((branch) => (
              <FlowList
                key={branch.label}
                steps={branch.steps}
                label={branch.label}
              />
            ))}
          </div>
          <p aria-hidden="true" className="text-center text-[var(--accent)]">
            ↓
          </p>
          <FlowList
            steps={architecture.mergeSteps}
            label="Shared platform services"
          />
        </div>
      ) : null}
    </figure>
  );
}
