export function Page() {
  return (
    <div>
      <h2 className="title mb-6">Books</h2>
      <p className="subtitle mb-4">On the shelf</p>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-1">
          <img
            className="panel-img w-full aspect-[16/9] object-cover mb-4"
            src="https://images.pexels.com/photos/7063757/pexels-photo-7063757.jpeg"
            alt="Books on a shelf"
            loading="lazy"
          />
          <div className="speech-bubble">
            <p>Highlights from books that shaped my thinking across technology, design, and life. These notes focus on ideas that transfer — principles you can reuse the next day at work.</p>
          </div>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-1">
          <h3 className="font-bold mb-3">Top Picks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="panel panel-tall custom-box">
              <h4 className="font-semibold mb-1">Critique of Pure Reason</h4>
              <p className="text-sm">Immanuel Kant • Philosophy</p>
              <p>Foundational work on knowledge and experience; dense but rewarding.</p>
            </div>
            <div className="panel panel-tall custom-box">
              <h4 className="font-semibold mb-1">The Art of Simple Living</h4>
              <p className="text-sm">Shunmyo Masuno • Lifestyle</p>
              <p>Lightweight, practical reflections to revisit every few months.</p>
            </div>
            <div className="panel panel-tall custom-box">
              <h4 className="font-semibold mb-1">Notes from Underground</h4>
              <p className="text-sm">Fyodor Dostoevsky • Fiction</p>
              <p>Psychological depth and paradox; a compact existential mirror.</p>
            </div>
            <div className="panel panel-tall custom-box">
              <h4 className="font-semibold mb-1">Socratic Dialogues</h4>
              <p className="text-sm">Plato • Philosophy</p>
              <p>Questions as engines of clarity; a model for rigorous inquiry.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-3 comic-effect-zoom dark:bg-slate-800">
          <h4 className="font-semibold mb-1">The Book of Questions</h4>
          <p className="text-sm">Pablo Neruda • Poetry</p>
          <p>Playful, open‑ended prompts that prime curiosity and reflection.</p>
        </div>
        
        <div className="panel panel-3 dark:bg-slate-800">
          <h4 className="font-semibold mb-1">Man's Search for Meaning</h4>
          <p className="text-sm">Viktor E. Frankl • Psychology</p>
          <p>On purpose and resilience; concise and frequently re‑readable.</p>
        </div>
        
        <div className="panel panel-3 comic-effect-action dark:bg-slate-800">
          <h4 className="font-semibold mb-1">Socratic Questioning</h4>
          <p className="text-sm">Scott H. Waltman et al. • Practice</p>
          <p>Structured questioning to surface assumptions and alternatives.</p>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-2 dark:bg-slate-800">
          <h3 className="font-bold mb-3">Recommended</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <h4 className="font-semibold mb-1">The Pragmatic Programmer</h4>
              <p className="text-sm">Andrew Hunt & David Thomas • Craft</p>
              <p>Timeless heuristics for sustainable pace and quality.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Atomic Habits</h4>
              <p className="text-sm">James Clear • Process</p>
              <p>Environment design beats willpower; build systems, not goals.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Range</h4>
              <p className="text-sm">David Epstein • Thinking</p>
              <p>Generalists thrive by borrowing mental models across domains.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Thinking, Fast and Slow</h4>
              <p className="text-sm">Daniel Kahneman • Psychology</p>
              <p>Biases and decision‑making models with everyday impact.</p>
            </div>
          </div>
        </div>
        
        <div className="panel panel-2 dark:bg-slate-800">
          <h3 className="font-bold mb-3">More Recommendations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <h4 className="font-semibold mb-1">Design of Everyday Things</h4>
              <p className="text-sm">Don Norman • Design</p>
              <p>Affordances, feedback, and errors as design constraints.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Deep Work</h4>
              <p className="text-sm">Cal Newport • Focus</p>
              <p>Protect attention; measure outcomes, not activity.</p>
            </div>
          </div>
          
          <div className="thought-bubble mt-4">
            <p>All‑time Favorites: The Art of Simple Living, Atomic Habits</p>
          </div>
        </div>
      </div>
      
      <div className="comic-grid">
        <div className="panel panel-1 dark:bg-slate-800">
          <h3 className="font-bold mb-2">Notes</h3>
          <div className="speech-bubble speech-bubble-right">
            <p>Reading with a pencil changes everything. Mark questions, summarize chapters in your own words, and log ideas to test.</p>
          </div>
          <div className="speech-bubble mt-4">
            <p>Mix depth and breadth: one deep technical book per quarter, one craft/process book per month.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="font-bold">Happy reading!</p>
      </div>
    </div>
  )
}