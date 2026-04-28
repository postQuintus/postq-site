import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'postq VPN — безопасный VPN с оплатой картами РФ',
    template: '%s | postq VPN',
  },
  description: 'postq VPN — быстрый и надёжный VPN-сервис с серверами по всему миру. Оплата картами РФ, международными картами и криптовалютой. Поддержка iOS, Android, Windows, macOS. Пробный день бесплатно.',
  keywords: ['VPN', 'купить VPN', 'VPN Россия', 'VPN для телеграм', 'VPN для Instagram', 'безопасный VPN', 'быстрый VPN', 'VPN оплата картой РФ', 'postq vpn'],
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/icon.svg',
    apple: '/icons/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://postq.space',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'postq VPN — безопасный VPN с оплатой картами РФ',
    description: 'Быстрый и надёжный VPN-сервис. Оплата картами РФ, международными и криптовалютой. Пробный день бесплатно.',
    url: 'https://postq.space',
    siteName: 'postq VPN',
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: 'https://postq.space/og-image.png', width: 1200, height: 630, alt: 'postq VPN' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'postq VPN — безопасный VPN с оплатой картами РФ',
    description: 'Быстрый и надёжный VPN-сервис. Оплата картами РФ, международными и криптовалютой.',
    images: ['https://postq.space/og-image.png'],
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
