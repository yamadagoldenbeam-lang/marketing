'use client'

import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion'
import { WebService } from '@/types'
import { Star, ExternalLink } from 'lucide-react'

interface SwipeCardProps {
  service: WebService
  onSwipe: (direction: 'left' | 'right') => void
  isTop: boolean
}

export default function SwipeCard({ service, onSwipe, isTop }: SwipeCardProps) {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-25, 25])
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5])
  
  // スワイプ方向のインジケーター
  const likeOpacity = useTransform(x, [0, 100], [0, 1])
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0])

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 100
    if (info.offset.x > threshold) {
      onSwipe('right')
    } else if (info.offset.x < -threshold) {
      onSwipe('left')
    }
  }

  return (
    <motion.div
      className={`absolute w-full h-full ${isTop ? 'cursor-grab active:cursor-grabbing' : ''}`}
      style={{ x, rotate, opacity }}
      drag={isTop ? 'x' : false}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.9}
      onDragEnd={handleDragEnd}
      initial={{ scale: isTop ? 1 : 0.95, y: isTop ? 0 : 10 }}
      animate={{ scale: isTop ? 1 : 0.95, y: isTop ? 0 : 10 }}
      exit={{ 
        x: x.get() > 0 ? 300 : -300,
        opacity: 0,
        transition: { duration: 0.3 }
      }}
      whileDrag={{ scale: 1.02 }}
    >
      <div className={`relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${service.gradient}`}>
        {/* スワイプインジケーター */}
        {isTop && (
          <>
            {/* LIKE インジケーター */}
            <motion.div
              className="absolute top-8 left-6 z-20 px-4 py-2 border-4 border-green-400 rounded-xl rotate-[-20deg]"
              style={{ opacity: likeOpacity }}
            >
              <span className="text-3xl font-black text-green-400 tracking-wider">LIKE</span>
            </motion.div>
            
            {/* NOPE インジケーター */}
            <motion.div
              className="absolute top-8 right-6 z-20 px-4 py-2 border-4 border-red-400 rounded-xl rotate-[20deg]"
              style={{ opacity: nopeOpacity }}
            >
              <span className="text-3xl font-black text-red-400 tracking-wider">NOPE</span>
            </motion.div>
          </>
        )}

        {/* カードコンテンツ */}
        <div className="relative h-full flex flex-col p-6 text-white">
          {/* 上部エリア */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-5xl">{service.icon}</span>
              <div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-white/20 rounded-full backdrop-blur-sm">
                  {service.category}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-sm">{service.rating}</span>
            </div>
          </div>

          {/* サービス名 */}
          <h2 className="text-4xl font-black mb-3 drop-shadow-lg">
            {service.name}
          </h2>

          {/* 説明 */}
          <p className="text-white/90 text-base leading-relaxed mb-6 flex-grow">
            {service.description}
          </p>

          {/* 特徴タグ */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.features.map((feature, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* 下部情報 */}
          <div className="flex items-center justify-between pt-4 border-t border-white/20">
            <div>
              <span className="text-white/60 text-sm">料金</span>
              <p className="font-bold text-lg">{service.pricing}</p>
            </div>
            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="font-medium">詳細を見る</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 装飾的な背景要素 */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
      </div>
    </motion.div>
  )
}
