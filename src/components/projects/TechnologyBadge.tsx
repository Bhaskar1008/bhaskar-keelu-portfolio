type TechnologyBadgeProps = {
  name: string;
};

export function TechnologyBadge({ name }: TechnologyBadgeProps) {
  return (
    <li>
      <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 font-mono text-[0.7rem] tracking-wide text-[var(--muted)]">
        {name}
      </span>
    </li>
  );
}
