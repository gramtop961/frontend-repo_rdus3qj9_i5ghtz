export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900">WorkMint</h4>
            <p className="mt-2 text-sm text-gray-600">B2B all-in-one management software for IT and Non‑IT companies.</p>
          </div>
          <div>
            <h5 className="text-sm font-medium text-gray-900">Contact</h5>
            <p className="mt-2 text-sm text-gray-600">Sales & Demos: hello@workmint.ai</p>
            <p className="text-sm text-gray-600">Support: support@workmint.ai</p>
          </div>
          <div>
            <h5 className="text-sm font-medium text-gray-900">Legal</h5>
            <p className="mt-2 text-sm text-gray-600">Privacy Policy • Terms</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} WorkMint. All rights reserved.</div>
      </div>
    </footer>
  )
}
