type SectionPlaceholderProps = {
  id: string;
  title: string;
  summary: string;
};

export function SectionPlaceholder({
  id,
  title,
  summary,
}: SectionPlaceholderProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-[var(--border)] px-5 py-16 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">{summary}</p>
      </div>
    </section>
  );
}
