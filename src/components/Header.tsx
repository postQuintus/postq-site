'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import PersonalAccountButton from './PersonalAccountButton'

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md shadow-lg shadow-black/10">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-2.5"
                >
                    <Link href="/" className="flex items-center gap-2.5 no-underline">
                        <div className="relative h-10 w-10 flex-shrink-0">
                            <Image
                                src="/icons/icon.svg"
                                alt="PostQ Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-base font-semibold font-eesti-display hidden sm:inline" style={{ color: 'var(--text)' }}>
                            postq vpn
                        </span>
                    </Link>
                </motion.div>

                {/* Personal Account Button */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <PersonalAccountButton />
                </motion.div>
            </div>
        </header>
    )
}
