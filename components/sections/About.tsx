import type { CSSProperties } from "react";
import { focusAreas, profile } from "@/content/resume";
import { card, container, iconTile, sectionPadding } from "@/lib/ui";
import { Icon } from "../Icon";
import SectionHeading from "../SectionHeading";

export default function About() {
  const [lead, ...rest] = profile.summary;

  return (
    <section id="about" className={sectionPadding}>
      <div className={container}>
        <SectionHeading
          eyebrow="About"
          title="Scalable, maintainable software, from technical design through execution."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div data-reveal className="space-y-6 text-pretty lg:col-span-6">
            <p className="text-lg leading-relaxed text-fg">{lead}</p>
            {rest.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
            {focusAreas.map((area, i) => (
              <li
                key={area.title}
                data-reveal
                data-spotlight
                style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
                className={`${card} p-6`}
              >
                <span className={iconTile}>
                  <Icon name={area.icon} className="size-[18px]" />
                </span>
                <h3 className="mt-5 font-semibold tracking-tight">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{area.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
