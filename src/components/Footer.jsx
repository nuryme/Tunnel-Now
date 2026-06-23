import { Link } from 'react-router-dom'
import { PHONE, TEL, EMAIL, ADDRESS, AREAS, services } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="shell grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <span style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-xl font-semibold text-titanium">
            Tunnel<span className="text-gold">Now</span>
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ash">
            Houston's under-slab tunneling specialists. We repair your plumbing without destroying your floors.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-titanium">Services</h4>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 5).map((s) => (
              <li key={s.title}>
                <Link to="/services" className="text-sm text-ash transition-colors hover:text-gold">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-titanium">Service Areas</h4>
          <ul className="mt-4 space-y-2.5">
            {AREAS.map((a) => <li key={a} className="text-sm text-ash">{a}, TX</li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-titanium">Get In Touch</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href={TEL} className="font-semibold text-gold transition-opacity hover:opacity-80" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="text-ash transition-colors hover:text-titanium">{EMAIL}</a></li>
            <li className="text-ash">{ADDRESS}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="shell flex flex-col items-center justify-between gap-3 py-6 text-xs text-ash sm:flex-row">
          <p>© {new Date().getFullYear()} Tunnel Now. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-titanium">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-titanium">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
