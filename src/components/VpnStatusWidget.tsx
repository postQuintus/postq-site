'use client'

import { useEffect, useState } from 'react'

const styles = `
@keyframes vpn-dot-ripple {
  0% { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(3.5); opacity: 0; }
}
.vpn-dot-wrapper {
  position: relative;
  display: inline-block;
  width: 7px;
  height: 7px;
  flex-shrink: 0;
}
.vpn-dot-pulse::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #22c55e;
  animation: vpn-dot-ripple 1.8s ease-out infinite;
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
      <style>{styles}</style>
      <a
        href="https://status.postq.space"
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
        <span className={`vpn-dot-wrapper${allOnline ? ' vpn-dot-pulse' : ''}`}>
          <span style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: dotColor,
            boxShadow: `0 0 6px ${dotColor}`,
          }} />
        </span>
        {status.online} из {status.total} серверов работают
      </a>
    </>
  )
}
