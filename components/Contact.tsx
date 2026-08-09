const LINKEDIN_URL = "https://www.linkedin.com/in/khadijabilal/";
const GITHUB_URL = "https://github.com/KHADIJA2008-KB";
const CV_URL = "/khadija-bilal-cv.pdf";
const BOOKING_URL = "https://calendly.com/khadijabilal/30min";
const linkButtonClassName = "inline-flex items-center justify-center rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-ink transition hover:border-accent/60 hover:text-accent";

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
        <p className="reveal-on-scroll font-mono text-xs text-accent">// contact</p>
        <h2 className="reveal-on-scroll mt-4 max-w-lg font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          Building something worth building together?
        </h2>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <a
            href="mailto:khadijabilal888@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent/90"
          >
            khadijabilal888@gmail.com
          </a>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={linkButtonClassName}>
            LinkedIn
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={linkButtonClassName}>
            GitHub
          </a>
          <a href={CV_URL} download className={linkButtonClassName}>
            CV / Resume
          </a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={linkButtonClassName}>
            Book a call
          </a>
        </div>

        <p className="mt-10 font-mono text-xs text-faint">
          or keep it easy — ask her agent in the corner.
        </p>
      </div>
      
      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-8 sm:px-8">
          <p className="font-mono text-xs text-faint">
            © 2026 Khadija Bilal. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </footer>
    </section>
  );
}