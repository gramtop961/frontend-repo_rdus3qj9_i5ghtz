import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

// Brand palette
// Mint #3EE6A1, Charcoal #0B1B26, Mint Mist #DFFCF0, Cyan #00CFFF, Gray #445566 / #8896A6

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Z9BMpz-LA54Dlbrj/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Lightening overlays to keep a bright, readable hero over the dark Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/55 to-white/90" />
      <div className="pointer-events-none absolute -inset-x-40 top-[-20%] h-[60vh] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(62,230,161,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full bg-[#0B1B26]/80 text-white px-3 py-1 text-xs mb-4 shadow-sm"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[#3EE6A1] animate-pulse" />
            AI-powered platform for modern operations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0B1B26]"
          >
            WorkMint.ai — Run your company in one place
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="mt-5 text-base sm:text-lg text-[#445566]"
          >
            Unite dashboards, HR, finance, orders, tickets, assets, payroll, recruiting, reports and more — all with smart
            AI assistance. Simple to adopt, secure at scale, and designed for clarity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#features"
              className="inline-flex h-11 items-center justify-center rounded-md bg-gradient-to-r from-[#3EE6A1] to-[#00CFFF] px-6 text-[#0B1B26] font-medium shadow-sm hover:opacity-95"
            >
              Explore Features
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-md border border-[#8896A6] px-6 text-[#0B1B26] bg-white/70 backdrop-blur hover:bg-white"
            >
              Book a Demo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              { k: 'Teams onboarded', v: '250+' },
              { k: 'Time saved / wk', v: '12h' },
              { k: 'SLA hit rate', v: '95%' },
              { k: 'Uptime', v: '99.9%' },
            ].map(({ k, v }) => (
              <div key={k} className="rounded-xl border border-[#DFFCF0] bg-white/80 p-4 text-center shadow-[0_1px_0_0_#EAF7F1]">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#3EE6A1] to-[#00CFFF] bg-clip-text text-transparent">{v}</div>
                <div className="mt-1 text-xs text-[#8896A6]">{k}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
