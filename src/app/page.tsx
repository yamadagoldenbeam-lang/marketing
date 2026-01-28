export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-8 p-8">
        <h1 className="text-6xl font-bold text-gray-900">
          Marketing Web Service
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Next.js + TypeScript + Supabase + Vercel で構築された
          <br />
          モダンなWebアプリケーション
        </p>
        
        <div className="flex gap-4 justify-center mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Next.js 14</h2>
            <p className="text-gray-600">App Router + Server Components</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-green-600 mb-2">Supabase</h2>
            <p className="text-gray-600">認証 + データベース</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">Vercel</h2>
            <p className="text-gray-600">自動デプロイ + ホスティング</p>
          </div>
        </div>
        
        <div className="mt-12">
          <a
            href="/api/health"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            API ヘルスチェック
          </a>
        </div>
      </div>
    </main>
  )
}
