import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          {profile.name} · {profile.headlineRole}
        </p>
        <p>
          <a
            href={`tel:${profile.mobile}`}
            className="transition-colors hover:text-[var(--foreground)]"
          >
            {profile.mobile}
          </a>
        </p>
      </div>
    </footer>
  );
}
