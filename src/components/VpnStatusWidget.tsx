'use client'

import { useEffect, useState } from 'react'

const pulseKeyframes = `
@keyframes vpn-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.4); }
}
`

interface StatusData {
  online: number
  total: number
}

// Тестовые данные: раскомментируй нужный вариант, чтобы посмотреть дизайн
// const MOCK: StatusData = { online: 7, total: 7 }  // все онлайн (зелёный)
// const MOCK: StatusData = { online: 5, total: 7 }  // частично (жёлтый)
// const MOCK: StatusData = { online: 0, total: 7 }  // все офлайн (красный)
const MOCK: StatusData | null = null               // реальные данные с API

export default function VpnStatusWidget() {
  const [status, setStatus] = useState<StatusData | null>(MOCK)

  useEffect(() => {
    if (MOCK) return

    const fetchStatus = () => {
      fetch('https://status.postq.space/api/status')
        .then((r) => (r.ok ? r.json() : Promise.reject()))
        .then((data: StatusData) => setStatus(data))
        .catch(() => {/* fail silently */})
    }

    fetchStatus()
    const interval = setInterval(fetchStatus, 60_000)
    return () => clearInterval(interval)
  }, [])

  if (!status) return null

  const allOnline = status.online === status.total && status.total > 0
  const allOffline = status.online === 0 && status.total > 0
  const dotColor = allOnline ? '#22c55e' : allOffline ? '#ef4444' : '#f59e0b'

  return (
    <>
      <style>{pulseKeyframes}</style>
      <a
        href="https://status.postq.space"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          color: 'rgba(147, 27, 121, 0.69)',
          textDecoration: 'none',
          fontFamily: "'GT Eesti Pro Display', system-ui, -apple-system, sans-serif",
          fontSize: '12px',
          fontWeight: 400,
          letterSpacing: '0.08em',
        }}
      >
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: dotColor,
            flexShrink: 0,
            boxShadow: `0 0 6px ${dotColor}`,
            animation: 'vpn-pulse 2s ease-in-out infinite',
          }}
        />
        {status.online} из {status.total} серверов работают
      </a>
    </>
  )
}
