'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import VpnStatusWidget from '@/components/VpnStatusWidget'

export default function HomePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden" style={{ background: 'var(--bg)' }}>
      <Header />

      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="spotlight-orb spotlight-orb-1" />
        <div className="spotlight-orb spotlight-orb-2" />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-center max-w-3xl"
        >
          <p
            style={{
              fontFamily: "'GT Eesti Pro Text', system-ui, -apple-system, sans-serif",
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#931b79',
              marginBottom: '1rem',
            }}
          >
            скоро будет
          </p>
          <h1
            style={{
              fontFamily: "'GT Eesti Pro Display', system-ui, -apple-system, sans-serif",
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              lineHeight: 0.95,
              color: '#cf00a3',
              textShadow: '0 0 50px rgba(207,0,163,0.24)',
              margin: 0,
            }}
          >
            сайт в разработке
          </h1>
          <p
            style={{
              fontFamily: "'GT Eesti Pro Text', system-ui, -apple-system, sans-serif",
              fontSize: '1rem',
              color: '#d7c2f0',
              marginTop: '1.25rem',
              maxWidth: '38rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              opacity: 0.95,
            }}
          >
            Мы готовим новый сайт. Пока вы можете зайти в личный кабинет, а сюда вернуться чуть позже.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-3"
        >
          <motion.a
            href="https://t.me/postq_vpn_bot"
            target="_blank"
            rel="noopener"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="no-underline inline-block btn-glow"
            style={{
              fontFamily: "'GT Eesti Pro Display', system-ui, -apple-system, sans-serif",
              fontSize: '14px',
              fontWeight: '500',
              letterSpacing: '0.1em',
              padding: '10px 28px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #cf00a3 0%, #931b79 100%)',
              color: '#fff',
              whiteSpace: 'nowrap',
              boxShadow: '0 0 24px rgba(207,0,163,0.45), 0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            ▶ открыть бота
          </motion.a>
          <VpnStatusWidget />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <Link
          href="/privacy"
          className="no-underline"
          style={{
            fontFamily: "'GT Eesti Pro Display', system-ui, -apple-system, sans-serif",
            fontSize: '11px',
            fontWeight: '400',
            letterSpacing: '0.08em',
            color: 'rgba(147, 27, 121, 0.3)',
            whiteSpace: 'nowrap',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(147,27,121,0.55)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(147,27,121,0.3)')}
        >
          политика конфиденциальности
        </Link>
      </motion.div>

      <style>{`
        .spotlight-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          will-change: transform, opacity;
        }
        .spotlight-orb-1 {
          width: 55vw;
          height: 55vw;
          background: radial-gradient(circle, rgba(207,0,163,0.22) 0%, transparent 70%);
          top: -10%;
          left: -5%;
          animation: orb1 18s ease-in-out infinite alternate;
        }
        .spotlight-orb-2 {
          width: 45vw;
          height: 45vw;
          background: radial-gradient(circle, rgba(147,27,121,0.16) 0%, transparent 70%);
          bottom: -15%;
          right: -5%;
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
        .btn-glow {
          animation: btn-pulse 3s ease-in-out infinite;
        }
        @keyframes btn-pulse {
          0%, 100% { box-shadow: 0 0 24px rgba(207,0,163,0.45), 0 2px 8px rgba(0,0,0,0.3); }
          50%       { box-shadow: 0 0 40px rgba(207,0,163,0.7), 0 2px 8px rgba(0,0,0,0.3); }
        }
      `}</style>
    </main>
  )
}
