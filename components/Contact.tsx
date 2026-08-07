const LINKEDIN_URL = "REPLACE_ME";
const GITHUB_URL = "https://github.com/KHADIJA2008-KB";
const CV_URL = "/khadija-bilal-cv.pdf";
const BOOKING_URL = "REPLACE_ME";

const linkButtonClassName =
  "inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 font-mono text-xs text-muted transition hover:border-accent2/60 hover:text-accent2";

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
        <p className="font-mono text-xs text-accent2">// contact</p>
        <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
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
            © {new Date().getFullYear()} Khadija Bilal. Built with Next.js
            &amp; Tailwind CSS.
          </p>
        </div>
      </footer>
    </section>
  );
}
