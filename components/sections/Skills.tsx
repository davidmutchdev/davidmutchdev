import type { CSSProperties } from "react";
import { skillGroups } from "@/content/resume";
import { card, chip, container, iconTile, sectionPadding } from "@/lib/ui";
import { Icon } from "../Icon";
import SectionHeading from "../SectionHeading";

// Column spans on the 6-column desktop grid, in the order of `skillGroups`.
const spans = [
  "lg:col-span-2",
  "lg:col-span-4",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "sm:col-span-2 lg:col-span-3",
];

export default function Skills() {
  return (
    <section id="skills" className={sectionPadding}>
      <div className={container}>
        <SectionHeading
          eyebrow="Skills"
          title="The languages, tools, and practices I work with."
          intro="Grouped the way they show up in day-to-day work, from the browser to the cloud to the team."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((group, i) => (
            <li
              key={group.name}
              data-reveal
              data-spotlight
              style={{ "--reveal-delay": `${(i % 3) * 70}ms` } as CSSProperties}
              className={`${card} p-6 ${spans[i] ?? "lg:col-span-2"}`}
            >
              <div className="flex items-center gap-3.5">
                <span className={iconTile}>
                  <Icon name={group.icon} className="size-[18px]" />
                </span>
                <h3 className="font-semibold tracking-tight">{group.name}</h3>
                <span className="ml-auto text-sm text-muted tabular-nums">{group.items.length}</span>
              </div>
              <ul aria-label={group.name} className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className={chip}>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
