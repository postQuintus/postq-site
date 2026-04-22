'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import PersonalAccountButton from './PersonalAccountButton'

const NAV_LINKS = [
    { label: 'Тарифы',          href: '#pricing',                    external: false },
    { label: 'FAQ',              href: '#faq',                        external: false },
    { label: 'Статус серверов',  href: 'https://status.postq.space',  external: true  },
]

const navLinkStyle = {
    fontFamily: "'GT Eesti Pro Text', system-ui, sans-serif",
    fontSize: '13px',
    color: 'rgba(215,194,240,0.5)',
    transition: 'color 0.18s',
    cursor: 'pointer',
    textDecoration: 'none',
}

export default function Header() {
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        if (mobileOpen) setMobileOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrolled])

    function handleNavClick(e: React.MouseEvent, link: typeof NAV_LINKS[0]) {
        e.preventDefault()
        if (link.external) {
            window.open(link.href, '_blank', 'noopener,noreferrer')
            return
        }
        const el = document.getElementById(link.href.slice(1))
        if (!el) return
        const top = el.getBoundingClientRect().top + window.scrollY - 64
        window.scrollTo({ top, behavior: 'smooth' })
    }

    function handleMobileNavClick(link: typeof NAV_LINKS[0]) {
        setMobileOpen(false)
        if (link.external) {
            window.open(link.href, '_blank', 'noopener,noreferrer')
            return
        }
        // Wait for Framer Motion exit animation (220ms) before scrolling
        setTimeout(() => {
            const el = document.getElementById(link.href.slice(1))
            if (!el) return
            const top = el.getBoundingClientRect().top + window.scrollY - 64
            window.scrollTo({ top, behavior: 'smooth' })
        }, 250)
    }

    return (
        <header
            className="fixed left-0 right-0 z-50 transition-all duration-500"
            style={{
                top: 0,
                background: scrolled || mobileOpen
                    ? 'rgba(4,0,15,0.7)'
                    : 'transparent',
                backdropFilter: scrolled || mobileOpen ? 'blur(24px) saturate(160%)' : 'none',
                WebkitBackdropFilter: scrolled || mobileOpen ? 'blur(24px) saturate(160%)' : 'none',
                borderBottom: scrolled || mobileOpen
                    ? '1px solid rgba(207,0,163,0.12)'
                    : '1px solid transparent',
                boxShadow: scrolled || mobileOpen
                    ? '0 1px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)'
                    : 'none',
            }}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Link
                            href="/"
                            className="flex items-center gap-2.5 no-underline"
                            onClick={e => {
                                if (pathname === '/') {
                                    e.preventDefault()
                                    window.scrollTo({ top: 0, behavior: 'smooth' })
                                }
                            }}
                        >
                        <div className="relative h-8 w-8 flex-shrink-0">
                            <Image src="/icons/icon.svg" alt="postq logo" fill className="object-contain" />
                        </div>
                        <span style={{ fontFamily: "'GT Eesti Pro Display', system-ui, sans-serif", fontSize: '15px', color: 'var(--text)' }}>
                            postq vpn
                        </span>
                    </Link>
                </motion.div>

                {/* Desktop nav */}
                <motion.nav
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="hidden md:flex items-center gap-9"
                >
                    {NAV_LINKS.map(link => (
                        link.external ? (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={navLinkStyle}
                                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(215,194,240,0.9)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(215,194,240,0.5)')}
                            >
                                {link.label}
                            </a>
                        ) : (
                            <button
                                key={link.label}
                                style={{ ...navLinkStyle, background: 'none', border: 'none' }}
                                onClick={e => handleNavClick(e, link)}
                                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(215,194,240,0.9)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(215,194,240,0.5)')}
                            >
                                {link.label}
                            </button>
                        )
                    ))}
                </motion.nav>

                {/* Right: account button + burger */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3"
                >
                    <div className="hidden md:block">
                        <PersonalAccountButton />
                    </div>

                    {/* Burger */}
                    <button
                        className="md:hidden"
                        onClick={() => setMobileOpen(v => !v)}
                        aria-label="Меню"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '5px', width: 24, height: 24 }}>
                            <motion.span
                                animate={mobileOpen
                                    ? { rotate: 45, y: 6.5, backgroundColor: 'rgba(207,0,163,0.9)' }
                                    : { rotate: 0,  y: 0,   backgroundColor: 'rgba(215,194,240,0.7)' }}
                                transition={{ duration: 0.22 }}
                                style={{ display: 'block', height: 1.5, borderRadius: 2, transformOrigin: 'center' }}
                            />
                            <motion.span
                                animate={mobileOpen
                                    ? { scaleX: 0, opacity: 0 }
                                    : { scaleX: 1, opacity: 1, backgroundColor: 'rgba(215,194,240,0.7)' }}
                                transition={{ duration: 0.15 }}
                                style={{ display: 'block', height: 1.5, borderRadius: 2, transformOrigin: 'center' }}
                            />
                            <motion.span
                                animate={mobileOpen
                                    ? { rotate: -45, y: -6.5, backgroundColor: 'rgba(207,0,163,0.9)' }
                                    : { rotate: 0,   y: 0,    backgroundColor: 'rgba(215,194,240,0.7)' }}
                                transition={{ duration: 0.22 }}
                                style={{ display: 'block', height: 1.5, borderRadius: 2, transformOrigin: 'center' }}
                            />
                        </div>
                    </button>
                </motion.div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{ padding: '8px 24px 20px', display: 'flex', flexDirection: 'column', gap: '2px', borderTop: '1px solid rgba(207,0,163,0.08)' }}>
                            {NAV_LINKS.map((link, i) => (
                                <motion.button
                                    key={link.label}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => handleMobileNavClick(link)}
                                    style={{ fontFamily: "'GT Eesti Pro Text', system-ui, sans-serif", fontSize: '15px', color: 'rgba(215,194,240,0.65)', padding: '10px 0', borderBottom: '1px solid rgba(207,0,163,0.06)', transition: 'color 0.18s', cursor: 'pointer', background: 'none', border: 'none', borderRadius: 0, textAlign: 'left', width: '100%' }}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(215,194,240,0.95)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(215,194,240,0.65)')}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                            <div style={{ marginTop: '12px' }}>
                                <PersonalAccountButton />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
