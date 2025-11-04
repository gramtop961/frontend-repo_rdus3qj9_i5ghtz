import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Users,
  Briefcase,
  DollarSign,
  ShoppingCart,
  Ticket,
  Calendar,
  MessageSquare,
  Megaphone,
  BookOpen,
  HardDrive,
  Link,
  Fingerprint,
  FileText,
  Wallet,
  TrendingUp,
  ShoppingBag,
  QrCode,
  UserPlus,
  Video,
  BarChart3,
  Settings,
  Shield,
  Cpu,
  Headphones,
} from 'lucide-react'

const features = [
  { name: 'Dashboard', icon: LayoutDashboard, desc: 'Real-time overview for leaders and teams.' },
  { name: 'Leads', icon: TrendingUp, desc: 'Capture, qualify, and convert opportunities.' },
  { name: 'Clients', icon: Users, desc: '360° view of customers and organizations.' },
  { name: 'HR', icon: Briefcase, desc: 'People ops: profiles, leaves, shifts, docs.' },
  { name: 'Work', icon: BarChart3, desc: 'Projects, tasks, sprints, and delivery.' },
  { name: 'Finance', icon: DollarSign, desc: 'Invoices, bills, P&L, and approvals.' },
  { name: 'Orders', icon: ShoppingCart, desc: 'Manage orders, SKUs, and fulfillment.' },
  { name: 'Ticket', icon: Ticket, desc: 'Customer support with SLAs and automations.' },
  { name: 'Events', icon: Calendar, desc: 'Plan launches, meets, and webinars.' },
  { name: 'Messages', icon: MessageSquare, desc: 'Team chat, threads, and mentions.' },
  { name: 'Notice Board', icon: Megaphone, desc: 'Company-wide announcements and updates.' },
  { name: 'Knowledge Base', icon: BookOpen, desc: 'Docs, SOPs, wikis, and search.' },
  { name: 'Assets', icon: HardDrive, desc: 'IT/non‑IT assets lifecycle and audits.' },
  { name: 'Bio Links', icon: Link, desc: 'Share all your links with branded pages.' },
  { name: 'Biometric', icon: Fingerprint, desc: 'Attendance and access tracking.' },
  { name: 'Letter', icon: FileText, desc: 'Auto-generate HR and client letters.' },
  { name: 'Payroll', icon: Wallet, desc: 'Run payroll with compliance built-in.' },
  { name: 'Performance', icon: TrendingUp, desc: 'OKRs, reviews, and growth plans.' },
  { name: 'Purchase', icon: ShoppingBag, desc: 'Vendors, POs, and receipts.' },
  { name: 'QR Code', icon: QrCode, desc: 'Smart codes for assets and workflows.' },
  { name: 'Recruit', icon: UserPlus, desc: 'ATS, job posts, and candidate CRM.' },
  { name: 'Zoom Meeting', icon: Video, desc: 'Schedule and sync meetings.' },
  { name: 'Reports', icon: BarChart3, desc: 'Every module, actionable analytics.' },
  { name: 'Settings', icon: Settings, desc: 'Organization, roles, and policies.' },
]

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function Features() {
  const marqueeItems = ['Slack', 'Google Workspace', 'Zoom', 'Notion', 'Jira', 'QuickBooks', 'HubSpot']

  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything your company needs</h2>
          <p className="mt-3 text-gray-600">One login, 24+ modules. Replace scattered tools with one cohesive platform designed for modern operations.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ name, icon: Icon, desc }, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-blue-600/10 text-blue-700 grid place-items-center group-hover:bg-blue-600/15">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: 'Faster onboarding', v: '3x' },
            { k: 'Tickets resolved', v: '95%' },
            { k: 'Time saved weekly', v: '12h' },
            { k: 'NPS', v: '68' },
          ].map(({ k, v }, i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{v}</div>
              <div className="mt-1 text-xs text-gray-600">{k}</div>
            </motion.div>
          ))}
        </div>

        {/* Use cases */}
        <div className="mt-16">
          <motion.h3 {...fadeUp} className="text-2xl font-semibold tracking-tight text-gray-900">Built for every team</motion.h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Security & IT', desc: 'Enforce policies, track assets, and keep audits ready.', icon: Shield },
              { title: 'Operations & AI', desc: 'Automate approvals, summarize tickets, generate docs.', icon: Cpu },
              { title: 'Support & CX', desc: 'Meet SLAs with intelligent routing and knowledge.', icon: Headphones },
            ].map(({ title, desc, icon: Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-600 grid place-items-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 font-semibold text-gray-900">{title}</h4>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Integrations marquee */}
        <div className="mt-16 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="p-4 text-xs font-medium text-gray-500">Integrations</div>
          <div className="relative h-14 overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap"
            >
              {[...marqueeItems, ...marqueeItems].map((label, i) => (
                <span key={i} className="mx-8 text-sm text-gray-700">{label}</span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <motion.h3 {...fadeUp} className="text-2xl font-semibold tracking-tight text-gray-900">Loved by modern teams</motion.h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                quote: 'We consolidated six tools. Visibility and velocity improved in the first week.',
                author: 'Ananya S.',
                role: 'COO, SaaS Startup',
              },
              {
                quote: 'Tickets hit SLA without chasing. Finance and HR run smoother with automation.',
                author: 'Rahul M.',
                role: 'Head of Ops, IT Services',
              },
              {
                quote: 'Board-ready reports in minutes. It changed how our teams collaborate.',
                author: 'Sara K.',
                role: 'VP Finance, Manufacturing',
              },
            ].map(({ quote, author, role }, i) => (
              <motion.blockquote
                key={author}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-gray-800">“{quote}”</p>
                <footer className="mt-3 text-sm text-gray-600">{author} • {role}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
