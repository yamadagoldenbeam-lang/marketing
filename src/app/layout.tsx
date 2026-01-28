import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Discover - Webサービスを見つけよう',
  description: 'スワイプで気になるWebサービスを発見。Tinderライクな直感的UIで、あなたにぴったりのツールを見つけましょう。',
  keywords: ['Webサービス', 'ディスカバリー', 'スワイプ', 'ツール'],
  authors: [{ name: 'Discover' }],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Discover',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body 
        className="font-sans antialiased"
        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
      >
        {children}
      </body>
    </html>
  )
}
