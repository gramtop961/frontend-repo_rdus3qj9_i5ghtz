import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <section id="solutions" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">AI as your operations copilot</h2>
                <p className="mt-4 text-gray-600">WorkMint unifies workflows across departments and augments them with AI: draft letters, summarize tickets, generate reports, predict risks, and automate routine approvals. Built for speed, security, and scale.</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-700 list-disc list-inside">
                  <li>Secure role-based access across every module</li>
                  <li>Audit-ready logs and insights for compliance</li>
                  <li>Modular setup to fit IT and Non‑IT teams</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-slate-50 to-white shadow-sm">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-xl p-4 bg-white border border-slate-200">
                    <p className="font-medium">Finance Snapshot</p>
                    <p className="mt-1 text-gray-600">Realtime revenue, burn, and margins.</p>
                  </div>
                  <div className="rounded-xl p-4 bg-white border border-slate-200">
                    <p className="font-medium">HR Health</p>
                    <p className="mt-1 text-gray-600">Attendance, leaves, and PTO balance.</p>
                  </div>
                  <div className="rounded-xl p-4 bg-white border border-slate-200">
                    <p className="font-medium">Delivery Pulse</p>
                    <p className="mt-1 text-gray-600">Sprints, tickets, SLAs, and risks.</p>
                  </div>
                  <div className="rounded-xl p-4 bg-white border border-slate-200">
                    <p className="font-medium">Sales Pipeline</p>
                    <p className="mt-1 text-gray-600">Leads, stages, and conversions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
