import { coreStack, experience, profile, quickFacts } from "@/content/resume";
import { chip } from "@/lib/ui";

// "At a glance" panel beside the hero copy.
export default function ProfileCard() {
  const current = experience[0];

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-x-8 -inset-y-12 -z-10 bg-[radial-gradient(closest-side,rgb(94_234_212/0.12),transparent)]"
      />
      <div className="rounded-3xl bg-linear-to-b from-white/[0.16] via-white/[0.06] to-white/[0.02] p-px shadow-[0_40px_100px_-40px_rgb(0_0_0/0.9)]">
        <div className="rounded-[calc(1.5rem-1px)] bg-bg-2/95 p-6 backdrop-blur-xl sm:p-8">
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="grid size-14 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-accent to-accent-2 text-lg font-semibold tracking-tight text-bg shadow-[inset_0_1px_0_0_rgb(255_255_255/0.4)]"
            >
              DM
            </span>
            <div className="min-w-0">
              <p className="font-semibold tracking-tight">{profile.name}</p>
              <p className="mt-1 flex items-center gap-2 text-sm text-fg-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-50 motion-reduce:hidden" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                {current.title} at {current.company}
              </p>
            </div>
          </div>

          <dl className="mt-7 divide-y divide-line border-y border-line">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="grid grid-cols-[6rem_1fr] gap-4 py-3.5 text-sm">
                <dt className="text-muted">{fact.label}</dt>
                <dd className="text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-sm text-muted">Core stack</p>
          <ul aria-label="Core stack" className="mt-3 flex flex-wrap gap-2">
            {coreStack.map((tech) => (
              <li key={tech} className={chip}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
