import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { PHONE, TEL } from '../data.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Tunnel Now home">
      <svg width="34" height="34" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="24" height="24" rx="6" stroke="#e3a824" strokeWidth="1.5" />
        <path d="M6 19 V13 a7 7 0 0 1 14 0 V19" stroke="#e3a824" strokeWidth="2" strokeLinecap="round" />
        <line x1="13" y1="13" x2="13" y2="19" stroke="#f0f4f8" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-semibold tracking-tight text-titanium">
        Tunnel<span className="text-gold">Now</span>
      </span>
    </Link>
  )
}

function PhoneButton({ className = '' }) {
  return (
    <a
      href={TEL}
      className={`inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-[#14181f] transition-transform hover:-translate-y-0.5 ${className}`}
      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
      {PHONE}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-gold' : 'text-ash hover:text-titanium'}`

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <nav className="shell relative flex h-[76px] items-center justify-between">
        <Logo />

        {/* Centered links */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Right: phone button */}
        <PhoneButton className="hidden md:inline-flex" />

        <button
          className="text-titanium md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></>
              : <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg md:hidden">
          <div className="shell flex flex-col gap-1 py-4">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)} className={linkClass}>
                <span className="block py-2">{l.label}</span>
              </NavLink>
            ))}
            <PhoneButton className="mt-3 w-fit" />
          </div>
        </div>
      )}
    </header>
  )
}
