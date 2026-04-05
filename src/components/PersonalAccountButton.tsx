'use client'

import { motion } from 'framer-motion'

export default function PersonalAccountButton() {
    return (
        <motion.a
            href="https://web.postq.space"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 text-sm tracking-widest no-underline inline-block rounded-lg transition-all duration-300"
            style={{
                fontFamily: "'GT Eesti Pro Display', system-ui, -apple-system, sans-serif",
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '0.08em',
                textShadow: '0 0 8px rgba(207, 0, 163, 0.6)',
                border: '1.5px solid rgba(207, 0, 163, 0.7)',
                background: 'linear-gradient(135deg, rgba(207, 0, 163, 0.15) 0%, rgba(147, 27, 121, 0.1) 100%)',
                boxShadow: '0 0 15px rgba(207, 0, 163, 0.3), inset 0 0 15px rgba(207, 0, 163, 0.05)',
                color: 'rgb(255, 255, 255)',
            }}
        >
            ▶ личный кабинет
        </motion.a>
    )
}
