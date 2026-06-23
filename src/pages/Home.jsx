import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import CTABand from '../components/CTABand.jsx'
import Faq from '../components/Faq.jsx'
import TunnelDiagram from '../components/TunnelDiagram.jsx'
import { services, process, stats, reasons, testimonials, AREAS } from '../data.js'

function SectionHead({ eyebrow, title, sub, center }) {
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-titanium sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-ash">{sub}</p>}
    </Reveal>
  )
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trust strip */}
      <section className="border-y border-border bg-surface/60">
        <div className="shell flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-sm text-ash">
          <span className="font-medium text-titanium">Serving {AREAS.join(', ')}</span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span>Licensed &amp; Insured</span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span>20+ Years Under Houston Homes</span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span>Free Estimates</span>
        </div>
      </section>

      {/* About — why under-slab (alternating) */}
      <section className="shell grid items-center gap-12 py-24 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Why Under-Slab Tunneling</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-titanium sm:text-4xl">
            The smarter way to reach a broken pipe.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ash">
            When a pipe fails beneath your foundation, most plumbers reach for a jackhammer — tearing out your tile, hardwood, and concrete to get to it.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ash">
            We go a different way: <span className="text-titanium">under</span> the house. Our crews hand-dig a narrow tunnel from outside, repair the line, and backfill — leaving your home exactly as we found it.
          </p>
          <Link to="/services" className="btn-ghost mt-8">Explore Our Services</Link>
        </Reveal>
        <Reveal style={{ transitionDelay: '120ms' }}>
          <div className="card p-6">
            <TunnelDiagram className="w-full" />
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section className="border-t border-border bg-surface/40 py-24">
        <div className="shell">
          <SectionHead
            eyebrow="What We Do"
            title="Comprehensive under-slab & excavation services"
            sub="From the first leak to a fully restored site — one specialist crew handles all of it."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 90}>
                <Link to="/services" className="card flex h-full flex-col p-7">
                  <span style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-sm font-semibold text-gold">{s.n}</span>
                  <h3 className="mt-3 text-xl font-semibold text-titanium">{s.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ash">{s.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                    Learn more
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="shell py-24">
        <SectionHead eyebrow="How It Works" title="Four steps. Floors intact." center />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <div className="card h-full p-7">
                <span style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-4xl font-bold text-gold/30">{p.n}</span>
                <h3 className="mt-3 text-lg font-semibold text-titanium">{p.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ash">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quick facts / stat counters */}
      <section className="border-y border-border bg-surface">
        <div className="shell grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <div style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-5xl font-bold text-gold">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm uppercase tracking-wider text-ash">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="shell py-24">
        <SectionHead eyebrow="Why Tunnel Now" title="Built around protecting your home." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 90}>
              <div className="h-full">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-gold/40 bg-gold/10 text-gold">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 12l2 2 4-4" /><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-titanium">{r.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ash">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-surface/40 py-24">
        <div className="shell">
          <SectionHead eyebrow="Customer Stories" title="Houston homeowners who kept their floors." center />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <figure className="card flex h-full flex-col p-7">
                  <div className="flex gap-1 text-gold" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <svg key={k} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3 6.5 7 .9-5 4.8 1.3 7L12 18l-6.6 3.2 1.3-7-5-4.8 7-.9z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-titanium">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 border-t border-border pt-5">
                    <span className="block font-semibold text-titanium">{t.name}</span>
                    <span className="text-sm text-ash">{t.meta}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="shell py-24">
        <SectionHead eyebrow="Questions" title="Answers before you call." center />
        <div className="mt-14">
          <Faq />
        </div>
      </section>

      <CTABand />
    </>
  )
}
