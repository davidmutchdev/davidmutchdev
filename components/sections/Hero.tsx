import type { CSSProperties } from "react";
import { profile } from "@/content/resume";
import { buttonPrimary, buttonSecondary, container } from "@/lib/ui";
import { Icon } from "../Icon";
import ProfileCard from "../ProfileCard";

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />

      <div className={`${container} grid items-center gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-20`}>
        <div className="min-w-0">
          <p
            data-reveal
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] py-1.5 pr-3.5 pl-3 text-sm text-fg-2 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.05)]"
          >
            <Icon name="pin" className="size-3.5 text-accent" />
            {profile.location}
          </p>

          <h1
            data-reveal
            style={delay(60)}
            className="text-heading mt-6 pb-1 text-[3.5rem] leading-[1.02] font-semibold tracking-[-0.045em] sm:text-7xl lg:text-[5.25rem]"
          >
            {profile.name}
          </h1>

          <p data-reveal style={delay(120)} className="mt-5 text-xl font-medium tracking-tight text-fg-2 sm:text-2xl">
            {profile.title}
          </p>

          <p data-reveal style={delay(180)} className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-muted">
            {profile.intro}
          </p>

          <div data-reveal style={delay(240)} className="mt-9 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className={buttonPrimary}>
              Get in touch
              <Icon name="arrowRight" />
            </a>
            <a href={profile.resume} download className={buttonSecondary}>
              <Icon name="download" />
              Download résumé
            </a>
          </div>
        </div>

        <div data-reveal style={delay(200)} className="min-w-0">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
