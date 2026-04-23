'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// Container: 380 × 500px, phone centered at (190, 250).
// Icons radiate outward from the phone in organic trajectories — no grid.

interface AppIcon {
  src: string
  alt: string
  size: number
  floatY: [number, number]
  duration: number
  delay: number
  appearDelay: number  // staggered delay when toggling on
  white?: boolean
  behind?: boolean
  style: React.CSSProperties
}

// Phone (200×400) centered in 380×540: left=90, right=290, top=70, bottom=470.
// Behind icons overlap phone by 35-55px → phone body cuts them off (depth illusion).
// Front icons overlap phone by 20-35px → they float visually in front of glass.
const ICONS: AppIcon[] = [
  // ── In front (z:3) — cluster at corners, partially over phone face ──────────
  { src: '/icons/colored/Instagram.svg',  alt: 'Instagram', size: 80, floatY: [-8,  7], duration: 5.2, delay: 0.8,  appearDelay: 0.15,             style: { top: 18,    left: 42   } },   // right edge 122 > phone left 90  → +32px overlap
  { src: '/icons/colored/Youtube.svg',    alt: 'YouTube',   size: 72, floatY: [-7,  9], duration: 4.1, delay: 2.3,  appearDelay: 0.55,             style: { top: 44,    right: 38  } },   // left edge 270 < phone right 290 → +20px overlap
  { src: '/icons/colored/X.svg',          alt: 'X',         size: 58, floatY: [-6,  5], duration: 6.3, delay: 1.5,  appearDelay: 0.35, white: true, style: { top: -12,   left: '50%', transform: 'translateX(-50%)' } }, // centered, just above phone top
  { src: '/icons/colored/Tik%20Tok.svg',  alt: 'TikTok',    size: 76, floatY: [-5,  9], duration: 3.8, delay: 3.1,  appearDelay: 0.7,              style: { bottom: 36, left: 44   } },
  { src: '/icons/colored/Netflix.svg',    alt: 'Netflix',   size: 66, floatY: [-8,  6], duration: 4.9, delay: 0.3,  appearDelay: 0.1,              style: { bottom: 16, right: 96  } },
  // ── Behind phone (z:1) — deep overlap, cut off by phone body ────────────────
  { src: '/icons/colored/Discord.svg',    alt: 'Discord',   size: 82, floatY: [-9,  7], duration: 7.1, delay: 1.9,  appearDelay: 0.45, behind: true, style: { top: 148,  left: 44   } },
  { src: '/icons/colored/Telegram.svg',   alt: 'Telegram',  size: 78, floatY: [-7,  8], duration: 3.6, delay: 2.5,  appearDelay: 0.6,              style: { top: 200,  right: 36  } },
  { src: '/icons/colored/Grok.svg',       alt: 'Grok',      size: 68, floatY: [-6,  8], duration: 5.8, delay: 0.6,  appearDelay: 0.25, white: true, behind: true, style: { top: 314,  left: 14   } },
  { src: '/icons/colored/WhatsApp.svg',   alt: 'WhatsApp',  size: 70, floatY: [-7,  5], duration: 4.4, delay: 3.8,  appearDelay: 0.8,  behind: true, style: { top: 358,  right: 50  } },  // left 252 → 38px behind
]


const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
}

const itemVariants = {
  hidden:  { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as number[] } },
}

// ─── Toggle switch inside the phone ───────────────────────────────────────────

function VpnToggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      {/* Toggle pill + glow wrapper */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        {/* Toggle pill */}
        <motion.div
          animate={{
            background: on ? '#cf00a3' : 'rgba(255,255,255,0.1)',
            boxShadow: on
              ? '0 0 14px 3px rgba(207,0,163,0.45), 0 0 40px 8px rgba(207,0,163,0.15)'
              : '0 0 0px 0px rgba(207,0,163,0), 0 0 0px 0px rgba(207,0,163,0)',
          }}
          transition={{
            background: { duration: 0.4 },
            boxShadow: { duration: 0.9, delay: on ? 0.32 : 0, ease: [0.16, 1, 0.3, 1] },
          }}
          style={{
            width: 56,
            height: 32,
            borderRadius: 16,
            position: 'relative',
            cursor: 'pointer',
          }}
          onClick={onToggle}
        >
          <motion.div
            animate={{ x: on ? 26 : 2 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            style={{
              position: 'absolute',
              top: 4,
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: '#fff',
            }}
          />
        </motion.div>
      </div>

      {/* Status label */}
      <AnimatePresence mode="wait">
        <motion.span
          key={on ? 'on' : 'off'}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25 }}
          style={{
            fontSize: 10,
            fontFamily: "'GT Eesti Pro Display', system-ui, sans-serif",
            letterSpacing: '0.08em',
            color: on ? 'rgba(207,0,163,0.9)' : 'rgba(255,255,255,0.25)',
          }}
        >
          {on ? 'ПОДКЛЮЧЕНО' : 'ОТКЛЮЧЕНО'}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeroPhone() {
  const [on, setOn] = useState(false)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const t = setTimeout(() => setOn(true), 1600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const update = () => {
      // 56px header + 80px vertical breathing room = 136px reserved
      const available = window.innerHeight - 136
      // 560 = component height (540) + icon overflow above/below (~20px)
      setScale(Math.min(1, Math.max(0.65, available / 560)))
    }
    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        position: 'relative',
        width: 380,
        height: 540,
        flexShrink: 0,
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
      }}
    >
      {/* ── Phone frame ─────────────────────────────────────────────── */}
      {/* Plain div for centering — FM must not touch this transform */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.94, rotate: 20 }}
          animate={{ opacity: 1, y: 0,  scale: 1,  rotate: 12 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: 200,
            height: 400,
            borderRadius: 40,
            border: '3px solid rgba(255,255,255,0.14)',
            background: 'rgba(4,0,15,0.75)',
            backdropFilter: 'blur(24px) saturate(160%)',
            WebkitBackdropFilter: 'blur(24px) saturate(160%)',
            boxShadow: [
              '0 0 0 4px rgba(207,0,163,0.04)',
              '0 0 80px 20px rgba(207,0,163,0.14)',
              '0 0 140px 40px rgba(207,0,163,0.07)',
              '0 16px 40px rgba(0,0,0,0.5)',
              'inset 0 0 16px rgba(207,0,163,0.03)',
              'inset 0 1px 0 rgba(255,255,255,0.06)',
            ].join(', '),
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '14px 16px 20px',
            gap: 0,
          }}
        >
          {/* Dynamic Island */}
          <div style={{
            width: 64,
            height: 22,
            borderRadius: 11,
            background: '#000',
            flexShrink: 0,
            marginBottom: 10,
          }} />

          {/* Screen content */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: 24,
            gap: 56,
          }}>
            {/* Logo — icon + wordmark as one unit */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
            >
              <Image
                src="/icons/splash.svg"
                alt="postq"
                width={64}
                height={64}
                style={{ objectFit: 'contain', display: 'block' }}
              />
              <p style={{
                margin: 0,
                fontSize: 14,
                fontFamily: "'GT Eesti Pro Display', system-ui, sans-serif",
                letterSpacing: 0,
                color: 'rgba(255,255,255,0.85)',
              }}>
                postq vpn
              </p>
            </motion.div>

            {/* Toggle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.4 }}
            >
              <VpnToggle on={on} onToggle={() => setOn(v => !v)} />
            </motion.div>
          </div>

          {/* Home indicator */}
          <div style={{
            width: 80,
            height: 4,
            borderRadius: 2,
            background: 'rgba(255,255,255,0.08)',
            flexShrink: 0,
            marginTop: 16,
          }} />
        </motion.div>
      </div>

      {/* ── App icons ───────────────────────────────────────────────── */}
      {ICONS.map((icon) => (
        <motion.div
          key={icon.alt}
          variants={itemVariants}
          style={{ position: 'absolute', zIndex: icon.behind ? 1 : 3, ...icon.style }}
        >
          <motion.div
            animate={{ opacity: on ? 1 : 0, scale: on ? 1 : 0.7 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: on ? icon.appearDelay : 0 }}
          >
            <div
              style={{
                width: icon.size,
                height: icon.size,
                borderRadius: Math.round(icon.size * 0.22),
                background: 'rgba(8,4,22,0.9)',
                border: '1px solid rgba(255,255,255,0.09)',
                boxShadow: '0 8px 28px rgba(0,0,0,0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animationName: 'icon-float',
                animationDuration: `${icon.duration}s`,
                animationDelay: `${icon.delay}s`,
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                animationDirection: 'alternate',
                animationFillMode: 'both',
                willChange: 'transform',
                ['--fy0' as string]: `${icon.floatY[0]}px`,
                ['--fy1' as string]: `${icon.floatY[1]}px`,
              }}
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={icon.size - 16}
                height={icon.size - 16}
                style={{
                  objectFit: 'contain',
                  ...(icon.white && { filter: 'brightness(0) invert(1)' }),
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      ))}

      <style>{`
        @keyframes icon-float {
          from { transform: translateY(var(--fy0)); }
          to   { transform: translateY(var(--fy1)); }
        }
      `}</style>
    </motion.div>
  )
}
