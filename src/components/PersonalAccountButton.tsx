'use client'

import { motion } from 'framer-motion'

export default function PersonalAccountButton() {
    return (
        <motion.a
            href="https://web.postq.space"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-medium rounded-lg no-underline focus:outline-none"
            style={{
                fontFamily: "'GT Eesti Pro Display', system-ui, -apple-system, sans-serif",
                fontSize: '13px',
                fontWeight: '500',
                letterSpacing: '0.06em',
                textShadow: '0 0 8px rgba(207, 0, 163, 0.6)',
                border: '1.5px solid rgba(207, 0, 163, 0.7)',
                background: 'linear-gradient(135deg, rgba(207, 0, 163, 0.15) 0%, rgba(147, 27, 121, 0.1) 100%)',
                boxShadow: '0 0 15px rgba(207, 0, 163, 0.3), inset 0 0 15px rgba(207, 0, 163, 0.05)',
                color: 'rgb(255, 255, 255)',
                transitionProperty: 'color, background-color, border-color, box-shadow, transform, opacity',
                transitionDuration: '200ms',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
        >
            ▶ личный кабинет
        </motion.a>
    )
}
