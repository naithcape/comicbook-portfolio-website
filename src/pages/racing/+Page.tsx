export function Page() {
  return (
    <div>
      <h2 className="title mb-6">Analysis, Events & Results</h2>
      <p className="subtitle mb-4">Updated by Nenad Petrović - 09.08.2025</p>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-1">
          <img
            className="panel-img w-full aspect-[16/9] object-cover mb-4"
            src="https://images.pexels.com/photos/12330299/pexels-photo-12330299.jpeg"
            alt="Race car on track"
            loading="lazy"
          />
          <h3 className="font-bold mb-2">Gearing Up for Next Year</h3>
          <p className="mb-2">Season 2025 Notes</p>
          <div className="speech-bubble">
            <p>How new year approaches, the focus shifts from chasing fleeting highs to maintaining steady, sustainable progress.
            This journey is about valuing consistency and pacing oneself for long-term success rather than short bursts of intensity.</p>
          </div>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-1 comic-effect-action">
          <div className="mb-4">
            <p>It's a commitment to growth, resilience, and mastering the rhythm that leads to lasting achievement.
            Get ready to embrace the challenge and make every step count.</p>
          </div>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-2 comic-effect-zoom">
          <h3 className="font-bold mb-2">Upcoming Races</h3>
          <div className="speech-bubble speech-bubble-right">
            <p>Stay tuned for upcoming updates with all the info you need about the racing.</p>
          </div>
          
          {/* Uncomment when content is available
          <div className="space-y-4 mt-4">
            <div className="panel-tall custom-box">
              <h4 className="font-semibold mb-1">National Circuit Championship</h4>
              <p className="text-sm">Oct 2025 • National Speedway, Los Angeles</p>
              <p className="mt-1">Target: tire conservation through laps 10–18; alternate wing setting A2.</p>
            </div>
            <div className="panel-tall custom-box">
              <h4 className="font-semibold mb-1">Endurance Racing Series — 24H</h4>
              <p className="text-sm">Aug 2025 • International Circuit, Miami</p>
              <p className="mt-1">Stint plan in 4s; prioritize traffic management at T6–T8.</p>
            </div>
            <div className="panel-tall custom-box">
              <h4 className="font-semibold mb-1">Club Sprint — Local Circuit</h4>
              <p className="text-sm">Sep 2025 • Time Attack</p>
              <p className="mt-1">Test revised aero balance and cold‑pressure baselines.</p>
            </div>
          </div>
          */}
        </div>
        
        <div className="panel panel-2">
          <h3 className="font-bold mb-2">Quick Stats</h3>
          <div className="mb-4">
            <p>Stay tuned for upcoming updates with all the info you need about the racing.</p>
          </div>
          
          {/* Uncomment when content is available
          <dl className="grid grid-cols-2 text-sm gap-x-4 gap-y-2 mt-4">
            <dt className="text-gray-600">Races</dt><dd>12</dd>
            <dt className="text-gray-600">Podiums</dt><dd>3</dd>
            <dt className="text-gray-600">Championships</dt><dd>1</dd>
            <dt className="text-gray-600">Fastest Lap</dt><dd>215 km/h</dd>
          </dl>
          */}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="font-bold comic-effect-action">Ready to race into the new season!</p>
      </div>
    </div>
  )
}