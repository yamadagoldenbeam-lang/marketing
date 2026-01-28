'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { WebService } from '@/types'
import { Heart, X, ChevronDown, ExternalLink } from 'lucide-react'
import { useState } from 'react'

interface ResultsPanelProps {
  liked: WebService[]
  disliked: WebService[]
}

export default function ResultsPanel({ liked, disliked }: ResultsPanelProps) {
  const [showLiked, setShowLiked] = useState(true)

  return (
    <div className="w-full max-w-md mx-auto">
      {/* タブ */}
      <div className="flex bg-gray-100 rounded-2xl p-1 mb-4">
        <button
          onClick={() => setShowLiked(true)}
          className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
            showLiked 
              ? 'bg-white text-green-600 shadow-sm' 
              : 'text-gray-500'
          }`}
        >
          <Heart className={`w-5 h-5 ${showLiked ? 'fill-green-500' : ''}`} />
          興味あり ({liked.length})
        </button>
        <button
          onClick={() => setShowLiked(false)}
          className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
            !showLiked 
              ? 'bg-white text-red-500 shadow-sm' 
              : 'text-gray-500'
          }`}
        >
          <X className="w-5 h-5" />
          興味なし ({disliked.length})
        </button>
      </div>

      {/* リスト */}
      <div className="space-y-3 max-h-[50vh] overflow-y-auto">
        <AnimatePresence mode="popLayout">
          {(showLiked ? liked : disliked).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
              className={`bg-gradient-to-r ${service.gradient} rounded-2xl p-4 text-white shadow-lg`}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{service.icon}</span>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg">{service.name}</h3>
                  <p className="text-white/70 text-sm">{service.category}</p>
                </div>
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {(showLiked ? liked : disliked).length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p className="text-lg">まだ選択されていません</p>
          </div>
        )}
      </div>
    </div>
  )
}
