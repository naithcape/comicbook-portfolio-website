export function Page() {
  return (
    <div>
      <h2 className="title mb-6">Advices</h2>
      <p className="subtitle mb-4">Quiet notes and practical tips</p>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-1">
          <img
            className="panel-img w-full aspect-[16/9] object-cover mb-4"
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop"
            alt="Notebook with checklist"
            loading="lazy"
          />
          <div className="speech-bubble">
            <p>A small corner for pragmatic guidance collected from building software, making music, and running events. These are the
            habits and heuristics I reach for when momentum matters.</p>
          </div>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-2 comic-effect-zoom">
          <h3 className="font-bold mb-2">Workflows</h3>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Reduce scope until it ships: pick one outcome, one audience, one deadline.</li>
            <li>Work in passes: structure → implement → refine. Don't polish too early.</li>
            <li>Make state visible: logs, checklists, and dashboards beat memory.</li>
            <li>Name the unknowns: write questions down, then timebox the answers.</li>
          </ul>
        </div>
        
        <div className="panel panel-2">
          <h3 className="font-bold mb-2">Craft & Code</h3>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Prefer boring technology for critical paths; innovate at the edges.</li>
            <li>Write code like an article: clear headline, short paragraphs, helpful captions (comments).</li>
            <li>Delete to improve: remove config, branches, and features that don't earn their keep.</li>
            <li>Latency is a feature. Measure before you guess.</li>
          </ul>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-2 comic-effect-action">
          <h3 className="font-bold mb-2">Communication</h3>
          <div className="mb-4">
            <p>Write short, specific updates: goal, status, next step. Link details instead of pasting them everywhere.</p>
          </div>
          <div className="speech-bubble speech-bubble-right">
            <p>Prefer prototypes when words fail. A clickable mock beats a thousand messages.</p>
          </div>
        </div>
        
        <div className="panel panel-2">
          <h3 className="font-bold mb-2">Quick Tips</h3>
          <div className="space-y-4">
            <div className="panel-tall custom-box">
              <h4 className="font-semibold mb-1">One Inbox Policy</h4>
              <p>Pipe notifications into a single place; schedule processing, not reacting.</p>
            </div>
            <div className="panel-tall custom-box">
              <h4 className="font-semibold mb-1">Budget Breaks</h4>
              <p>Set a 50/10 timer: 50 minutes focused, 10 minutes off screen.</p>
            </div>
            <div className="panel-tall custom-box">
              <h4 className="font-semibold mb-1">Definition of Done</h4>
              <p>Shipped, documented, measured. Anything less is still in progress.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="comic-grid">
        <div className="panel panel-1">
          <h3 className="font-bold mb-2">Checklists</h3>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>README updated and example added</li>
            <li>Edge cases covered and monitored</li>
            <li>Decision log: why this approach</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="font-bold comic-effect-action">Apply these tips for better results!</p>
      </div>
    </div>
  )
}