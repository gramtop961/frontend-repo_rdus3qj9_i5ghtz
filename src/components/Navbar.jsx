import { Rocket, Settings } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#3EE6A1] to-[#00CFFF] text-[#0B1B26] grid place-items-center shadow-sm">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-[#0B1B26]">WorkMint</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-[#445566]">
          <a href="#features" className="hover:text-[#0B1B26]">Features</a>
          <a href="#solutions" className="hover:text-[#0B1B26]">Solutions</a>
          <a href="#contact" className="hover:text-[#0B1B26]">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 px-4 items-center justify-center rounded-md border border-[#8896A6] text-[#0B1B26] bg-white/70 hover:bg-white">
            View Demo
          </button>
          <button className="inline-flex h-9 px-4 items-center justify-center rounded-md bg-gradient-to-r from-[#3EE6A1] to-[#00CFFF] text-[#0B1B26] hover:opacity-95">
            <Settings className="mr-2 h-4 w-4" /> Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
