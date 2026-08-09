export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
        <p className="reveal-on-scroll font-mono text-xs text-accent">// contact</p>
        <h2 className="reveal-on-scroll mt-4 max-w-lg font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          Building something worth building together?
        </h2>

        {/* WEB3FORMS CONTACT FORM */}
        <form 
          action="https://api.web3forms.com/submit" 
          method="POST" 
          className="reveal-on-scroll mt-8 max-w-lg space-y-4"
        >
          {/* REPLACE THIS VALUE WITH YOUR ACTUAL WEB3FORMS KEY */}
          <input 
            type="hidden" 
            name="access_key" 
            value="dc52b7ac-7bd5-4567-957e-a7e3f4912461" 
          />

          <div>
            <label htmlFor="name" className="block text-xs font-mono text-faint mb-1">
              Name
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder="Your Name"
              className="w-full rounded-md border border-border bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-faint/50 focus:border-accent focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono text-faint mb-1">
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder="your.email@example.com"
              className="w-full rounded-md border border-border bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-faint/50 focus:border-accent focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono text-faint mb-1">
              Message
            </label>
            <textarea 
              id="message" 
              name="message" 
              rows={4} 
              required 
              placeholder="Write your message here..."
              className="w-full rounded-md border border-border bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-faint/50 focus:border-accent focus:outline-none"
            ></textarea>
          </div>

          {/* Spam Prevention */}
          <input 
            type="checkbox" 
            name="botcheck" 
            className="hidden" 
            style={{ display: 'none' }} 
          />

          <button 
            type="submit" 
            className="button-hover inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-white"
          >
            Send Message
          </button>
        </form>

        {/* SOCIAL LINKS BELOW FORM */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <a 
            href="mailto:khadijabilal888@gmail.com" 
            className="button-hover inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-ink"
          >
            khadijabilal888@gmail.com
          </a>
          <a 
            href="https://github.com/KHADIJA2008-KB" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button-hover inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-ink"
          >
            github.com/KHADIJA2008-KB
          </a>
        </div>
        
        <p className="reveal-on-scroll mt-10 font-mono text-xs text-faint">
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