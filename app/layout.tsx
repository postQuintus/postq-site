import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'postq vpn',
  description: 'Безопасный и быстрый VPN сервис',
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/icon.svg',
    apple: '/icons/apple-touch-icon.png',
  },
  openGraph: {
    title: 'postq vpn',
    description: 'Безопасный и быстрый VPN сервис',
    url: 'https://postq.space',
    siteName: 'postq vpn',
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
    <html lang="ru" suppressHydrationWarning>
      <head>
        {/* Preload the two fonts needed for above-the-fold text */}
        <link rel="preload" href="/fonts/gteestiprodisplay_bold.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/gteestiprotext_regular.woff2" as="font" type="font/woff2" crossOrigin="" />
        {/* Pre-establish connection for the status API widget */}
        <link rel="preconnect" href="https://status.postq.space" />
      </head>
      <body>{children}</body>
    </html>
  )
}
