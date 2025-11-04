import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full bg-black/80 text-white px-3 py-1 text-xs mb-4"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            AI-powered, B2B All-in-One Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            WorkMint: Manage your entire company in one place
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="mt-5 text-base sm:text-lg text-gray-700"
          >
            A single, unified workspace for IT and Non‑IT teams: dashboard, HR, finance, orders, tickets, events,
            messages, knowledge, assets, payroll, performance, recruiting, reports, settings, and more — all supercharged by AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#features" className="inline-flex h-11 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-6 text-white font-medium shadow hover:opacity-95">
              Explore Features
            </a>
            <a href="#contact" className="inline-flex h-11 items-center justify-center rounded-md border border-gray-300 px-6 text-gray-800 hover:bg-gray-50">
              Book a Demo
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-4 text-xs text-gray-500"
          >
            Hero animation: AI voice agent aura with a purple/blue/orange radial gradient — minimal, futuristic, corporate
          </motion.p>
        </div>
      </div>
    </section>
  )
}
