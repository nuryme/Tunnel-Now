# Tunnel Now

Front-end-only marketing site for **Tunnel Now** — Houston's under-slab tunneling &
plumbing-repair specialists. Redesign of tunnelnow.com to a premium, dark-luxury bar.
**No backend.** No auth, no DB, no payments.

## Stack
- React 18 + Vite + Tailwind CSS v4 (`@tailwindcss/vite`), react-router-dom.
- Lives in the **repo root** (this folder), not a subfolder.
- Run: `npm run dev` → localhost.

## Pages
Home · Services (7 services as cards on one page) · Contact · Blog.

## Design reference
Structure/section rhythm modeled on https://demo.awaikenthemes.com/diyer (navy-charcoal +
amber accent handyman theme — palette already matches ours). Adopt its *structure*, not new
colors. Deliberate divergences: hero is **left-aligned** (not centered); use the SVG diagram +
numbered cards where no real photos exist.

**Home section flow:** Hero → trust strip (areas / licensed & insured / years) → About "why
under-slab" (alternating text + graphic) → Services cards → How it works (process steps) →
Quick Facts (gold stat counters) → Why choose us → Testimonials → FAQ → final CTA band → Footer.

## Design system — 60-30-10 (locked)
| Role | Token | Hex |
|------|-------|-----|
| 60% background | `bg` Slate Charcoal | `#161B22` |
| 30% primary text | `titanium` | `#F0F4F8` |
| 30% secondary text | `ash` | `#8B949E` |
| 10% accent / CTA | `gold` Precision Gold | `#E3A824` |

Surfaces: `surface #1C232E`, `surface-2 #222A35`, `border #2A313C`. Tokens defined in
`src/index.css` via Tailwind `@theme`.

- **Fonts:** Space Grotesk (display/headings) + Inter (body).
- **Gold** = primary actions: hero CTA, the nav phone button (right of centered nav links),
  and form Submit buttons. Keep it off decorative elements.
- **Hero:** AI background photo (`src/assets/hero_bg.jpeg`) under a left-weighted charcoal
  overlay; left-aligned copy + gold CTA (vertically centered); a "Request Service Today" form
  card anchored bottom-right; a gold glow that drifts toward the cursor. The SVG tunneling
  cutaway (`TunnelDiagram`) now lives only in the homepage "Why under-slab" section.
- **Contact form:** client-side validated, opens `mailto:` — no backend.

## Company facts
Phone `713-321-2657` (`tel:+17133212657`) · 6212 S Rice Ave, Houston, TX 77081 ·
Serves Houston, Austin, San Antonio.
