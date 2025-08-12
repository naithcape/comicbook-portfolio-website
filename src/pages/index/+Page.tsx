export function Page() {
  return (
    <main className="px-6 md:px-10 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <article className="lg:col-span-7">
          <p className="kicker mb-2">Lead Story</p>
          <h2 className="headline text-3xl md:text-4xl mb-1"> Time to Meet Naithcape: The Latest Edition in the Story of My Life</h2>
          <p className="byline mb-4">Nenad Petrović - 09.08.2025</p>
          <img
            className="w-full aspect-[16/9] object-cover border border-[#e6e1d8] news-img mb-4"
            src="https://images.pexels.com/photos/23475/pexels-photo.jpg"
            alt="Desk with newspaper and laptop"
            loading="lazy"
          />
          <p className="lead drop-cap mb-3">
            The Naithcape website debuts a refreshed front page inspired by classic print newspapers — complete with a strong
            masthead, multi‑column layout, and refined typography aimed at delivering information with clarity and style.
          </p>
          <p className="mb-3">
            Drawing from storied editorial traditions, the layout emphasizes hierarchy and readability. Sections such as events,
            music, racing, and development are now surfaced as distinct beats, enabling faster discovery and a more timeless feel.
          </p>
          <p>
            Expect ongoing iterations: this front page is just the first edition of many. Future issues will continue refining the
            balance of form and function while preserving performance.
          </p>
        </article>

        <aside className="lg:col-span-5">
          <p className="section-label mb-3">Briefs</p>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold mb-1">Upcoming Events</h3>
              <p>Preparing a series of parties, wild meetups, and daily-to-night fun.</p>
              <a href="/events">View details →</a>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Upcoming Music</h3>
              <p>Preparing a wave of new tracks to keep you enjoying day and night.</p>
              <a href="/music">Listen →</a>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Upcoming Racing</h3>
              <p>Diving into the thrill of racing—speed, skill, and pure adrenaline.</p>
              <a href="/racing">View details →</a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
