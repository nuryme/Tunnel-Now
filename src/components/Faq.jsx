import { faqs } from '../data.js'

// ponytail: native <details>/<summary> — accessible accordion, zero JS state.
export default function Faq() {
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f) => (
        <details key={f.q} className="group card px-6 py-1 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-lg font-medium text-titanium">
            {f.q}
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border text-gold transition-transform duration-300 group-open:rotate-45">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </summary>
          <p className="pb-5 pr-10 text-[15px] leading-relaxed text-ash">{f.a}</p>
        </details>
      ))}
    </div>
  )
}
