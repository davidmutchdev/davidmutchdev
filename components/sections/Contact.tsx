import { profile } from "@/content/resume";
import { buttonPrimary, buttonSecondary, container, sectionPadding } from "@/lib/ui";
import CopyButton from "../CopyButton";
import { Icon, type IconName } from "../Icon";

const methods: { icon: IconName; label: string; value: string; href?: string; copy?: boolean }[] = [
  { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}`, copy: true },
  { icon: "phone", label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: "pin", label: "Location", value: profile.location },
];

// Lets a long email address wrap after the @ on narrow screens instead of mid-word.
function breakAfterAt(value: string) {
  const at = value.indexOf("@");
  if (at === -1) return value;
  return (
    <>
      {value.slice(0, at + 1)}
      <wbr />
      {value.slice(at + 1)}
    </>
  );
}

export default function Contact() {
  return (
    <section id="contact" className={sectionPadding}>
      <div className={container}>
        {/* Hairline gradient border around the panel. */}
        <div
          data-reveal
          className="rounded-[2rem] bg-linear-to-b from-white/[0.16] via-white/[0.06] to-accent/25 p-px shadow-[0_40px_120px_-50px_rgb(94_234_212/0.4)]"
        >
          <div className="relative isolate overflow-hidden rounded-[calc(2rem-1px)] bg-bg-2 px-5 py-14 sm:px-14 sm:py-20">
            <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
            <div
              aria-hidden="true"
              className="absolute -top-48 left-1/2 -z-10 h-[28rem] w-[48rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(94_234_212/0.14),transparent)]"
            />

            <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-end">
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_1px] shadow-accent/60"
                  />
                  Contact
                </p>
                <h2 className="mt-4 text-4xl leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-5xl">
                  <span className="text-heading">Let’s build something </span>
                  <span className="text-accent-gradient">scalable and maintainable.</span>
                </h2>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-pretty text-muted">
                  Email is the quickest way to reach me. I’m happy to talk about technical leadership, frontend
                  architecture, and full-stack web development.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a href={`mailto:${profile.email}`} className={buttonPrimary}>
                    Email me
                    <Icon name="arrowRight" />
                  </a>
                  <a href={profile.resume} download className={buttonSecondary}>
                    <Icon name="download" />
                    Download résumé
                  </a>
                </div>
              </div>

              <ul className="divide-y divide-line rounded-2xl border border-line bg-white/[0.025] shadow-[inset_0_1px_0_0_rgb(255_255_255/0.05)] backdrop-blur-md">
                {methods.map((method) => (
                  <li key={method.label} className="flex items-center gap-3 px-4 py-4 sm:gap-4 sm:px-5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line-strong bg-white/[0.04] text-accent">
                      <Icon name={method.icon} className="size-[18px]" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-muted">{method.label}</p>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="mt-0.5 block text-sm font-medium transition-colors hover:text-accent sm:text-base"
                        >
                          {breakAfterAt(method.value)}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium sm:text-base">{method.value}</p>
                      )}
                    </div>
                    {method.copy && <CopyButton value={method.value} label={method.label.toLowerCase()} />}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
