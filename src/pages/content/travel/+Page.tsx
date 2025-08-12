export function Page() {
  return (
    <div>
      <h2 className="title mb-6">Travel</h2>
      <p className="subtitle mb-4">Journeys & notes</p>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-1">
          <img
            className="panel-img w-full aspect-[16/9] object-cover mb-4"
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
            alt="View from a hill over a city"
            loading="lazy"
          />
          <div className="speech-bubble">
            <p>Travel sharpens attention. These are light guides and notes from places that reshaped my sense of pace, space, and food.
            Meant for walking, lingering, and noticing.</p>
          </div>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-2 comic-effect-zoom">
          <h3 className="font-bold mb-2">Field Notes</h3>
          <div className="mb-4">
            <p>Walk first, then plan. An unhurried loop around a neighborhood reveals more than any list. Ask a local where they'd take a
            friend with one day in town — that answer beats rankings.</p>
          </div>
        </div>
        
        <div className="panel panel-2 comic-effect-action">
          <h3 className="font-bold mb-2">More Tips</h3>
          <div className="speech-bubble speech-bubble-right">
            <p>Eat where the line is mostly locals. Pick one museum or one district per day. Leave room for a detour; that's where the
            memory lives.</p>
          </div>
        </div>
      </div>
      
      <div className="comic-grid">
        <div className="panel panel-1">
          <h3 className="font-bold mb-2">Essentials</h3>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Carry‑on only: layers, neutral palette, comfortable shoes.</li>
            <li>Offline maps and pinned spots in advance.</li>
            <li>Reusable bottle, small notebook, lightweight backpack.</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="font-bold comic-effect-action">Adventure awaits around every corner!</p>
      </div>
    </div>
  )
}