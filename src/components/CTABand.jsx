import { PHONE, TEL } from '../data.js'
import Reveal from './Reveal.jsx'

export default function CTABand() {
  return (
    <section className="border-y border-border bg-surface">
      <Reveal className="shell flex flex-col items-start gap-8 py-20 text-left md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-titanium sm:text-4xl">
            Cracked pipe under your slab? <span className="text-gold">Don't break the floor.</span>
          </h2>
          <p className="mt-4 text-lg text-ash">
            Talk to a real Houston tunneling crew today. Free estimate, no obligation.
          </p>
        </div>
        <a href={TEL} className="btn-gold shrink-0 justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
          </svg>
          Call {PHONE}
        </a>
      </Reveal>
    </section>
  )
}
