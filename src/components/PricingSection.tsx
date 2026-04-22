'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Shield, Zap, Users, Building2 } from 'lucide-react'

type Period = 1 | 3 | 6 | 12

const PERIODS: { value: Period; label: string; discount: string | null }[] = [
  { value: 1,  label: '1 мес',  discount: null },
  { value: 3,  label: '3 мес',  discount: '−10%' },
  { value: 6,  label: '6 мес',  discount: '−20%' },
  { value: 12, label: '12 мес', discount: '−30%' },
]

const PLANS = [
  {
    id: 'standard',
    name: 'Стандартный',
    description: 'Оптимальный набор для домашнего использования',
    icon: Shield,
    popular: false,
    prices:   { 1: 190,  3: 513,  6: 912,  12: 1596  } as Record<Period, number>,
    original: { 1: null, 3: 570,  6: 1140, 12: 2280  } as Record<Period, number | null>,
    features: ['100 ГБ трафика в месяц', '3 устройства', 'Сброс трафика ежемесячно', 'Поддержка 24/7'],
  },
  {
    id: 'premium',
    name: 'Премиум',
    description: 'Для личного использования с премиум-серверами',
    icon: Zap,
    popular: true,
    prices:   { 1: 300,  3: 810,  6: 1440, 12: 2520  } as Record<Period, number>,
    original: { 1: null, 3: 900,  6: 1800, 12: 3600  } as Record<Period, number | null>,
    features: ['300 ГБ трафика в месяц', '3 устройства', 'Премиум-серверы', 'Сброс трафика ежемесячно', 'Поддержка 24/7'],
  },
  {
    id: 'family',
    name: 'Семейная',
    description: 'Доступ ко всем серверам с общим трафиком',
    icon: Users,
    popular: false,
    prices:   { 1: 500,  3: 1350, 6: 2400, 12: 4200  } as Record<Period, number>,
    original: { 1: null, 3: 1500, 6: 3000, 12: 6000  } as Record<Period, number | null>,
    features: ['600 ГБ трафика в месяц', '6 устройств', 'Все серверы', 'Сброс трафика ежемесячно', 'Поддержка 24/7'],
  },
  {
    id: 'team',
    name: 'Командный',
    description: 'Для небольшой команды или офиса',
    icon: Building2,
    popular: false,
    prices:   { 1: 900,  3: 2430, 6: 4320, 12: 7560  } as Record<Period, number>,
    original: { 1: null, 3: 2700, 6: 5400, 12: 10800 } as Record<Period, number | null>,
    features: ['1500 ГБ трафика в месяц', '10 устройств', 'Все серверы', 'Сброс трафика ежемесячно', 'Поддержка 24/7'],
  },
]

