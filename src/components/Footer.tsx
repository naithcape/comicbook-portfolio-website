export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer aria-label="Site footer" className="px-6 md:px-10 pb-10">
      <hr className="rule my-8" />

      <div className="comic-grid">
        <div className="panel panel-3 comic-effect-zoom">
          <h3 className="font-bold mb-2">About</h3>
          <div className="speech-bubble">
            <p className="text-sm">
              Naithcape shares projects and notes across events, music, racing, and development with a
              timeless, comic‑inspired layout.
            </p>
          </div>
        </div>

        <div className="panel panel-3">
          <h3 className="font-bold mb-2">Sections</h3>
          <ul className="space-y-1">
            <li><a href="/events">Events</a></li>
            <li><a href="/music">Music</a></li>
            <li><a href="/racing">Racing</a></li>
            <li><a href="/development">Development</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        <div className="panel panel-3 comic-effect-action">
          <h3 className="font-bold mb-2">Contact</h3>
          <div className="thought-bubble">
            <ul className="space-y-1">
              <li><a href="/contact">Contact page</a></li>
              <li><a href="mailto:hey@naithcape.com">hey@naithcape.com</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs custom-box p-2">
        <p style={{ fontFamily: 'Bangers, cursive' }}>&copy; {year} Naithcape.com</p>
        <p style={{ fontFamily: 'Comic Neue, cursive' }}>All content provided as-is.</p>
      </div>
    </footer>
  )
}