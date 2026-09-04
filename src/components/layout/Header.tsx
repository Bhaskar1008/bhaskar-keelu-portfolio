"use client";

import { useState } from "react";
import { navigation, profile } from "@/data/profile";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="text-sm font-medium tracking-[0.18em] text-[var(--foreground)] uppercase"
        >
          {profile.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--foreground)] md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="border-t border-[var(--border)] px-5 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-1 text-sm text-[var(--muted)]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
