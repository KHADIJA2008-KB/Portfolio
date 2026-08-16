"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TimeInvested from "@/components/TimeInvested";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import AgentWidget from "@/components/AgentWidget";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 z-0 bg-grain" />

      <nav className="sticky top-0 z-40 border-b border-border/70 bg-surface/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
          <a href="#" className="font-display text-sm font-semibold text-ink">
            Khadija Bilal
          </a>
          <div className="hidden gap-7 font-mono text-xs text-muted sm:flex">
            <a href="#about" className="transition hover:text-accent">
              about
            </a>
            <a href="#skills" className="transition hover:text-accent">
              skills
            </a>
            <a href="#projects" className="transition hover:text-accent">
              projects
            </a>
            <a href="#writing" className="transition hover:text-accent">
              writing
            </a>
            <a href="#contact" className="transition hover:text-accent">
              contact
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <TimeInvested />
        <Skills />
        <Projects />
        <Writing />
        <Contact />
      </div>

      <AgentWidget />
    </main>
  );
}
