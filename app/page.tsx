import Nav from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import { education, experience, profile } from "@/content/resume";

// Structured data so search engines can read the profile.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: { "@type": "PostalAddress", addressLocality: "Billings", addressRegion: "MT", addressCountry: "US" },
  worksFor: { "@type": "Organization", name: experience[0].company },
  alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
