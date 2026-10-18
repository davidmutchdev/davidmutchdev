import { experience } from "@/content/resume";
import { card, chip, container, sectionPadding } from "@/lib/ui";
import SectionHeading from "../SectionHeading";

// "07/2020" -> "2020-07"
const isoMonth = (date: string) => date.split("/").reverse().join("-");

export default function Experience() {
  return (
    <section id="experience" className={sectionPadding}>
      <div className={container}>
        <SectionHeading
          eyebrow="Experience"
          title="A career built across insurance, FinTech, and consulting."
          intro="From customer-facing insurance workflows at CoverHound, to payment platforms at FastPay, to leading architecture and engineering teams at Centare."
        />

        <ol className="relative mt-16">
          {/* Timeline rail: left edge on phones, between the columns on desktop. */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-0 left-[7px] w-px bg-linear-to-b from-accent/60 via-line-strong to-transparent lg:left-[14.75rem]"
          />

          {experience.map((role) => {
            const current = role.end === "Present";
            return (
              <li
                key={role.company}
                className="relative pb-14 pl-9 last:pb-0 lg:grid lg:grid-cols-[13rem_1fr] lg:gap-14 lg:pl-0"
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-1.5 left-0 grid size-[15px] place-items-center rounded-full border bg-bg lg:left-[calc(14.75rem-7.5px)] ${
                    current ? "border-accent/60" : "border-line-strong"
                  }`}
                >
                  <span
                    className={`size-[5px] rounded-full ${current ? "bg-accent shadow-[0_0_10px_2px] shadow-accent/60" : "bg-muted/70"}`}
                  />
                </span>

                <div data-reveal className="lg:pt-0.5 lg:text-right">
                  <p className="text-lg font-semibold tracking-tight">{role.company}</p>
                  <p className="mt-1 text-sm text-fg-2 tabular-nums">
                    <time dateTime={isoMonth(role.start)}>{role.start}</time> –{" "}
                    {current ? "Present" : <time dateTime={isoMonth(role.end)}>{role.end}</time>}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-muted">{role.industry}</p>
                  {current && (
                    <span className="mt-3 inline-flex rounded-full border border-accent/25 bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                      Current role
                    </span>
                  )}
                </div>

                <div data-reveal data-spotlight className={`${card} mt-5 p-6 sm:p-8 lg:mt-0`}>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {role.title}
                    <span className="sr-only"> at {role.company}</span>
                  </h3>
                  <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-fg-2">
                    {role.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative pl-5 before:absolute before:top-[0.68em] before:left-0.5 before:size-1 before:rounded-full before:bg-accent/80"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <ul
                    aria-label={`Tech stack at ${role.company}`}
                    className="mt-7 flex flex-wrap gap-2 border-t border-line pt-6"
                  >
                    {role.stack.map((tech) => (
                      <li key={tech} className={chip}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
