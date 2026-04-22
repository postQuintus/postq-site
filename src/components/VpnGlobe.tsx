'use client'

import { motion } from 'framer-motion'

export default function VpnGlobe() {
  return (
    <>
      {false && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ width: '100%', maxWidth: 380, aspectRatio: '1' }}
        >
          <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%', overflow: 'visible' }} aria-hidden>

            {/* Outer boundary circle */}
            <circle cx="150" cy="150" r="128" fill="none" stroke="rgba(207,0,163,0.07)" strokeWidth="1" />

            {/* Pulsing rings from center */}
            {[0, 1.2, 2.4].map(delay => (
              <circle key={delay} cx="150" cy="150" r="52"
                fill="none"
                stroke="rgba(207,0,163,0.5)"
                strokeWidth="1.5"
                style={{
                  transformBox: 'fill-box',
                  transformOrigin: 'center',
                  animation: `ringExpand 3.6s ease-out ${delay}s infinite`,
                }}
              />
            ))}

            {/* Outer orbit – clockwise */}
            <g style={{
              transformOrigin: '150px 150px',
              animation: 'spin 16s linear infinite',
              willChange: 'transform',
            }}>
              <circle cx="150" cy="150" r="100"
                fill="none" stroke="rgba(207,0,163,0.16)" strokeWidth="1" strokeDasharray="5 16" />
              <circle cx="250" cy="150" r="5.5" fill="rgba(207,0,163,0.85)" />
              <circle cx="150" cy="50"  r="5.5" fill="rgba(207,0,163,0.85)" />
              <circle cx="50"  cy="150" r="5.5" fill="rgba(207,0,163,0.85)" />
              <circle cx="150" cy="250" r="5.5" fill="rgba(207,0,163,0.85)" />
            </g>

            {/* Inner orbit – counter-clockwise */}
            <g style={{
              transformOrigin: '150px 150px',
              animation: 'spin 22s linear infinite reverse',
              willChange: 'transform',
            }}>
              <circle cx="150" cy="150" r="72"
                fill="none" stroke="rgba(207,0,163,0.1)" strokeWidth="1" strokeDasharray="3 20" />
              <circle cx="222" cy="150" r="4" fill="rgba(207,0,163,0.6)" />
              <circle cx="78"  cy="150" r="4" fill="rgba(207,0,163,0.6)" />
            </g>

            {/* Shield */}
            <path
              d="M150 127 L133 135 L133 151 Q133 167 150 174 Q167 167 167 151 L167 135 Z"
              fill="rgba(110,15,90,0.5)"
              stroke="rgba(207,0,163,0.95)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Lock shackle */}
            <path
              d="M145 150 L145 145 Q145 140 150 140 Q155 140 155 145 L155 150"
              fill="none"
              stroke="rgba(230,185,225,0.92)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Lock body */}
            <rect x="143" y="150" width="14" height="11" rx="2.5" fill="rgba(230,185,225,0.92)" />

          </svg>

          <style>{`
            @keyframes ringExpand {
              0%   { transform: scale(1);   opacity: 0.7; }
              100% { transform: scale(2.6); opacity: 0; }
            }
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </motion.div>
      )}
    </>
  )
}
