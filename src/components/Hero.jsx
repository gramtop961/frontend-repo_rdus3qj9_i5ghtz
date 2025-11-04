import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/80 text-white px-3 py-1 text-xs mb-4">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            AI-powered, B2B All-in-One Platform
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            WorkMint: Manage your entire company in one place
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-700">
            A single, unified workspace for IT and Non‑IT teams: dashboard, HR, finance, orders, tickets, events,
            messages, knowledge, assets, payroll, performance, recruiting, reports, settings, and more — all supercharged by AI.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#features" className="inline-flex h-11 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-6 text-white font-medium shadow hover:opacity-95">
              Explore Features
            </a>
            <a href="#contact" className="inline-flex h-11 items-center justify-center rounded-md border border-gray-300 px-6 text-gray-800 hover:bg-gray-50">
              Book a Demo
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Theme: fintech, minimalist, digital banking — powered by Spline 3D cover
          </p>
        </div>
      </div>
    </section>
  )
}
