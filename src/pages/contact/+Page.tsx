export function Page() {
  return (
    <>
      <section className="mb-8">
        <p className="kicker mb-2">Contact</p>
        <h1 className="headline text-4xl md:text-5xl mb-1">Send a Note</h1>
        <p className="byline">Editorial & General Inquiries</p>
        <hr className="rule my-3" />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <article className="lg:col-span-8">
          <p className="lead drop-cap mb-3 hyphens-auto">
            Have a question, want to collaborate, or book an appearance? Use the email or linkedin — I typically reply within one business day.
          </p>

          <section className="mt-8">
            <p className="section-label mb-2">FAQ</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-1">Freelance projects?</h4>
                <p>Yes — availability varies; include scope and timeline in your note.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Response time</h4>
                <p>Usually within 24 hours on weekdays.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Speaking</h4>
                <p>Happy to discuss talks and workshops. Please share event details.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Consulting</h4>
                <p>Limited slots for product and front‑end strategy.</p>
              </div>
            </div>
          </section>
        </article>

        <aside className="lg:col-span-4">
          <p className="section-label mb-3">Direct</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li><a href="mailto:hey@naithcape.com">hey@naithcape.com</a></li>
            <li><a href="http://github.com/naithcape">GitHub</a> / <a href="https://linkedin.com/in/naithcape">LinkedIn</a></li>
          </ul>

          <hr className="rule my-4" />

          <p className="section-label mb-2">Working Hours</p>
          <ul className="text-sm space-y-1">
            <li>Mon–Fri • 09:00–18:00 CET/CEST</li>
            <li>Typical reply: within 1 business day</li>
          </ul>
        </aside>
      </div>
    </>
  )
}