export default function PricingSection() {
  const [period, setPeriod] = useState<Period>(1)

  return (
    <section id="pricing" style={{ padding: '60px 0 100px', scrollMarginTop: '64px', position: 'relative', zIndex: 1 }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '44px' }}
        >
          <h2 style={{
            fontFamily: "'GT Eesti Pro Display', system-ui, sans-serif",
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 700,
            color: 'var(--text)',
            marginBottom: '10px',
          }}>
            Выберите свой план
          </h2>
          <p style={{
            fontFamily: "'GT Eesti Pro Text', system-ui, sans-serif",
            fontSize: '14px',
            color: 'rgba(215,194,240,0.45)',
          }}>
            Прозрачные цены без скрытых платежей. Отмените в любой момент.
          </p>
        </motion.div>

        {/* Period toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div style={{
            display: 'inline-flex',
            background: 'rgba(207,0,163,0.05)',
            border: '1px solid rgba(207,0,163,0.12)',
            borderRadius: '12px',
            padding: '4px',
            gap: '2px',
          }}>
            {PERIODS.map(p => (
              <button
                key={p.value}
                onClick={() => setPeriod(p.value)}
                style={{
                  position: 'relative',
                  padding: '7px 18px',
                  borderRadius: '9px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'GT Eesti Pro Text', system-ui, sans-serif",
                  fontSize: '13px',
                  fontWeight: period === p.value ? 500 : 400,
                  color: period === p.value ? '#fff' : 'rgba(215,194,240,0.45)',
                  background: 'transparent',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.18s, font-weight 0.18s',
                  zIndex: 1,
                }}
              >
                {period === p.value && (
                  <motion.div
                    layoutId="period-pill"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '9px',
                      background: 'linear-gradient(135deg, #cf00a3 0%, #931b79 100%)',
                      zIndex: -1,
                    }}
                  />
                )}
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="pricing-grid">
          {PLANS.map((plan, i) => {
            const Icon = plan.icon
            const total = plan.prices[period]
            const original = plan.original[period]
            const perMonth = Math.round(total / period)

            return (
              <motion.div
                key={plan.id}
                className={plan.popular ? undefined : 'pricing-card-wrap'}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  position: 'relative',
                  background: plan.popular ? 'rgba(207,0,163,0.08)' : 'rgba(255,255,255,0.02)',
                  border: plan.popular
                    ? '1px solid rgba(207,0,163,0.38)'
                    : '1px solid rgba(207,0,163,0.1)',
                  borderRadius: '20px',
                  padding: plan.popular ? '40px 22px' : '28px 22px',
                  marginTop: plan.popular ? '-16px' : 0,
                  marginBottom: plan.popular ? '-16px' : 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  boxShadow: plan.popular
                    ? '0 0 48px rgba(207,0,163,0.14), 0 0 0 1px rgba(207,0,163,0.1) inset'
                    : 'none',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: -13,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #cf00a3, #931b79)',
                    color: '#fff',
                    fontSize: '10px',
                    fontWeight: 600,
                    fontFamily: "'GT Eesti Pro Display', system-ui, sans-serif",
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '3px 14px',
                    borderRadius: '999px',
                    whiteSpace: 'nowrap',
                  }}>
                    Популярный
                  </div>
                )}

                {/* Icon + name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: 38,
                    height: 38,
                    borderRadius: '10px',
                    background: 'rgba(207,0,163,0.08)',
                    border: '1px solid rgba(207,0,163,0.14)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={17} strokeWidth={1.5} color="rgba(207,0,163,0.8)" />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'GT Eesti Pro Display', system-ui, sans-serif",
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--text)',
                      lineHeight: 1.2,
                    }}>
                      {plan.name}
                    </div>
                    <div style={{
                      fontFamily: "'GT Eesti Pro Text', system-ui, sans-serif",
                      fontSize: '11px',
                      color: 'rgba(215,194,240,0.4)',
                      lineHeight: 1.4,
                      marginTop: '2px',
                    }}>
                      {plan.description}
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={period}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.12 }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px' }}>
                          <span style={{
                            fontFamily: "'GT Eesti Pro Display', system-ui, sans-serif",
                            fontSize: 'clamp(1.6rem, 2.2vw, 2rem)',
                            fontWeight: 600,
                            color: 'var(--text)',
                            lineHeight: 1,
                          }}>
                            {perMonth} ₽
                          </span>
                          <span style={{
                            fontFamily: "'GT Eesti Pro Text', system-ui, sans-serif",
                            fontSize: '12px',
                            color: 'rgba(215,194,240,0.35)',
                          }}>
                            /мес
                          </span>
                        </div>
                        {period > 1 && PERIODS.find(p => p.value === period)?.discount && (
                          <span style={{
                            background: 'linear-gradient(135deg, #15803d 0%, #16a34a 100%)',
                            boxShadow: '0 0 10px rgba(22,163,74,0.4)',
                            color: '#fff',
                            fontSize: '10px',
                            fontWeight: 600,
                            padding: '2px 7px',
                            borderRadius: '6px',
                            fontFamily: "'GT Eesti Pro Display', system-ui, sans-serif",
                            letterSpacing: '0.02em',
                            whiteSpace: 'nowrap',
                          }}>
                            {PERIODS.find(p => p.value === period)?.discount}
                          </span>
                        )}
                      </div>
                      {period > 1 && (
                        <div style={{
                          marginTop: '5px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontFamily: "'GT Eesti Pro Text', system-ui, sans-serif",
                          fontSize: '12px',
                        }}>
                          <span style={{ color: 'rgba(215,194,240,0.4)' }}>{total} ₽ за {period} мес</span>
                          {original && (
                            <span style={{ color: 'rgba(215,194,240,0.25)', textDecoration: 'line-through' }}>
                              {original} ₽
                            </span>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div style={{ borderTop: '1px solid rgba(207,0,163,0.08)' }} />

                {/* Features */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px', flex: 1 }}>
                  {plan.features.map((f, fi) => (
                    <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check size={13} strokeWidth={2.5} color="rgba(207,0,163,0.65)" style={{ flexShrink: 0 }} />
                      <span style={{
                        fontFamily: "'GT Eesti Pro Text', system-ui, sans-serif",
                        fontSize: '13px',
                        color: 'rgba(215,194,240,0.6)',
                      }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://web.postq.space"
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '11px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontFamily: "'GT Eesti Pro Display', system-ui, sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '0.03em',
                    transition: 'opacity 0.18s',
                    ...(plan.popular ? {
                      background: 'linear-gradient(135deg, #cf00a3 0%, #931b79 100%)',
                      color: '#fff',
                      boxShadow: '0 0 20px rgba(207,0,163,0.25)',
                    } : {
                      background: 'transparent',
                      color: 'rgba(207,0,163,0.75)',
                      border: '1px solid rgba(207,0,163,0.22)',
                    }),
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Выбрать план
                </a>

                {plan.popular && (
                  <p style={{
                    textAlign: 'center',
                    fontFamily: "'GT Eesti Pro Text', system-ui, sans-serif",
                    fontSize: '11px',
                    color: 'rgba(215,194,240,0.35)',
                    margin: 0,
                  }}>
                    1 день бесплатно при первой подписке
                  </p>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          align-items: stretch;
        }
        .pricing-card-wrap:hover {
          border-color: rgba(207,0,163,0.22) !important;
          box-shadow: 0 4px 28px rgba(207,0,163,0.07) !important;
        }
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .pricing-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
