export interface WebService {
  id: string
  name: string
  description: string
  category: string
  icon: string
  color: string
  gradient: string
  url: string
  features: string[]
  pricing: string
  rating: number
}

export type SwipeDirection = 'left' | 'right' | null
