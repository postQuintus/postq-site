'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'Что такое postq vpn и зачем он нужен?',
    a: 'postq vpn — это сервис, который шифрует весь ваш интернет-трафик и скрывает ваш реальный IP-адрес. Он позволяет безопасно пользоваться публичными сетями, справляться с региональнми ограничениями и защищать личные данные от посторонних.',
  },
  {
    q: 'Хранит ли postq vpn логи моей активности?',
    a: 'Нет. Мы придерживаемся строгой политики no-logs: мы не записываем и не храним данные о вашей активности, посещённых сайтах или передаваемом трафике.',
  },
  {
    q: 'Как происходит оплата?',
    a: 'Оплата производится через личный кабинет или Telegram-бота @postq_vpn_bot. Мы принимаем банковские карты и криптовалюту. После оплаты конфигурация выдаётся автоматически — в течение нескольких секунд.',
  },
  {
    q: 'Сколько устройств я могу подключить?',
    a: 'Количество устройств зависит от тарифа: Стандартный и Премиум — до 3 устройств одновременно, Семейный — до 6, Командный — до 10.',
  },
  {
    q: 'Есть ли бесплатный пробный период?',
    a: 'Да. Все новые пользователи получают 1 день бесплатного доступа с лимитом 300 ГБ трафика — без привязки карты.',
  },
  {
    q: 'Есть ли ограничения по скорости или трафику?',
    a: 'Скорость не ограничивается искусственно. Трафик ограничен в рамках тарифного плана и сбрасывается каждый месяц. При превышении лимита подключение приостанавливается до следующего периода или пополнения.',
  },
  {
    q: 'Что делать, если VPN не работает?',
    a: 'Попробуйте обновить подписку и/или сменить сервер. Если проблема сохраняется — напишите в поддержку @postq_support, мы быстро разберёмся в чём проблема.',
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="faq-section" style={{ position: 'relative', zIndex: 1, scrollMarginTop: '64px' }}>
      <div className="max-w-3xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <h2 style={{
            fontFamily: "'GT Eesti Pro Display', system-ui, sans-serif",
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 700,
            color: 'var(--text)',
            lineHeight: 1.15,
          }}>
            Частые{' '}
            <span style={{ color: 'var(--accent)' }}>вопросы</span>
          </h2>
          <p style={{
            marginTop: '12px',
            fontFamily: "'GT Eesti Pro Text', system-ui, sans-serif",
            fontSize: '15px',
            lineHeight: 1.6,
            color: 'rgba(215,194,240,0.45)',
          }}>
            Собрали ответы на самые популярные вопросы о postq vpn.
          </p>
        </motion.div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{
                  borderRadius: '12px',
                  border: isOpen
                    ? '1px solid rgba(207,0,163,0.25)'
                    : '1px solid rgba(255,255,255,0.07)',
                  background: isOpen
                    ? 'rgba(207,0,163,0.05)'
                    : 'rgba(255,255,255,0.02)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    padding: '18px 20px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{
                    fontFamily: "'GT Eesti Pro Text', system-ui, sans-serif",
                    fontSize: '15px',
                    fontWeight: 500,
                    color: isOpen ? 'rgba(215,194,240,0.95)' : 'rgba(215,194,240,0.75)',
                    lineHeight: 1.4,
                    transition: 'color 0.2s',
                  }}>
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.22 }}
                    style={{ flexShrink: 0 }}
                  >
                    <ChevronDown
                      size={18}
                      strokeWidth={1.5}
                      color={isOpen ? 'rgba(207,0,163,0.8)' : 'rgba(215,194,240,0.3)'}
                    />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{
                        fontFamily: "'GT Eesti Pro Text', system-ui, sans-serif",
                        fontSize: '14px',
                        lineHeight: 1.7,
                        color: 'rgba(215,194,240,0.55)',
                        padding: '0 20px 18px',
                        margin: 0,
                      }}>
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ marginTop: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}
        >
          <p style={{
            margin: 0,
            fontFamily: "'GT Eesti Pro Text', system-ui, sans-serif",
            fontSize: '14px',
            color: 'rgba(215,194,240,0.45)',
          }}>
            Не нашли ответ? — мы всегда рады помочь.
          </p>
          <a
            href="https://t.me/postq_support"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '11px 28px',
              borderRadius: '10px',
              border: '1px solid rgba(207,0,163,0.25)',
              background: 'rgba(207,0,163,0.07)',
              fontFamily: "'GT Eesti Pro Text', system-ui, sans-serif",
              fontSize: '14px',
              color: 'rgba(207,0,163,0.85)',
              textDecoration: 'none',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(207,0,163,0.12)'
              e.currentTarget.style.borderColor = 'rgba(207,0,163,0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(207,0,163,0.07)'
              e.currentTarget.style.borderColor = 'rgba(207,0,163,0.25)'
            }}
          >
            Написать в Telegram
          </a>
        </motion.div>

      </div>

      <style>{`
        .faq-section { padding: 60px 0 100px; }
        @media (max-width: 767px) {
          .faq-section { padding: 32px 0 48px; }
        }
      `}</style>
    </section>
  )
}
