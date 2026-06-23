import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { PHONE, TEL, EMAIL, AREAS, services } from '../data.js'
import heroBg from '../assets/hero_bg.jpeg'

const field =
  'w-full rounded-lg border border-border bg-bg/70 px-3.5 py-2.5 text-sm text-titanium placeholder:text-ash/60 focus:border-gold focus:outline-none'

function RequestForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  function onSubmit(e) {
    e.preventDefault()
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service || 'Not specified'}`
    // ponytail: no backend — hand off to the user's mail client.
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Service request — ${form.name}`)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md rounded-2xl border border-border bg-surface/90 p-6 backdrop-blur-md sm:p-7">
      <h2 className="text-2xl font-bold tracking-tight text-titanium">Request Service Today</h2>
      <p className="mt-2 text-sm leading-relaxed text-ash">
        Tell us what’s happening under your slab and we’ll call you back with a free estimate.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="r-name" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ash">Name</label>
          <input id="r-name" required className={field} value={form.name} onChange={set('name')} placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="r-phone" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ash">Phone</label>
          <input id="r-phone" required className={field} value={form.phone} onChange={set('phone')} placeholder="Enter your phone number" />
        </div>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="r-email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ash">Email</label>
          <input id="r-email" type="email" className={field} value={form.email} onChange={set('email')} placeholder="Enter your email" />
        </div>
        <div>
          <label htmlFor="r-service" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ash">Select Service</label>
          <select id="r-service" className={field} value={form.service} onChange={set('service')}>
            <option value="">Choose…</option>
            {services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
          </select>
        </div>
      </div>

      <button type="submit" className="btn-gold mt-5 w-full justify-center">Submit</button>
    </form>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const glowRef = useRef(null)

  // ponytail: mutate the glow's transform directly on mousemove (no React state churn);
  // the CSS transition smooths it into a gentle follow.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const section = sectionRef.current
    const glow = glowRef.current
    if (!section || !glow) return

    const onMove = (e) => {
      const r = section.getBoundingClientRect()
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width // -0.5..0.5
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height
      glow.style.transform = `translate(${dx * 60}px, ${dy * 60}px)`
    }
    const onLeave = () => { glow.style.transform = 'translate(0, 0)' }

    section.addEventListener('mousemove', onMove)
    section.addEventListener('mouseleave', onLeave)
    return () => {
      section.removeEventListener('mousemove', onMove)
      section.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative flex min-h-[calc(100vh-76px)] items-stretch overflow-hidden">
      {/* AI hero background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* left-weighted charcoal overlay so titanium text stays readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(22,27,34,0.95) 0%, rgba(22,27,34,0.82) 42%, rgba(22,27,34,0.6) 100%)',
        }}
      />
      {/* subtle gold glow — follows the cursor gently */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(227,168,36,0.14), transparent 65%)',
          transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />

      <div className="shell relative z-10 grid w-full gap-12 py-16 lg:grid-cols-2 lg:gap-8">
        {/* Left: copy + single gold CTA (vertically centered) */}
        <div className="flex flex-col justify-center">
          <div className="max-w-xl reveal in">
            <p className="eyebrow">{AREAS.join(' · ')}</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-titanium sm:text-5xl lg:text-6xl">
              Repair Your Plumbing <span className="text-gold">Without Destroying</span> Your Floors.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ash">
              Houston's trusted experts in hand-dug under-slab excavation — reaching damaged pipes beneath your foundation, no demolition required.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href={TEL} className="btn-gold justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                Call For A Free Estimate
              </a>
              <Link to="/services" className="btn-ghost justify-center">See How We Work</Link>
            </div>

            <p className="mt-5 text-sm text-ash">
              Or call <a href={TEL} className="font-semibold text-titanium hover:text-gold">{PHONE}</a> — free, no-obligation quote.
            </p>
          </div>
        </div>

        {/* Right: request form — anchored bottom-right */}
        <div className="flex justify-center reveal in lg:-mb-16 lg:items-end lg:justify-end" style={{ transitionDelay: '120ms' }}>
          <RequestForm />
        </div>
      </div>
    </section>
  )
}
