'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'

const ICON_SIZE = 26
const BOX = 38

interface IconDef {
  src: string
  alt: string
  delay: number
  /** Apply brightness(0) invert(1) to turn a black SVG white */
  white?: boolean
}

interface RingDef {
  rx: number
  ry: number
  duration: number
  icons: IconDef[]
}

const RINGS: RingDef[] = [
  {
    rx: 240, ry: 80, duration: 42,
    icons: [
      { src: '/icons/colored/Instagram.svg',  alt: 'Instagram', delay: 0.1  },
      { src: '/icons/colored/Netflix.svg',    alt: 'Netflix',   delay: 0.38 },
      { src: '/icons/colored/Youtube.svg',    alt: 'Youtube',   delay: 0.66 },
      { src: '/icons/colored/X.svg',          alt: 'X',         delay: 0.94, white: true },
      { src: '/icons/colored/Tik%20Tok.svg',  alt: 'Tik Tok',   delay: 1.22 },
    ],
  },
  {
    rx: 168, ry: 63, duration: 32,
    icons: [
      { src: '/icons/colored/Discord.svg',    alt: 'Discord',   delay: 1.50 },
      { src: '/icons/colored/Telegram.svg',   alt: 'Telegram',  delay: 1.78 },
      { src: '/icons/colored/ChatGPT.svg',    alt: 'ChatGPT',   delay: 2.06, white: true },
      { src: '/icons/colored/Gemini.svg',     alt: 'Gemini',    delay: 2.34 },
    ],
  },
  {
    rx: 98, ry: 39, duration: 22,
    icons: [
      { src: '/icons/colored/Grok.svg',       alt: 'Grok',      delay: 2.62, white: true },
      { src: '/icons/colored/Claude.svg',     alt: 'Claude',    delay: 2.90 },
      { src: '/icons/colored/Copilot.svg',    alt: 'Copilot',   delay: 3.18 },
    ],
  },
]

export default function HeroAnimation() {
  return (
    <motion.div
      className="hidden md:flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.7 }}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 620,
        aspectRatio: '1',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      {/* ── Orbital rings ──────────────────────────────────────────── */}
      {RINGS.map((ring) => {
        const scaleY = ring.ry / ring.rx

        return (
          <div
            key={ring.rx}
            style={{
              position: 'absolute',
              width: ring.rx * 2,
              height: ring.rx * 2,
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) scaleY(${scaleY})`,
            }}
          >
            {/* Ellipse ring border */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            />

            {/* Icons */}
            {ring.icons.map((icon, idx) => {
              const offset = (360 / ring.icons.length) * idx

              return (
                <motion.div
                  key={icon.src}
                  style={{ position: 'absolute', inset: 0, rotate: offset }}
                  animate={{ rotate: offset + 360 }}
                  transition={{ duration: ring.duration, repeat: Infinity, ease: 'linear' }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: -(BOX / 2),
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    {/* Counter-rotate to keep icon upright */}
                    <motion.div
                      style={{ rotate: -offset }}
                      animate={{ rotate: -(offset + 360) }}
                      transition={{ duration: ring.duration, repeat: Infinity, ease: 'linear' }}
                    >
                      {/* Counter-scaleY to undo ring squish */}
                      <div style={{ transform: `scaleY(${1 / scaleY})` }}>

                        <motion.div
                          style={{
                            position: 'relative',
                            width: BOX,
                            height: BOX,
                            borderRadius: 10,
                            background: 'rgba(6,2,20,0.88)',
                            border: '1px solid rgba(255,255,255,0.09)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                          }}
                          initial={{ filter: 'grayscale(1)' }}
                          animate={{ filter: 'grayscale(0)' }}
                          transition={{ delay: icon.delay, duration: 0.8, ease: 'easeOut' }}
                        >
                          <Image
                            src={icon.src}
                            alt={icon.alt}
                            width={ICON_SIZE}
                            height={ICON_SIZE}
                            style={{
                              objectFit: 'contain',
                              ...(icon.white && { filter: 'brightness(0) invert(1)' }),
                            }}
                          />

                          {/* Lock overlay */}
                          <motion.div
                            style={{
                              position: 'absolute',
                              inset: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: 'rgba(4,0,15,0.6)',
                              borderRadius: 9,
                            }}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{ delay: icon.delay + 0.15, duration: 0.45, ease: 'easeOut' }}
                          >
                            <Lock size={11} strokeWidth={2.5} color="rgba(207,0,163,0.85)" />
                          </motion.div>
                        </motion.div>

                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )
      })}

      {/* ── Center glow (subtle) ───────────────────────────────────── */}
      <motion.div
        style={{
          position: 'absolute',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(207,0,163,0.1) 0%, transparent 70%)',
          zIndex: 9,
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Central splash.svg ─────────────────────────────────────── */}
      <motion.div
        style={{
          position: 'absolute',
          width: 120,
          height: 120,
          borderRadius: 30,
          background: 'rgba(207,0,163,0.07)',
          border: '1px solid rgba(207,0,163,0.22)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}
        animate={{
          scale: [1, 1.025, 1],
          boxShadow: [
            '0 0 20px rgba(207,0,163,0.12)',
            '0 0 32px rgba(207,0,163,0.24)',
            '0 0 20px rgba(207,0,163,0.12)',
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/icons/splash.svg"
          alt="postq vpn"
          width={82}
          height={82}
          style={{ objectFit: 'contain' }}
        />
      </motion.div>
    </motion.div>
  )
}
