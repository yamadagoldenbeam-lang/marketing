export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            Marketing Service
          </div>
          <div className="flex gap-6">
            <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              ホーム
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              お問い合わせ
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
