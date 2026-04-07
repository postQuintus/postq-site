'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import VpnStatusWidget from '@/components/VpnStatusWidget'

export default function HomePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#050008]">
      <Header />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#050008]" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 25%, rgba(207,0,163,0.24), transparent 18%), radial-gradient(circle at 75% 20%, rgba(147,27,121,0.14), transparent 20%)',
            animation: 'spotlight 14s ease-in-out infinite alternate',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 45%, rgba(255,255,255,0.08), transparent 30%)',
            filter: 'blur(26px)',
            opacity: 0.65,
          }}
        />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
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
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        <motion.a
          href="https://t.me/postq_vpn_bot"
          target="_blank"
          rel="noopener"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 text-sm tracking-widest no-underline inline-block rounded-lg transition-all duration-300"
          style={{
            fontFamily: "'GT Eesti Pro Display', system-ui, -apple-system, sans-serif",
            fontSize: '14px',
            fontWeight: '500',
            letterSpacing: '0.08em',
            textShadow: '0 0 8px rgba(207, 0, 163, 0.6)',
            border: '1.5px solid rgba(147, 27, 121, 0.7)',
            background: 'linear-gradient(135deg, rgba(147, 27, 121, 0.18) 0%, rgba(147, 27, 121, 0.08) 100%)',
            boxShadow: '0 0 18px rgba(147, 27, 121, 0.2), inset 0 0 12px rgba(147, 27, 121, 0.08)',
            color: '#fff',
            whiteSpace: 'nowrap',
          }}
        >
          ▶ открыть бота
        </motion.a>

        <VpnStatusWidget />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-6"
        >
          <Link
            href="/privacy"
            className="text-xs tracking-widest no-underline transition-all duration-200"
            style={{
              fontFamily: "'GT Eesti Pro Display', system-ui, -apple-system, sans-serif",
              fontSize: '12px',
              fontWeight: '400',
              letterSpacing: '0.08em',
              color: 'rgba(147, 27, 121, 0.69)',
              textShadow: '0 0 4px rgba(147, 27, 121, 0.18)',
            }}
          >
            политика конфиденциальности
          </Link>
        </motion.div>
      </div>

      <style>{`
        @keyframes spotlight {
          0% {
            background-position: 30% 25%, 75% 20%;
          }
          50% {
            background-position: 40% 55%, 68% 28%;
          }
          100% {
            background-position: 20% 45%, 82% 18%;
          }
        }
      `}</style>
    </main>
  )
}
