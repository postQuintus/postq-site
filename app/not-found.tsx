'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'

const LOG_LINES = [
  { text: '> инициализация туннеля', suffix: '  [ FAILED ]', delay: 350 },
  { text: '> поиск маршрута', suffix: '  [ NOT FOUND ]', delay: 850 },
  { text: '> диагностика пакетов', suffix: '  [ TIMEOUT ]', delay: 1350 },
  { text: '> код ошибки:', suffix: '  404', delay: 1850 },
]

export default function NotFound() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    LOG_LINES.forEach((_, i) => {
      setTimeout(() => setVisibleLines(i + 1), LOG_LINES[i].delay)
    })
    const cursor = setInterval(() => setShowCursor(v => !v), 500)
    return () => clearInterval(cursor)
  }, [])

  return (
    <main className="relative w-full h-screen overflow-hidden" style={{ background: 'var(--bg)' }}>
      <Header />

      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="spotlight-orb spotlight-orb-1" />
        <div className="spotlight-orb spotlight-orb-2" />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-center max-w-3xl flex flex-col items-center gap-6"
        >
          {/* Terminal log block */}
          <div style={{
            fontFamily: "'GT Eesti Pro Text', monospace, system-ui, sans-serif",
            fontSize: '13px',
            lineHeight: '1.8',
            textAlign: 'left',
            background: 'rgba(207,0,163,0.05)',
            border: '1px solid rgba(207,0,163,0.18)',
            borderRadius: '10px',
            padding: '14px 20px',
            minWidth: '320px',
            maxWidth: '420px',
            width: '100%',
          }}>
            {LOG_LINES.map((line, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '12px',
                  opacity: i < visibleLines ? 1 : 0,
                  transition: 'opacity 0.25s ease',
                }}
              >
                <span style={{ color: 'rgba(215,194,240,0.55)' }}>{line.text}</span>
                <span style={{
                  color: i === LOG_LINES.length - 1 ? '#cf00a3' : 'rgba(207,0,163,0.5)',
                  fontWeight: i === LOG_LINES.length - 1 ? 700 : 400,
                  whiteSpace: 'nowrap',
                }}>
                  {line.suffix}
                </span>
              </div>
            ))}
            <div style={{
              marginTop: '2px',
              color: 'rgba(207,0,163,0.4)',
              opacity: visibleLines >= LOG_LINES.length ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}>
              {'>'} <span style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }}>█</span>
            </div>
          </div>

          <div style={{
            fontFamily: 'monospace',
            fontSize: '12px',
            color: 'rgba(215,194,240,0.45)',
            maxWidth: '38rem',
            textAlign: 'left',
            lineHeight: 1.6,
          }}>
            <span style={{ color: 'rgba(207,0,163,0.5)', marginRight: 8 }}>ERR</span>
            такой страницы не существует — проверьте адрес или перейдите на главную
          </div>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', rowGap: '8px' }}
      >
        <a
          href="https://t.me/postq_vpn_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
          style={{ fontFamily: "'GT Eesti Pro Display', system-ui, sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.08em', color: 'rgba(147,27,121,0.3)', whiteSpace: 'nowrap', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(147,27,121,0.55)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(147,27,121,0.3)')}
        >
          @postq_vpn_bot
        </a>
        <span style={{ color: 'rgba(147,27,121,0.2)', fontSize: '11px', userSelect: 'none' }}>·</span>
        <Link
          href="/privacy"
          className="no-underline"
          style={{ fontFamily: "'GT Eesti Pro Display', system-ui, sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.08em', color: 'rgba(147,27,121,0.3)', whiteSpace: 'nowrap', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(147,27,121,0.55)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(147,27,121,0.3)')}
        >
          политика конфиденциальности
        </Link>
        <span style={{ color: 'rgba(147,27,121,0.2)', fontSize: '11px', userSelect: 'none' }}>·</span>
        <span style={{ fontFamily: "'GT Eesti Pro Display', system-ui, sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.08em', color: 'rgba(147,27,121,0.3)', whiteSpace: 'nowrap' }}>
          © 2026 postq vpn
        </span>
      </motion.div>

      <style>{`
        .spotlight-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          will-change: transform, opacity;
        }
        .spotlight-orb-1 {
          width: 55vw; height: 55vw;
          background: radial-gradient(circle, rgba(207,0,163,0.22) 0%, transparent 70%);
          top: -10%; left: -5%;
          animation: orb1 18s ease-in-out infinite alternate;
        }
        .spotlight-orb-2 {
          width: 45vw; height: 45vw;
          background: radial-gradient(circle, rgba(147,27,121,0.16) 0%, transparent 70%);
          bottom: -15%; right: -5%;
          animation: orb2 22s ease-in-out infinite alternate;
        }
        @keyframes orb1 {
          0%   { transform: translate(0, 0) scale(1); opacity: 0.8; }
          33%  { transform: translate(8vw, 12vh) scale(1.1); opacity: 1; }
          66%  { transform: translate(20vw, 5vh) scale(0.95); opacity: 0.7; }
          100% { transform: translate(5vw, 20vh) scale(1.05); opacity: 0.9; }
        }
        @keyframes orb2 {
          0%   { transform: translate(0, 0) scale(1); opacity: 0.6; }
          33%  { transform: translate(-12vw, -8vh) scale(1.15); opacity: 0.85; }
          66%  { transform: translate(-5vw, -18vh) scale(0.9); opacity: 0.7; }
          100% { transform: translate(-18vw, -5vh) scale(1.1); opacity: 0.8; }
        }
        /* Glitch effect */
        .glitch {
          text-shadow: 0 0 50px rgba(207,0,163,0.3);
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          font: inherit;
          color: inherit;
        }
        .glitch::before {
          color: #7b00ff;
          animation: glitch-before 4s infinite;
          clip-path: inset(0 0 50% 0);
          opacity: 0.7;
        }
        .glitch::after {
          color: #ff007a;
          animation: glitch-after 4s infinite;
          clip-path: inset(50% 0 0 0);
          opacity: 0.6;
        }
        @keyframes glitch-before {
          0%, 88%, 100% { transform: none; opacity: 0; }
          89%  { transform: translate(-3px, -1px); opacity: 0.7; clip-path: inset(10% 0 60% 0); }
          91%  { transform: translate(3px, 1px); opacity: 0.5; clip-path: inset(55% 0 5% 0); }
          93%  { transform: translate(-2px, 0); opacity: 0.8; clip-path: inset(25% 0 40% 0); }
          95%  { transform: translate(4px, -1px); opacity: 0.4; clip-path: inset(70% 0 15% 0); }
          97%  { transform: none; opacity: 0; }
        }
        @keyframes glitch-after {
          0%, 88%, 100% { transform: none; opacity: 0; }
          90%  { transform: translate(3px, 1px); opacity: 0.6; clip-path: inset(60% 0 10% 0); }
          92%  { transform: translate(-3px, 0); opacity: 0.5; clip-path: inset(15% 0 55% 0); }
          94%  { transform: translate(2px, -1px); opacity: 0.7; clip-path: inset(40% 0 30% 0); }
          96%  { transform: none; opacity: 0; }
        }
      `}</style>
    </main>
  )
}
