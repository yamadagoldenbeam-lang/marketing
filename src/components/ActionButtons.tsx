'use client'

import { motion } from 'framer-motion'
import { X, Heart, RotateCcw, Bookmark } from 'lucide-react'

interface ActionButtonsProps {
  onSwipe: (direction: 'left' | 'right') => void
  onUndo: () => void
  canUndo: boolean
}

export default function ActionButtons({ onSwipe, onUndo, canUndo }: ActionButtonsProps) {
  return (
    <div className="flex items-center justify-center gap-4 py-6">
      {/* 戻るボタン */}
      <motion.button
        onClick={onUndo}
        disabled={!canUndo}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all
          ${canUndo 
            ? 'bg-white text-amber-500 hover:scale-110' 
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        whileTap={canUndo ? { scale: 0.9 } : {}}
      >
        <RotateCcw className="w-5 h-5" />
      </motion.button>

      {/* NOPEボタン */}
      <motion.button
        onClick={() => onSwipe('left')}
        className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform border-2 border-red-100"
        whileTap={{ scale: 0.9 }}
      >
        <X className="w-8 h-8 text-red-500" strokeWidth={3} />
      </motion.button>

      {/* LIKEボタン */}
      <motion.button
        onClick={() => onSwipe('right')}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        whileTap={{ scale: 0.9 }}
      >
        <Heart className="w-8 h-8 text-white fill-white" />
      </motion.button>

      {/* 保存ボタン */}
      <motion.button
        className="w-12 h-12 rounded-full bg-white text-blue-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        whileTap={{ scale: 0.9 }}
      >
        <Bookmark className="w-5 h-5" />
      </motion.button>
    </div>
  )
}
