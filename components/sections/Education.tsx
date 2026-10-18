import type { CSSProperties } from "react";
import { education, experience } from "@/content/resume";
import { card, container, iconTile, sectionPadding } from "@/lib/ui";
import { Icon } from "../Icon";
import SectionHeading from "../SectionHeading";

const year = (date: string) => date.split("/")[1] ?? date;

export default function Education() {
  return (
    <section id="education" className={sectionPadding}>
      <div className={container}>
        <SectionHeading eyebrow="Education" title="Education and industry background." />

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <article data-reveal data-spotlight className={`${card} flex flex-col p-6 sm:p-8`}>
            <span className={iconTile}>
              <Icon name="graduation" className="size-[18px]" />
            </span>
            <h3 className="mt-6 text-xl font-semibold tracking-tight">{education.school}</h3>
            <p className="mt-1.5 text-fg-2">{education.degree}</p>
            <dl className="mt-auto grid grid-cols-2 gap-4 border-t border-line pt-5 text-sm max-lg:mt-10">
              <div>
                <dt className="text-muted">Graduated</dt>
                <dd className="mt-1 text-fg tabular-nums">{education.date}</dd>
              </div>
              <div>
                <dt className="text-muted">Location</dt>
                <dd className="mt-1 text-fg">{education.location}</dd>
              </div>
            </dl>
          </article>

          <article
            data-reveal
            data-spotlight
            style={{ "--reveal-delay": "70ms" } as CSSProperties}
            className={`${card} p-6 sm:p-8`}
          >
            <span className={iconTile}>
              <Icon name="briefcase" className="size-[18px]" />
            </span>
            <h3 className="mt-6 text-xl font-semibold tracking-tight">Industries</h3>
            <ul className="mt-3 divide-y divide-line">
              {experience.map((role) => (
                <li key={role.company} className="flex items-center justify-between gap-4 py-4">
                  <div className="min-w-0">
                    <p className="text-fg">{role.industry}</p>
                    <p className="mt-0.5 text-sm text-muted">{role.company}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-line bg-white/[0.03] px-2.5 py-0.5 text-xs text-fg-2 tabular-nums">
                    {year(role.start)}–{role.end === "Present" ? "Now" : year(role.end)}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
