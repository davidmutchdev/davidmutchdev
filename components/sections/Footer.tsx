import { profile } from "@/content/resume";
import { container } from "@/lib/ui";
import { Icon } from "../Icon";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line pt-10">
      <div className={`${container} flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between`}>
        <p>© {profile.name}. Built with Next.js and Tailwind CSS.</p>
        <a href="#top" className="no-print inline-flex items-center gap-1.5 transition-colors hover:text-fg">
          Back to top
          <Icon name="arrowUp" className="size-3.5" />
        </a>
      </div>

      {/* Oversized wordmark that fades into the page edge. */}
      <p
        aria-hidden="true"
        className="mt-8 translate-y-[22%] bg-linear-to-b from-white/[0.09] to-transparent bg-clip-text text-center text-[15vw] leading-[0.85] font-semibold tracking-[-0.05em] whitespace-nowrap text-transparent select-none"
      >
        {profile.name}
      </p>
    </footer>
  );
}
