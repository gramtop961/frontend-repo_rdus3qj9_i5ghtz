import { LayoutDashboard, Users, Briefcase, DollarSign, ShoppingCart, Ticket, Calendar, MessageSquare, Megaphone, BookOpen, HardDrive, Link, Fingerprint, FileText, Wallet, TrendingUp, ShoppingBag, QrCode, UserPlus, Video, BarChart3, Settings } from 'lucide-react'

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

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything your company needs</h2>
          <p className="mt-3 text-gray-600">One login, 24+ modules. Replace scattered tools with one cohesive platform designed for modern operations.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ name, icon: Icon, desc }) => (
            <div key={name} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-blue-600/10 text-blue-700 grid place-items-center group-hover:bg-blue-600/15">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
