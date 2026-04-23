'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, CalendarDays, Database, MonitorSmartphone } from 'lucide-react'

const ITEMS = [
  { icon: ShieldCheck,       value: '99.9%',   label: 'Время работы' },
  { icon: CalendarDays,      value: '1 день',  label: 'Бесплатный пробный период' },
  { icon: Database,          value: '300 ГБ',  label: 'Трафик на пробный период' },
  { icon: MonitorSmartphone, value: 'от 3 до 10', label: 'Устройств одновременно' },
]

export default function BenefitsSection() {
  return (
    <section className="benefits-section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="benefits-grid">
          {ITEMS.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="benefit-card"
            >
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: 'rgba(207,0,163,0.08)',
                border: '1px solid rgba(207,0,163,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px rgba(207,0,163,0.08)',
              }}>
                <Icon size={22} strokeWidth={1.5} color="rgba(207,0,163,0.75)" />
              </div>

              <span className="benefit-value">{value}</span>
              <span className="benefit-label">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        .benefit-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(207,0,163,0.1);
          border-radius: 18px;
          padding: 28px 20px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          text-align: center;
          transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
          cursor: default;
        }
        .benefit-card:hover {
          border-color: rgba(207,0,163,0.25);
          background: rgba(207,0,163,0.05);
          box-shadow: 0 4px 24px rgba(207,0,163,0.08);
        }
        .benefit-value {
          font-family: 'GT Eesti Pro Display', system-ui, sans-serif;
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 600;
          color: #ffffff;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .benefit-label {
          margin-top: -6px;
          font-family: 'GT Eesti Pro Text', system-ui, sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: rgba(215,194,240,0.4);
          line-height: 1.5;
        }
        .benefits-section {
          padding: 80px 0 40px;
        }
        @media (max-width: 767px) {
          .benefits-section {
            padding: 40px 0 24px;
          }
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .benefit-card {
            padding: 20px 16px 18px;
          }
        }
      `}</style>
    </section>
  )
}
