import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import CTABand from '../components/CTABand.jsx'
import { posts } from '../data.js'

export default function Blog() {
  const [featured, ...rest] = posts

  return (
    <>
      <PageHeader
        eyebrow="The Tunnel Now Blog"
        title="Straight talk on slab leaks & foundations."
        sub="Practical guides from the crews who work under Houston homes every day."
      />

      <section className="shell py-20">
        {/* Featured */}
        <Reveal>
          <article className="card grid gap-8 overflow-hidden p-8 md:grid-cols-2 md:p-10">
            <div className="grid min-h-[220px] place-items-center rounded-lg border border-border bg-surface-2">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#e3a824" strokeWidth="1.2" strokeOpacity="0.6" aria-hidden="true">
                <path d="M3 21V10l9-7 9 7v11" strokeLinejoin="round" /><path d="M9 21v-6h6v6" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-gold">
                <span>{featured.category}</span><span className="text-ash">· Featured</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-titanium sm:text-3xl">{featured.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ash">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-3 text-sm text-ash">
                <span>{featured.date}</span><span>·</span><span>{featured.read} read</span>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90}>
              <article className="card flex h-full flex-col p-7">
                <span className="text-xs font-medium uppercase tracking-wider text-gold">{p.category}</span>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-titanium">{p.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ash">{p.excerpt}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4 text-sm text-ash">
                  <span>{p.date}</span><span>·</span><span>{p.read} read</span>
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
