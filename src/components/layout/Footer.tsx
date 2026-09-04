import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-[var(--muted)] sm:px-8">
        <p>
          {profile.name} · {profile.headlineRole}
        </p>
      </div>
    </footer>
  );
}
