export function Page() {
  return (
    <div>
      <h2 className="title mb-6">Works, Releases & Notes</h2>
      <p className="subtitle mb-4">Updated by Nenad Petrović - 09.08.2025</p>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-1">
          <img
            className="panel-img w-full aspect-[16/9] object-cover mb-4"
            src="https://images.pexels.com/photos/10653499/pexels-photo-10653499.jpeg"
            alt="Studio desk with instruments"
            loading="lazy"
          />
          <div className="speech-bubble">
            <p>The debut album delves into the journey of where I've been over the years, the reasons behind the absence,
            the events that shaped the path, what listeners can expect in the future.</p>
          </div>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-2 comic-effect-zoom">
          <h3 className="font-bold mb-2">Album: Back Like I Never Left</h3>
          <p className="mb-4">Releasing September 2025</p>
          <div className="thought-bubble mb-4">
            <p>A journey through sound and memories</p>
          </div>
        </div>
        
        <div className="panel panel-2">
          <h3 className="font-bold mb-2">Tracklist</h3>
          <ol className="list-decimal list-inside space-y-1 pl-2">
            <li>Back Like I Never Left — 2:40</li>
            <li>Count Me Out — 2:34</li>
            <li>Forever — 2:54</li>
            <li>Ghetto Party — 2:58</li>
            <li>No Brakes in a Bimmer — 2:19</li>
            <li>About to be Again — 2:34</li>
            <li>Boom Drive — 1:57</li>
            <li>Chap — 2:46</li>
            <li>Spring — 3:24</li>
            <li>Ride to Remember — 3:50</li>
            <li>Nightparty — 2:58</li>
            <li>Spinnin — 4:05</li>
            <li>Throtle Therapy — 3:18</li>
          </ol>
        </div>
      </div>
      
      <div className="comic-grid">
        <div className="panel panel-1 comic-effect-action">
          <h3 className="font-bold mb-2">Live Sets & Briefs</h3>
          <div className="speech-bubble speech-bubble-right">
            <p>Stay tuned for upcoming updates with all the info you need about the music.</p>
          </div>
          
          {/* Uncomment when content is available
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="panel panel-tall custom-box">
              <h4 className="font-semibold mb-1">Ambient Room — Session IV</h4>
              <p>Live recording exploring long‑form drones and piano motifs.</p>
              <p className="text-xs mt-1">May 2025 • Berlin</p>
            </div>
            <div className="panel panel-tall custom-box">
              <h4 className="font-semibold mb-1">Studio Notes</h4>
              <p>On microphone placement and reverb tails for intimate textures.</p>
              <p className="text-xs mt-1">April 2025 • Los Angeles</p>
            </div>
            <div className="panel panel-tall custom-box">
              <h4 className="font-semibold mb-1">Collaboration Teaser</h4>
              <p>String quartet sketches arranged for modular rig.</p>
              <p className="text-xs mt-1">TBA • Remote</p>
            </div>
          </div>
          */}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="font-bold">Stay tuned for more music updates!</p>
      </div>
    </div>
  )
}