export function Page() {
  return (
    <div>
      <h2 className="title mb-6">Resources</h2>
      <p className="subtitle mb-4">Tools, links, and references</p>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-1">
          <img
            className="panel-img w-full aspect-[16/9] object-cover mb-4"
            src="https://images.pexels.com/photos/1117153/pexels-photo-1117153.jpeg"
            alt="Workspace with tools"
            loading="lazy"
          />
          <div className="speech-bubble">
            <p>Curated links and tools I return to when building, learning, and shipping. Practical, lightweight, and well‑documented
            resources beat novelty nine times out of ten.</p>
          </div>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-2 comic-effect-zoom">
          <h3 className="font-bold mb-2">Tooling</h3>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>TypeScript — strong types, clear contracts, safer refactors.</li>
            <li>Vite — fast dev server and sensible build defaults.</li>
            <li>Tailwind — utility‑first styling with consistency and speed.</li>
            <li>ESLint & Prettier — keep style and quality automatic.</li>
          </ul>
        </div>
        
        <div className="panel panel-2">
          <h3 className="font-bold mb-2">Learning</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="panel-tall custom-box">
              <h4 className="font-semibold mb-1">Systems & Architecture</h4>
              <ul className="list-disc list-inside text-sm space-y-1 pl-2">
                <li><a href="https://martinfowler.com/" target="_blank" rel="noreferrer">Martin Fowler</a></li>
                <li><a href="https://aws.amazon.com/builders-library/" target="_blank" rel="noreferrer">AWS Builders' Library</a></li>
              </ul>
            </div>
            <div className="panel-tall custom-box">
              <h4 className="font-semibold mb-1">Web Fundamentals</h4>
              <ul className="list-disc list-inside text-sm space-y-1 pl-2">
                <li><a href="https://developer.mozilla.org/" target="_blank" rel="noreferrer">MDN Web Docs</a></li>
                <li><a href="https://web.dev/" target="_blank" rel="noreferrer">web.dev</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-2 comic-effect-action">
          <h3 className="font-bold mb-2">References</h3>
          <div className="mb-4">
            <p>Prefer canonical docs and small examples. When evaluating a new tool, look for a quickstart, a migration guide, and a
            clear statement of scope. If those are missing, reconsider.</p>
          </div>
          <div className="speech-bubble speech-bubble-right">
            <p>Keep private notes on gotchas and defaults. The real speedup is avoiding the same pitfalls twice.</p>
          </div>
        </div>
        
        <div className="panel panel-2">
          <h3 className="font-bold mb-2">Handy Links</h3>
          <ul className="list-disc list-inside text-sm space-y-1 pl-2">
            <li><a href="https://regex101.com/" target="_blank" rel="noreferrer">Regex101</a></li>
            <li><a href="https://caniuse.com/" target="_blank" rel="noreferrer">Can I Use</a></li>
            <li><a href="https://transform.tools/" target="_blank" rel="noreferrer">transform.tools</a></li>
          </ul>
        </div>
      </div>
      
      <div className="comic-grid">
        <div className="panel panel-2">
          <h3 className="font-bold mb-2">Starter Kits</h3>
          <ul className="list-disc list-inside text-sm space-y-1 pl-2">
            <li>SPA template with TypeScript and Tailwind</li>
            <li>API server with sensible defaults</li>
          </ul>
        </div>
        
        <div className="panel panel-2 comic-effect-zoom">
          <h3 className="font-bold mb-2">Cheatsheets</h3>
          <ul className="list-disc list-inside text-sm space-y-1 pl-2">
            <li>HTTP status codes at a glance</li>
            <li>Keyboard shortcuts for your editor</li>
            <li>A11y color contrast quickcheck</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="font-bold comic-effect-action">Tools are only as good as the craftsperson using them!</p>
      </div>
    </div>
  )
}