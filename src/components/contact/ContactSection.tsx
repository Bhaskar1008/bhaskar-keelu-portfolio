import { contact } from "@/data/profile";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-[var(--border)] px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-medium tracking-[0.28em] text-[var(--accent)] uppercase">
          Contact
        </p>
        <h2
          id="contact-heading"
          className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl"
        >
          {contact.title}
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--muted)] sm:text-lg">
          {contact.intro}
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {contact.channels.map((channel) => (
            <li key={channel.id}>
              <a
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--accent)]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                <p className="text-xs tracking-[0.16em] text-[var(--accent)] uppercase">
                  {channel.label}
                </p>
                <p className="mt-3 break-all text-sm font-medium text-[var(--foreground)]">
                  {channel.value}
                </p>
                {channel.external ? (
                  <span className="sr-only"> (opens in a new tab)</span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
