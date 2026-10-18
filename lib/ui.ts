// Class recipes shared across sections, so surfaces, buttons and chips stay consistent.

export const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

// Card surface: hairline border, faint top-lit fill, inner top highlight.
// Add `data-spotlight` to the element for the cursor glow.
export const card =
  "rounded-2xl border border-line bg-linear-to-b from-white/[0.04] to-white/[0.015] shadow-[inset_0_1px_0_0_rgb(255_255_255/0.05)]";

const buttonBase =
  "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors";

export const buttonPrimary = `${buttonBase} bg-white text-bg shadow-[0_8px_30px_-10px_rgb(255_255_255/0.45)] hover:bg-white/85`;

export const buttonSecondary = `${buttonBase} border border-line-strong bg-white/[0.04] text-fg hover:border-white/25 hover:bg-white/[0.08]`;

export const chip =
  "rounded-full border border-line bg-white/[0.03] px-3 py-1 text-[13px] leading-5 text-fg-2 transition-colors hover:border-white/20 hover:text-fg";

export const iconTile =
  "grid size-10 shrink-0 place-items-center rounded-xl border border-line-strong bg-white/[0.04] text-accent shadow-[inset_0_1px_0_0_rgb(255_255_255/0.06)]";

export const sectionPadding = "py-24 sm:py-32";
