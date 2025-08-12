export function Page() {
  return (
    <div>
      <h2 className="title mb-6">Send a Note</h2>
      <p className="subtitle mb-4">Editorial & General Inquiries</p>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-1">
          <div className="speech-bubble">
            <p>Have a question, want to collaborate, or book an appearance? Use the email or linkedin — I typically reply within one business day.</p>
          </div>
        </div>
      </div>
      
      <div className="comic-grid mb-8">
        <div className="panel panel-2 comic-effect-zoom">
          <h3 className="font-bold mb-2">FAQ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-1">Freelance projects?</h4>
              <p>Yes — availability varies; include scope and timeline in your note.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Response time</h4>
              <p>Usually within 24 hours on weekdays.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Speaking</h4>
              <p>Happy to discuss talks and workshops. Please share event details.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Consulting</h4>
              <p>Limited slots for product and front‑end strategy.</p>
            </div>
          </div>
        </div>
        
        <div className="panel panel-2">
          <h3 className="font-bold mb-2">Direct</h3>
          <div className="  mb-4">
            <p>Reach out directly through these channels!</p>
          </div>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><a href="mailto:hey@naithcape.com">hey@naithcape.com</a></li>
            <li><a href="http://github.com/naithcape">GitHub</a> / <a href="https://linkedin.com/in/naithcape">LinkedIn</a></li>
          </ul>
          
          <h3 className="font-bold mb-2 mt-4">Working Hours</h3>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Mon–Fri • 09:00–18:00 CET/CEST</li>
            <li>Typical reply: within 1 business day</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="font-bold comic-effect-action">Looking forward to hearing from you!</p>
      </div>
    </div>
  )
}