'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import VpnStatusWidget from '@/components/VpnStatusWidget'

const HeroPhone = dynamic(() => import('@/components/HeroPhone'), { ssr: false })
const BenefitsSection = dynamic(() => import('@/components/BenefitsSection'))
const PricingSection = dynamic(() => import('@/components/PricingSection'))
const FaqSection = dynamic(() => import('@/components/FaqSection'))

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => { if (window.scrollY > 40) setScrolled(true) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="relative w-full min-h-screen">
      {/* Global background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }} aria-hidden>
        <div className="spotlight-orb spotlight-orb-1" />
        <div className="spotlight-orb spotlight-orb-2" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center">
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between">

          {/* Left – text */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="flex flex-col items-center md:items-start gap-6 max-w-lg w-full"
          >
            {/* Free trial pill */}
            <div className="self-center md:self-start" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 12px',
              borderRadius: '999px',
              border: '1px solid rgba(207,0,163,0.25)',
              background: 'rgba(207,0,163,0.07)',
            }}>
              <span style={{
                fontFamily: "'GT Eesti Pro Text', system-ui, sans-serif",
                fontSize: '12px',
                color: 'rgba(255,255,255,0.75)',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}>
                Пробный период — 1 день бесплатно
              </span>
            </div>

            <h1
              className="text-center md:text-left"
              style={{
                fontFamily: "'GT Eesti Pro Display', system-ui, -apple-system, sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                color: '#cf00a3',
                textShadow: '0 0 50px rgba(207,0,163,0.2)',
                margin: 0,
              }}
            >
              Свобода в&nbsp;сети.<br />
              <span style={{ color: '#ffffff' }}>Безопасность в&nbsp;каждом байте.</span>
            </h1>

            <p
              className="text-center md:text-left"
              style={{
                fontFamily: "'GT Eesti Pro Text', system-ui, -apple-system, sans-serif",
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'rgba(215,194,240,0.8)',
                margin: 0,
                maxWidth: '38rem',
              }}
            >
              Шифрует весь ваш трафик и&nbsp;скрывает личные данные от&nbsp;посторонних глаз.<br className="hidden md:block" />
              Пользуйтесь интернетом свободно и&nbsp;безопасно<br className="hidden md:block" />
              на&nbsp;всех устройствах.
            </p>

            <div className="self-center md:self-start" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'fit-content' }}>
              <motion.a
                href="https://web.postq.space"
                target="_blank"
                rel="noopener"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="no-underline inline-block btn-glow"
                style={{
                  fontFamily: "'GT Eesti Pro Display', system-ui, -apple-system, sans-serif",
                  fontSize: '15px',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  padding: '12px 36px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #cf00a3 0%, #931b79 100%)',
                  color: '#fff',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 0 28px rgba(207,0,163,0.45), 0 2px 8px rgba(0,0,0,0.3)',
                }}
              >
                Подключить VPN
              </motion.a>

              <div style={{ marginTop: '10px' }}>
                <VpnStatusWidget />
              </div>
            </div>
          </motion.div>

          {/* Right – phone animation (desktop only) */}
          <div className="hidden md:block">
            <HeroPhone />
          </div>

        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
        <AnimatePresence>
        {!scrolled && <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 4, transition: { duration: 0.2, delay: 0 } }}
          transition={{ delay: 1.4, duration: 0.6 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            cursor: 'pointer',
          }}
          onClick={() => {
            const next = document.getElementById('pricing') ?? document.querySelector('section + section')
            next?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span style={{
            fontFamily: "'GT Eesti Pro Text', system-ui, sans-serif",
            fontSize: '10px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.15)',
          }}>
            далее
          </span>
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 5.5L8 10.5L13 5.5" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>}
        </AnimatePresence>
        </div>

      </section>

      <BenefitsSection />
      <PricingSection />
      <FaqSection />

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{
          position: 'relative',
          zIndex: 1,
          borderTop: '1px solid rgba(207,0,163,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          rowGap: '8px',
          padding: '28px 24px 44px',
        }}
      >
        <a
          href="https://t.me/postq_vpn_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
          style={{ fontFamily: "'GT Eesti Pro Display', system-ui, sans-serif", fontSize: '11px', letterSpacing: '0.07em', color: 'rgba(215,194,240,0.4)', whiteSpace: 'nowrap', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(215,194,240,0.7)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(215,194,240,0.4)')}
        >
          @postq_vpn_bot
        </a>
        <span style={{ color: 'rgba(215,194,240,0.2)', fontSize: '11px', userSelect: 'none' }}>·</span>
        <Link
          href="/privacy"
          className="no-underline"
          style={{ fontFamily: "'GT Eesti Pro Display', system-ui, sans-serif", fontSize: '11px', letterSpacing: '0.07em', color: 'rgba(215,194,240,0.4)', whiteSpace: 'nowrap', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(215,194,240,0.7)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(215,194,240,0.4)')}
        >
          политика конфиденциальности
        </Link>
        <span style={{ color: 'rgba(215,194,240,0.2)', fontSize: '11px', userSelect: 'none' }}>·</span>
        <span style={{ fontFamily: "'GT Eesti Pro Display', system-ui, sans-serif", fontSize: '11px', letterSpacing: '0.07em', color: 'rgba(215,194,240,0.35)', whiteSpace: 'nowrap' }}>
          © 2026 postq vpn
        </span>
      </motion.div>

      <style>{`
        .spotlight-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          will-change: transform;
          contain: strict;
        }
        .spotlight-orb-1 {
          width: 60vw;
          height: 60vw;
          background: radial-gradient(circle, rgba(207,0,163,0.22) 0%, transparent 70%);
          top: -15%;
          left: -10%;
          animation: orb1 20s ease-in-out infinite alternate;
        }
        .spotlight-orb-2 {
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(147,27,121,0.16) 0%, transparent 70%);
          bottom: -10%;
          right: 0;
          animation: orb2 25s ease-in-out infinite alternate;
        }
        @keyframes orb1 {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(12vw, 18vh) scale(1.08); }
        }
        @keyframes orb2 {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(-14vw, -12vh) scale(1.1); }
        }
        .btn-glow {
          animation: btn-pulse 3s ease-in-out infinite;
        }
        @keyframes btn-pulse {
          0%, 100% { box-shadow: 0 0 28px rgba(207,0,163,0.4), 0 2px 12px rgba(0,0,0,0.3); }
          50%       { box-shadow: 0 0 52px rgba(207,0,163,0.65), 0 2px 12px rgba(0,0,0,0.3); }
        }
      `}</style>
    </main>
  )
}
