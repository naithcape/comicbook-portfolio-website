export function Page() {
  return (
    <div>
      <h2 className="title mb-6">About Me: The Origin Story</h2>
      <p className="subtitle mb-4">Updated by Nenad Petrović - 09.08.2025</p>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-1">
          <img
            className="panel-img w-full aspect-[16/9] object-cover mb-4"
            src="https://i.ibb.co/PvTWhKpg/webbanner.png"
            alt="Workspace desk"
            loading="lazy"
          />
          <div className="speech-bubble">
            <p className="font-bold">Hi there! I'm Nenad, an entrepreneur and creative who loves building cool things!</p>
          </div>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-2 panel-tall">
          <h3 className="font-bold mb-2">My Journey</h3>
          <div className="mb-4">
            <p>It all began in 2014 when I got into music production just for fun.</p>
          </div>
          <p className="mt-6">Between 2016 and 2020, I worked as a ghost music producer, helping others bring their projects to life.</p>
        </div>
        
        <div className="panel panel-2 panel-tall">
          <h3 className="font-bold mb-2">Career Evolution</h3>
          <p className="mb-3">In 2020, I switched things up and started learning graphic design and web development, finishing up in 2021.</p>
          <div className="speech-bubble speech-bubble-right">
            <p>Mixing design with tech gave me the skills to make things that look good and work well!</p>
          </div>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-1 comic-effect-zoom">
          <h3 className="font-bold mb-2">Current Chapter</h3>
          <p className="mb-3">Lately, I've taken a break from music to focus on my other big passion — cars and racing. I've traveled a lot, getting involved with the racing community and learning how discipline and practice make all the difference.</p>
          <div className="speech-bubble">
            <p>Now, I bring together everything I've learned to create projects that inspire and connect people!</p>
          </div>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-2 comic-effect-action">
          <h3 className="font-bold mb-2">My Values</h3>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Innovation with restraint: solve real problems, prefer simple tools.</li>
            <li>Continuous learning: improve processes as much as products.</li>
            <li>Community: share work, teach, and collaborate generously.</li>
          </ul>
        </div>
        
        <div className="panel panel-2">
          <h3 className="font-bold mb-2">Education & Certifications</h3>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>2020–2021 — AppBrewery Full Stack Web Developer Certificate</li>
            <li>2023 — CS50's Web Programming with Python and JavaScript</li>
          </ul>
        </div>
      </div>
      
      <div className="comic-grid">
        <div className="panel panel-2">
          <h3 className="font-bold mb-2">At a Glance</h3>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
            <dt className="font-bold">Role:</dt><dd>Entrepreneur</dd>
            <dt className="font-bold">Base:</dt><dd>Belgrade, Serbia</dd>
            <dt className="font-bold">Email:</dt><dd><a href="mailto:hey@naithcape.com">hey@naithcape.com</a></dd>
          </dl>
        </div>
        
        <div className="panel panel-2">
          <h3 className="font-bold mb-2">Find Me Online</h3>
          <div className="speech-bubble">
            <p>Connect with me on these platforms!</p>
          </div>
          <ul className="list-disc list-inside space-y-2 pl-2 mt-3">
            <li><a href="http://github.com/naithcape">GitHub</a></li>
            <li><a href="https://linkedin.com/in/naithcape">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="font-bold">For the curious: check out my <a href="/content/advices">advices</a>, <a href="/content/learning">learning</a>, <a href="/content/resources">resources</a>, <a href="/content/books">books</a>, and <a href="/content/travel">travel</a> notes!</p>
      </div>
    </div>
  )
}