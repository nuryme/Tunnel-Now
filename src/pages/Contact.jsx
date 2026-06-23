import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { PHONE, TEL, EMAIL, ADDRESS, AREAS, services } from '../data.js'

const field = 'w-full rounded-lg border border-border bg-surface px-4 py-3 text-titanium placeholder:text-ash/60 focus:border-gold focus:outline-none'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  function validate() {
    const err = {}
    if (!form.name.trim()) err.name = 'Please enter your name.'
    if (!form.phone.trim()) err.phone = 'A phone number helps us call you back.'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'That email looks off.'
    if (!form.message.trim()) err.message = 'Tell us briefly what’s going on.'
    return err
  }

  function onSubmit(e) {
    e.preventDefault()
    const err = validate()
    setErrors(err)
    if (Object.keys(err).length) return
    const body =
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n` +
      `Service: ${form.service || 'Not specified'}\n\n${form.message}`
    // ponytail: no backend — hand off to the user's mail client.
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Free estimate request — ${form.name}`)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get your free estimate."
        sub="Tell us what’s happening under your slab. We’ll call back fast with honest next steps — no obligation."
      />

      <section className="shell grid gap-12 py-20 lg:grid-cols-[1fr_1.1fr]">
        {/* Info */}
        <Reveal>
          <h2 className="text-2xl font-semibold text-titanium">Talk to a real crew.</h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ash">
            The fastest way to a quote is a phone call — but if you’d rather write it out, the form works too.
          </p>

          <div className="mt-8 space-y-5">
            <a href={TEL} className="card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-gold/40 bg-gold/10 text-gold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-ash">Call us</span>
                <span style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-lg font-semibold text-gold">{PHONE}</span>
              </span>
            </a>

            <div className="card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-border text-ash">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-ash">Visit / mail</span>
                <span className="text-titanium">{ADDRESS}</span>
              </span>
            </div>

            <div className="card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-border text-ash">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" />
                </svg>
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-ash">Email</span>
                <a href={`mailto:${EMAIL}`} className="text-titanium hover:text-gold">{EMAIL}</a>
              </span>
            </div>
          </div>

          <p className="mt-8 text-sm text-ash">Proudly serving {AREAS.join(', ')}.</p>
        </Reveal>

        {/* Form */}
        <Reveal style={{ transitionDelay: '120ms' }}>
          <form onSubmit={onSubmit} noValidate className="card p-7 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-titanium">Name</label>
                <input id="name" className={field} value={form.name} onChange={set('name')} placeholder="Jane Doe" />
                {errors.name && <p className="mt-1.5 text-sm text-gold">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-titanium">Phone</label>
                <input id="phone" className={field} value={form.phone} onChange={set('phone')} placeholder="(713) 000-0000" />
                {errors.phone && <p className="mt-1.5 text-sm text-gold">{errors.phone}</p>}
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-titanium">Email <span className="text-ash">(optional)</span></label>
                <input id="email" type="email" className={field} value={form.email} onChange={set('email')} placeholder="you@email.com" />
                {errors.email && <p className="mt-1.5 text-sm text-gold">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-titanium">Service</label>
                <select id="service" className={field} value={form.service} onChange={set('service')}>
                  <option value="">Select a service…</option>
                  {services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-titanium">What’s going on?</label>
              <textarea id="message" rows="5" className={field} value={form.message} onChange={set('message')} placeholder="Warm spot on the floor, water bill jumped, slab leak suspected…" />
              {errors.message && <p className="mt-1.5 text-sm text-gold">{errors.message}</p>}
            </div>

            <button type="submit" className="btn-gold mt-7 w-full justify-center">Request My Free Estimate</button>
            <p className="mt-4 text-center text-xs text-ash">Opens your email app with the details filled in. We reply fast.</p>
          </form>
        </Reveal>
      </section>
    </>
  )
}
