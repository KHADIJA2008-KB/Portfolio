import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import AgentWidget from "@/components/AgentWidget";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 z-0 bg-grain" />

      <nav className="sticky top-0 z-40 border-b border-border/70 bg-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
          <a href="#" className="font-display text-sm font-semibold text-ink">
            Khadija Bilal
          </a>
          <div className="hidden gap-7 font-mono text-xs text-muted sm:flex">
            <a href="#about" className="transition hover:text-accent2">
              about
            </a>
            <a href="#skills" className="transition hover:text-accent2">
              skills
            </a>
            <a href="#projects" className="transition hover:text-accent2">
              projects
            </a>
            <a href="#writing" className="transition hover:text-accent2">
              writing
            </a>
            <a href="#contact" className="transition hover:text-accent2">
              contact
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Writing />
        <Contact />
      </div>

      <AgentWidget />
    </main>
  );
}
