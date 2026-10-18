import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Backdrop from "@/components/Backdrop";
import SpotlightTracker from "@/components/SpotlightTracker";
import { profile } from "@/content/resume";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const description =
  "David Mutch is a Senior Software Engineer in Billings, MT, building scalable web applications with React, TypeScript, Node.js, Python, and cloud infrastructure.";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description,
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description,
    type: "profile",
  },
};

export const viewport: Viewport = {
  themeColor: "#06070b",
  colorScheme: "dark",
};

// Runs before first paint so scroll reveals only hide content when JS is available.
const jsFlag = `document.documentElement.classList.add("js")`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body className="relative min-h-full bg-bg font-sans text-fg">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
        >
          Skip to content
        </a>
        <div aria-hidden="true" className="scroll-progress" />
        <Backdrop />
        {children}
        <SpotlightTracker />
      </body>
    </html>
  );
}
