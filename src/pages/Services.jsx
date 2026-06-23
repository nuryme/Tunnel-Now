import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import CTABand from '../components/CTABand.jsx'
import { services } from '../data.js'

const includes = ['Free on-site estimate', 'Licensed plumbers', 'Clean site restoration']

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="One crew for everything beneath your slab."
        sub="Tunneling, trenching, repipes, drains, and foundation work — handled end to end, without tearing up your home."
      />

      <section className="shell py-20">
        <div className="space-y-5">
          {services.map((s) => (
            <Reveal key={s.title}>
              <article className="card grid gap-6 p-8 md:grid-cols-[auto_1fr] md:gap-10">
                <span style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-5xl font-bold text-gold/30 md:text-6xl">{s.n}</span>
                <div>
                  <h2 className="text-2xl font-semibold text-titanium">{s.title}</h2>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ash">{s.blurb}</p>
                  <ul className="mt-5 flex flex-wrap gap-2.5">
                    {includes.map((inc) => (
                      <li key={inc} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs font-medium text-ash">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e3a824" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}
