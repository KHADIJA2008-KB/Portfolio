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

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            id="contact-form"
            className="space-y-6 rounded-3xl border border-border bg-surface/80 p-8 shadow-sm"
          >
            <input type="hidden" name="access_key" value="dc52b7ac-7bd5-4567-957e-a7e3f4912461" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-ink/80">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full rounded-2xl border border-border bg-white/90 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-ink/80">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your.email@example.com"
                className="w-full rounded-2xl border border-border bg-white/90 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-ink/80">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your message here..."
                className="min-h-[140px] w-full rounded-2xl border border-border bg-white/90 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent/90"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <a
                href="mailto:khadijabilal888@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent/90"
              >
                khadijabilal888@gmail.com
              </a>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
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
            </div>

            <p className="font-mono text-xs text-faint">
              or keep it easy — ask her agent in the corner.
            </p>
          </div>
        </div>
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