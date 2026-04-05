import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PostQ VPN',
  description: 'Безопасный и быстрый VPN сервис',
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/icon.svg',
    apple: '/icons/apple-touch-icon.png',
  },
  openGraph: {
    title: 'PostQ VPN',
    description: 'Безопасный и быстрый VPN сервис',
    url: 'https://postq.space',
    siteName: 'PostQ VPN',
  },
}

export const viewport: Viewport = {
  themeColor: '#04000f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
