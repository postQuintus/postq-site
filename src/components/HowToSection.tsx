'use client'

import { motion } from 'framer-motion'
import { Bot, CreditCard, Wifi } from 'lucide-react'

const STEPS = [
  {
    num: '01',
    icon: Bot,
    title: 'Откройте бота или кабинет',
    desc: 'Перейдите в Telegram-бот @postq_vpn_bot или в личный кабинет на web.postq.space',
  },
  {
    num: '02',
    icon: CreditCard,
    title: 'Выберите тариф и оплатите',
    desc: 'Стандартный, Премиум, Семейная или Командный. Оплата доступна картами РФ, международными и криптовалютой.',
  },
  {
    num: '03',
    icon: Wifi,
    title: 'Подключитесь и пользуйтесь',
    desc: 'Получите ключ, вставьте в приложение — готово. Все устройства под защитой.',
  },
]


export default function HowToSection() {
  return (
    <section id="howto" className="howto-section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          style={{
            fontFamily: "'GT Eesti Pro Display', system-ui, sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.08,
            color: '#ffffff',
            textAlign: 'center',
            margin: '0 0 12px',
            letterSpacing: '-0.02em',
          }}
        >
          Как подключить
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.07 }}
          style={{
            fontFamily: "'GT Eesti Pro Text', system-ui, sans-serif",
            fontSize: '15px',
            color: 'rgba(215,194,240,0.45)',
            textAlign: 'center',
            margin: '0 0 44px',
            lineHeight: 1.6,
          }}
        >
          Подключение займёт меньше минуты — без технических знаний и сложных настроек.
        </motion.p>

        {/* Steps */}
        <div className="howto-grid">
          {STEPS.map(({ num, icon: Icon, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="howto-card"
            >
              {/* Decorative big number */}
              <span className="howto-bignumber" aria-hidden>{num}</span>

              {/* Icon */}
              <div style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: 'rgba(207,0,163,0.08)',
                border: '1px solid rgba(207,0,163,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(207,0,163,0.1)',
                flexShrink: 0,
                marginBottom: 16,
              }}>
                <Icon size={22} strokeWidth={1.5} color="rgba(207,0,163,0.85)" />
              </div>

              {/* Title */}
              <span style={{
                fontFamily: "'GT Eesti Pro Display', system-ui, sans-serif",
                fontSize: '1rem',
                fontWeight: 600,
                color: '#ffffff',
                lineHeight: 1.3,
              }}>
                {title}
              </span>

              {/* Description */}
              <span style={{
                fontFamily: "'GT Eesti Pro Text', system-ui, sans-serif",
                fontSize: '13px',
                color: 'rgba(215,194,240,0.45)',
                lineHeight: 1.6,
              }}>
                {desc}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}
        >
          <motion.a
            href="https://web.postq.space"
            target="_blank"
            rel="noopener"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="no-underline inline-block btn-glow"
            style={{
              fontFamily: "'GT Eesti Pro Display', system-ui, sans-serif",
              fontSize: '15px',
              fontWeight: 500,
              letterSpacing: '0.06em',
              padding: '12px 40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #cf00a3 0%, #931b79 100%)',
              color: '#fff',
              whiteSpace: 'nowrap',
              boxShadow: '0 0 28px rgba(207,0,163,0.45), 0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            Подключить VPN
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        .howto-section {
          padding: 72px 0 64px;
        }
        .howto-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          align-items: stretch;
        }
        .howto-card {
          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(207,0,163,0.1);
          border-radius: 20px;
          padding: 28px 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
        }
        .howto-card:hover {
          border-color: rgba(207,0,163,0.22);
          background: rgba(207,0,163,0.04);
          box-shadow: 0 4px 28px rgba(207,0,163,0.08);
        }
        .howto-bignumber {
          position: absolute;
          top: -20px;
          right: -8px;
          font-family: 'GT Eesti Pro Display', system-ui, sans-serif;
          font-size: 140px;
          font-weight: 700;
          letter-spacing: -0.04em;
          color: rgba(207,0,163,0.07);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }
        @media (max-width: 767px) {
          .howto-section {
            padding: 48px 0 44px;
          }
          .howto-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .howto-card {
            padding: 22px 18px 20px;
          }
          .howto-bignumber {
            font-size: 100px;
          }
        }
      `}</style>
    </section>
  )
}
