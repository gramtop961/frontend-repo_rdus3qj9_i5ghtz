import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0B1B26]">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <section id="solutions" className="py-20 bg-[#F7FFFB]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">AI as your operations copilot</h2>
                <p className="mt-4 text-[#445566]">WorkMint unifies workflows across departments and augments them with AI: draft letters, summarize tickets, generate reports, predict risks, and automate routine approvals. Built for speed, security, and scale.</p>
                <ul className="mt-6 space-y-2 text-sm text-[#445566] list-disc list-inside">
                  <li>Secure role-based access across every module</li>
                  <li>Audit-ready logs and insights for compliance</li>
                  <li>Modular setup to fit IT and Non‑IT teams</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#E6F8EE] p-6 bg-gradient-to-br from-[#DFFCF0] to-white shadow-sm">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-xl p-4 bg-white border border-[#E6F8EE]">
                    <p className="font-medium text-[#0B1B26]">Finance Snapshot</p>
                    <p className="mt-1 text-[#445566]">Realtime revenue, burn, and margins.</p>
                  </div>
                  <div className="rounded-xl p-4 bg-white border border-[#E6F8EE]">
                    <p className="font-medium text-[#0B1B26]">HR Health</p>
                    <p className="mt-1 text-[#445566]">Attendance, leaves, and PTO balance.</p>
                  </div>
                  <div className="rounded-xl p-4 bg-white border border-[#E6F8EE]">
                    <p className="font-medium text-[#0B1B26]">Delivery Pulse</p>
                    <p className="mt-1 text-[#445566]">Sprints, tickets, SLAs, and risks.</p>
                  </div>
                  <div className="rounded-xl p-4 bg-white border border-[#E6F8EE]">
                    <p className="font-medium text-[#0B1B26]">Sales Pipeline</p>
                    <p className="mt-1 text-[#445566]">Leads, stages, and conversions.</p>
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
