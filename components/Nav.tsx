"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/content/resume";
import { Icon } from "./Icon";

const linkClass =
  "rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:text-fg aria-[current=location]:bg-white/[0.08] aria-[current=location]:text-fg";

export default function Nav() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // Highlight the section crossing the middle of the viewport. The hero (#top) clears the highlight.
  useEffect(() => {
    const sections = ["top", ...navLinks.map((link) => link.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-line bg-bg-2/70 py-1.5 pr-1.5 pl-2 shadow-[0_10px_40px_-10px_rgb(0_0_0/0.6)] backdrop-blur-xl"
      >
        <a href="#top" className="flex items-center gap-2.5 rounded-full pr-2 font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-full bg-linear-to-br from-accent to-accent-2 text-[11px] font-semibold tracking-tight text-bg shadow-[inset_0_1px_0_0_rgb(255_255_255/0.4)]">
            DM
          </span>
          <span className="text-sm">{profile.name}</span>
        </a>

        <ul className="hidden items-center md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "location" : undefined}
                className={linkClass}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <a
            href={profile.resume}
            download
            className="hidden h-9 items-center gap-2 rounded-full bg-white px-4 text-sm font-medium text-bg transition-colors hover:bg-white/85 sm:inline-flex"
          >
            Résumé
            <Icon name="download" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-full border border-line-strong text-fg md:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="size-4.5" />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="mx-auto mt-2 max-w-5xl rounded-3xl border border-line bg-bg-2/90 p-2 shadow-[0_20px_50px_-12px_rgb(0_0_0/0.7)] backdrop-blur-xl md:hidden"
      >
        <ul className="grid gap-0.5">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === link.id ? "location" : undefined}
                className={`${linkClass} block px-4 py-3 text-base`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-1 border-t border-line pt-1">
            <a
              href={profile.resume}
              download
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-full px-4 py-3 text-base font-medium text-accent"
            >
              <Icon name="download" />
              Download résumé
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
