'use client'

import { useEffect, useState } from 'react'

interface StatusData {
  online: number
  total: number
}

export default function VpnStatusWidget() {
  const [status, setStatus] = useState<StatusData | null>(null)

  useEffect(() => {
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
    <a
      href="https://status.postq.space"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
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
        }}
      />
      {status.online}/{status.total} серверов онлайн
    </a>
  )
}
