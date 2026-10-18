import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <div data-reveal className="max-w-2xl">
      <p className="inline-flex items-center gap-2 text-sm font-medium text-accent">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_1px] shadow-accent/60" />
        {eyebrow}
      </p>
      <h2 className="text-heading mt-4 text-3xl leading-[1.15] font-semibold tracking-[-0.03em] text-balance sm:text-[2.75rem]">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-pretty text-muted">{intro}</p>}
    </div>
  );
}
