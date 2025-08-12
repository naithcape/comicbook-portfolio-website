export function Page() {
  return (
    <div>
      <h2 className="title mb-6">Upcoming & Past Events</h2>
      <p className="subtitle mb-4">Updated by Nenad Petrović - 09.08.2025</p>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-1">
          <img
            className="panel-img w-full aspect-[16/9] object-cover mb-4"
            src="https://images.pexels.com/photos/2735037/pexels-photo-2735037.jpeg"
            alt="Crowd at an event"
            loading="lazy"
          />
          <div className="speech-bubble">
            <p>Explore the calendar of gatherings across technology, music, and racing. Below you'll find a curated list of upcoming appearances.</p>
          </div>
          <p className="mt-4">Dates may shift; check always when is last time updated.</p>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-2 comic-effect-zoom">
          <h3 className="font-bold mb-2">Upcoming Events</h3>
          <div className="thought-bubble">
            <p>Stay tuned for upcoming updates with all the info you need about the events.</p>
          </div>
          
          {/* Uncomment when events are available
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold mb-1">Landing in Brasil</h4>
              <p className="text-sm text-blue-400">October 04, 2025</p>
              <p className="mt-1">I'll be landing in Brasil and then heading straight to the hotel to get settled.
                Planning to take a little vacation afterward—just some time to relax, enjoy the surroundings,
                and recharge before getting back to everything else.
              </p>
              <p className="text-xs mt-1">October 2025 • Brasil</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-1">Racing Championship — National Circuit</h4>
              <p className="text-sm text-blue-400">November 08 to 22, 2025 • Circuit Speedway, New York</p>
              <p className="mt-1">Season finale — setup notes and telemetry preview.</p>
              <p className="text-xs mt-1">November 2025 • New York</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-1">Electronic Music Festival — Live Set</h4>
              <p className="text-sm text-blue-400">Dec 5, 2025 • Harmony Hall, Los Angeles</p>
              <p className="mt-1">Ambient/modern classical program with new material.</p>
              <p className="text-xs mt-1">December 2025 • Los Angeles</p>
            </div>
          </div>
          */}
        </div>
        
        <div className="panel panel-2 comic-effect-action">
          <h3 className="font-bold mb-2">Event Briefs</h3>
          <div className="space-y-4">
            <div className="custom-box-dashed">
              <h4 className="font-semibold text-blue-400 mb-1">Traveling to Brasil</h4>
              <p>Adventure and culture await—stay tuned for updates.</p>
              <p className="text-xs mt-1">October 2025 • Brasil</p>
            </div>
            
            <div className="custom-box-dashed">
              <h4 className="font-semibold text-blue-400 mb-1">Traveling to Spain</h4>
              <p>Adventure and culture await—stay tuned for updates.</p>
              <p className="text-xs mt-1">December 2025 • Spain</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="comic-grid">
        <div className="panel panel-1">
          <div className="text-center">
            <h3 className="font-bold mb-2" style={{transform: "rotate(-2deg)"}}>Want to Meet Up?</h3>
            <div className="speech-bubble speech-bubble-right">
              <p>If you'll be at any of these events and want to connect, drop me a line at <a href="mailto:hey@naithcape.com">hey@naithcape.com</a>!</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="font-bold">Stay tuned for more exciting events!</p>
      </div>
    </div>
  )
}