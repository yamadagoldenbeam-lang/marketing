'use client'

import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SwipeCard from '@/components/SwipeCard'
import ActionButtons from '@/components/ActionButtons'
import ResultsPanel from '@/components/ResultsPanel'
import Header from '@/components/Header'
import { webServices } from '@/data/services'
import { WebService } from '@/types'
import { PartyPopper, RotateCcw } from 'lucide-react'

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(webServices.length)
  const [likedServices, setLikedServices] = useState<WebService[]>([])
  const [dislikedServices, setDislikedServices] = useState<WebService[]>([])
  const [showResults, setShowResults] = useState(false)
  const [history, setHistory] = useState<{ service: WebService; direction: 'left' | 'right' }[]>([])

  const currentCards = webServices.slice(0, currentIndex)

  const handleSwipe = useCallback((direction: 'left' | 'right') => {
    if (currentIndex <= 0) return
    
    const service = webServices[currentIndex - 1]
    
    // 履歴に追加
    setHistory(prev => [...prev, { service, direction }])
    
    if (direction === 'right') {
      setLikedServices(prev => [service, ...prev])
    } else {
      setDislikedServices(prev => [service, ...prev])
    }
    
    setCurrentIndex(prev => prev - 1)
  }, [currentIndex])

  const handleUndo = useCallback(() => {
    if (history.length === 0) return
    
    const lastAction = history[history.length - 1]
    
    // 履歴から削除
    setHistory(prev => prev.slice(0, -1))
    
    // liked/dislikedから削除
    if (lastAction.direction === 'right') {
      setLikedServices(prev => prev.filter(s => s.id !== lastAction.service.id))
    } else {
      setDislikedServices(prev => prev.filter(s => s.id !== lastAction.service.id))
    }
    
    // インデックスを戻す
    setCurrentIndex(prev => prev + 1)
  }, [history])

  const handleReset = () => {
    setCurrentIndex(webServices.length)
    setLikedServices([])
    setDislikedServices([])
    setHistory([])
    setShowResults(false)
  }

  const isComplete = currentIndex === 0

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      <div className="flex-1 flex flex-col w-full max-w-md mx-auto px-4 py-6 safe-area-inset">
        {/* ヘッダー */}
        <Header 
          currentIndex={currentIndex}
          total={webServices.length}
          onShowResults={() => setShowResults(!showResults)}
          showResults={showResults}
        />

        {/* メインコンテンツ */}
        <div className="flex-1 flex flex-col justify-center mt-4">
          {showResults ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ResultsPanel liked={likedServices} disliked={dislikedServices} />
            </motion.div>
          ) : isComplete ? (
            /* 完了画面 */
            <motion.div 
              className="flex flex-col items-center justify-center text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                <PartyPopper className="w-20 h-20 text-purple-500 mb-6" />
              </motion.div>
              <h2 className="text-2xl font-black text-gray-800 mb-2">
                すべて完了！
              </h2>
              <p className="text-gray-500 mb-6">
                {likedServices.length} 件のサービスに興味あり
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowResults(true)}
                  className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-xl hover:bg-purple-600 transition-colors"
                >
                  結果を見る
                </button>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  もう一度
                </button>
              </div>
            </motion.div>
          ) : (
            /* カードスタック */
            <div className="relative w-full aspect-[3/4] max-h-[60vh]">
              <AnimatePresence>
                {currentCards.slice(-2).map((service, index) => (
                  <SwipeCard
                    key={service.id}
                    service={service}
                    onSwipe={handleSwipe}
                    isTop={index === currentCards.length - 1 || (currentCards.length === 1 && index === 0)}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* アクションボタン */}
        {!showResults && !isComplete && (
          <ActionButtons 
            onSwipe={handleSwipe} 
            onUndo={handleUndo}
            canUndo={history.length > 0}
          />
        )}

        {/* フッターヒント */}
        {!showResults && !isComplete && (
          <p className="text-center text-xs text-gray-400 pb-2">
            ← スワイプで興味なし ・ 興味あり →
          </p>
        )}
      </div>
    </main>
  )
}
