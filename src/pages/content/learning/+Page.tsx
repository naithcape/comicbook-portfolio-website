export function Page() {
  return (
    <div>
      <h2 className="title mb-6">Learning</h2>
      <p className="subtitle mb-4">Notes on continuous improvement</p>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-1">
          <img
            className="panel-img w-full aspect-[16/9] object-cover mb-4"
            src="https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg"
            alt="Books and laptop for study"
            loading="lazy"
          />
          <div className="speech-bubble">
            <p>A living notebook of ongoing learning paths, experiments, and reflections. Momentum comes from small loops repeated with
            care — read, practice, reflect, share.</p>
          </div>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-2 comic-effect-zoom">
          <h3 className="font-bold mb-2">Active Tracks</h3>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Systems Design — queues, backpressure, idempotency, observability basics.</li>
            <li>TypeScript Mastery — stricter types, generics in UI patterns, DX ergonomics.</li>
            <li>Audio Engineering — mic technique, gain staging, spatial effects restraint.</li>
            <li>Data for Racing — telemetry review cadence, lap deltas, setup journals.</li>
          </ul>
        </div>
        
        <div className="panel panel-2">
          <h3 className="font-bold mb-2">Reflections</h3>
          <div className="mb-4">
            <p>Learning compounds when scoped: one concept practiced across three small projects beats a broad survey. Repetition
            makes recall automatic, freeing attention for nuance.</p>
          </div>
          <div className="speech-bubble speech-bubble-right">
            <p>Teaching others clarifies thought. Drafting notes forces me to name decisions and tradeoffs, which then feed back into
            better defaults the next time around.</p>
          </div>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-2 comic-effect-action">
          <h3 className="font-bold mb-2">Study Habits</h3>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Daily 45‑minute focus block, device‑free.</li>
            <li>Weekly recap: what worked, what to change.</li>
            <li>Flashcards for core concepts, not trivia.</li>
          </ul>
        </div>
        
        <div className="panel panel-2">
          <h3 className="font-bold mb-2">Currently Learning</h3>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Event sourcing patterns</li>
            <li>Audio mixing for intimate textures</li>
            <li>Race data visualization</li>
          </ul>
        </div>
      </div>
      
      <div className="comic-grid">
        <div className="panel panel-1">
          <h3 className="font-bold mb-2">Milestones</h3>
          <div className="speech-bubble">
            <p>Drafting a small systems‑design glossary and a repeatable project brief template.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="font-bold comic-effect-action">Never stop learning!</p>
      </div>
    </div>
  )
}