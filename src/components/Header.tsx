'use client'

import { Sparkles, List } from 'lucide-react'

interface HeaderProps {
  currentIndex: number
  total: number
  onShowResults: () => void
  showResults: boolean
}

export default function Header({ currentIndex, total, onShowResults, showResults }: HeaderProps) {
  const progress = ((total - currentIndex) / total) * 100

  return (
    <header className="w-full max-w-md mx-auto">
      {/* ロゴ＆トグルボタン */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-purple-500" />
          <h1 className="text-xl font-black text-gray-800">
            Discover<span className="text-purple-500">.</span>
          </h1>
        </div>
        <button
          onClick={onShowResults}
          className={`p-2.5 rounded-xl transition-all ${
            showResults 
              ? 'bg-purple-500 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <List className="w-5 h-5" />
        </button>
      </div>

      {/* 進捗バー */}
      <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-gray-400 mt-2 text-center">
        {currentIndex > 0 ? `残り ${currentIndex} サービス` : 'すべて完了！'}
      </p>
    </header>
  )
}
