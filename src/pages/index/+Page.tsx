export function Page() {
  return (
    <div>
      <h2 className="title mb-6">Welcome to My Comic World!</h2>
      
      <div className="comic-grid mb-10">
        <div className="panel panel-1">
          <h3 className="subtitle mb-3">Time to Meet Naithcape: The Latest Edition in the Story of My Life</h3>
          <p className="author mb-2">Nenad Petrović - 09.08.2025</p>
          <img
            className="panel-img w-full aspect-[16/9] object-cover mb-4"
            src="https://images.pexels.com/photos/23475/pexels-photo.jpg"
            alt="Desk with computer and creative items"
            loading="lazy"
          />
          <div className="speech-bubble">
            <p>Welcome to the all-new Naithcape website! I've completely redesigned it as a comic book experience!</p>
          </div>
        </div>
      </div>
      
      <div className="comic-grid mb-10">
        <div className="panel panel-2 comic-effect-zoom">
          <h3 className="font-bold mb-2">The New Design</h3>
          <div className="mb-4">
            <p>The website now features a comic book style with panels, speech bubbles, and page navigation!</p>
          </div>
        </div>
        
        <div className="panel panel-2">
          <h3 className="font-bold mb-2">The Story Continues</h3>
          <p className="mb-3">Each section of the site is now a page in my comic book story, with vibrant visuals and engaging content.</p>
          <div className="speech-bubble speech-bubble-right">
            <p>Navigate through the pages to explore different aspects of my work and interests!</p>
          </div>
        </div>
      </div>
      
      <div className="comic-grid">
        <div className="panel panel-3 comic-effect-action dark:bg-slate-800">
          <h3 className="font-bold mb-2">Upcoming Events</h3>
          <p>Preparing a series of parties, wild meetups, and daily-to-night fun.</p>
          <a href="/events" className="block mt-3 font-bold">View details →</a>
        </div>
        
        <div className="panel panel-3 dark:bg-slate-800">
          <h3 className="font-bold mb-2">Upcoming Music</h3>
          <p>Preparing a wave of new tracks to keep you enjoying day and night.</p>
          <a href="/music" className="block mt-3 font-bold">Listen →</a>
        </div>
        
        <div className="panel panel-3 dark:bg-slate-800">
          <h3 className="font-bold mb-2">Upcoming Racing</h3>
          <p>Diving into the thrill of racing—speed, skill, and pure adrenaline.</p>
          <a href="/racing" className="block mt-3 font-bold">View details →</a>
        </div>
      </div>
      
      <div className="mt-10 text-center">
        <p className="font-bold">Turn the page to continue the adventure!</p>
      </div>
    </div>
  )
}
