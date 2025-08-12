export function Page() {
  return (
    <div>
      <h2 className="title mb-6">Projects, Notes & Tools</h2>
      <p className="subtitle mb-4">Updated by Nenad Petrović - 09.08.2025</p>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-1">
          <img
            className="panel-img w-full aspect-[16/9] object-cover mb-4"
            src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg"
            alt="Developer desk with laptop and code"
            loading="lazy"
          />
          <h3 className="font-bold mb-2">Development at finest</h3>
          <p className="mb-2">2021 - </p>
          <div className="speech-bubble">
            <p>Full-stack web developer specializing in building scalable, high-performance applications.
            I deliver clean, user-centric solutions that align with client goals and prioritize efficiency and security.</p>
          </div>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-2 comic-effect-zoom">
          <h3 className="font-bold mb-2">Highlights</h3>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Built agency and internal systems.</li>
            <li>Developed open-source projects.</li>
            <li>Contributed to other projects.</li>
          </ul>
        </div>
        
        <div className="panel panel-2">
          <h3 className="font-bold mb-2">Stack</h3>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Kiru + Tailwind</li>
            <li>Ruby On Rails with PostgreSQL</li>
          </ul>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-2 comic-effect-action">
          <h3 className="font-bold mb-2">Notes</h3>
          <div className="mb-4">
            <p>Start every project by defining clear performance goals.
            Regularly measure key user experience metrics and integrate these checks into your development workflow.</p>
          </div>
          <div className="speech-bubble speech-bubble-right">
            <p>Error boundaries are product features. Treat failure paths as part of the design system with copy, motion, and affordances.</p>
          </div>
        </div>
        
        <div className="panel panel-2">
          <h3 className="font-bold mb-2">Toolkit</h3>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Kiru, Tailwind</li>
            <li>Ruby On Rails</li>
            <li>PostgreSQL</li>
            <li>Jetbrains</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="font-bold comic-effect-action">Building the digital future, one line of code at a time!</p>
      </div>
    </div>
  )
}