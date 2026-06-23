import Reveal from './Reveal.jsx'

export default function PageHeader({ eyebrow, title, sub }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(227,168,36,0.08), transparent 65%)' }}
      />
      <Reveal className="shell max-w-3xl py-20 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-titanium sm:text-5xl">{title}</h1>
        {sub && <p className="mt-5 text-lg leading-relaxed text-ash">{sub}</p>}
      </Reveal>
    </section>
  )
}
