// Self-contained cutaway: house + slab stay intact while a hand-dug tunnel
// reaches the damaged pipe. No external assets.
export default function TunnelDiagram({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 560 470"
      role="img"
      aria-label="Cross-section diagram: a hand-dug tunnel reaches a damaged pipe beneath a home's slab, leaving the floors intact."
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="soil" x1="0" y1="155" x2="0" y2="455" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1c232e" />
          <stop offset="1" stopColor="#151a21" />
        </linearGradient>
        <linearGradient id="roof" x1="120" y1="28" x2="120" y2="86" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#222a35" />
          <stop offset="1" stopColor="#1c232e" />
        </linearGradient>
      </defs>

      {/* Soil mass below ground line */}
      <rect x="32" y="155" width="496" height="296" rx="14" fill="url(#soil)" stroke="#2a313c" />
      {/* soil texture */}
      <g fill="#2a313c" opacity="0.55">
        <circle cx="90" cy="220" r="2" /><circle cx="150" cy="260" r="1.6" /><circle cx="120" cy="330" r="2" />
        <circle cx="80" cy="390" r="1.6" /><circle cx="200" cy="400" r="2" /><circle cx="330" cy="240" r="1.6" />
        <circle cx="470" cy="350" r="2" /><circle cx="430" cy="420" r="1.6" /><circle cx="360" cy="410" r="2" />
      </g>

      {/* Ground line */}
      <line x1="32" y1="155" x2="528" y2="155" stroke="#3a434f" strokeWidth="2" />

      {/* House */}
      <g>
        <polygon points="96,86 200,30 304,86" fill="url(#roof)" stroke="#3a434f" strokeWidth="2" strokeLinejoin="round" />
        <rect x="118" y="86" width="164" height="69" fill="#1f2731" stroke="#3a434f" strokeWidth="2" />
        {/* warm-lit window — the only gold inside the house */}
        <rect x="150" y="104" width="34" height="34" rx="3" fill="#e3a824" fillOpacity="0.16" stroke="#e3a824" strokeOpacity="0.7" />
        <rect x="216" y="104" width="34" height="34" rx="3" fill="#222a35" stroke="#3a434f" />
      </g>

      {/* Slab — labelled, untouched */}
      <rect x="108" y="155" width="184" height="13" fill="#8b949e" fillOpacity="0.22" stroke="#8b949e" strokeOpacity="0.5" />
      <text x="200" y="165" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="9" letterSpacing="2" fill="#8b949e">
        SLAB · UNTOUCHED
      </text>

      {/* Access pit marker */}
      <text x="452" y="150" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="9" letterSpacing="2" fill="#8b949e">
        ACCESS
      </text>

      {/* Tunnel tube: down the access pit, then left under the slab to the pipe */}
      <path d="M452 168 V330 H250" stroke="#e3a824" strokeOpacity="0.12" strokeWidth="34" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M452 168 V330 H250" stroke="#e3a824" strokeOpacity="0.4" strokeWidth="34" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path className="tunnel-dash" d="M452 168 V330 H250" stroke="#f2b938" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Damaged pipe under the house */}
      <line x1="150" y1="330" x2="300" y2="330" stroke="#6b7480" strokeWidth="12" strokeLinecap="round" />
      <line x1="150" y1="330" x2="300" y2="330" stroke="#8b949e" strokeWidth="5" strokeLinecap="round" />
      {/* leak point */}
      <circle cx="235" cy="330" r="12" fill="#e3a824" fillOpacity="0.18" />
      <circle className="leak-pulse" cx="235" cy="330" r="5" fill="#e3a824" />

      {/* Labels with leader lines */}
      <g fontFamily="Space Grotesk, sans-serif" fontSize="10" letterSpacing="1.5" fill="#f0f4f8">
        <line x1="235" y1="345" x2="235" y2="372" stroke="#e3a824" strokeOpacity="0.5" strokeDasharray="3 3" />
        <text x="235" y="388" textAnchor="middle">DAMAGED PIPE</text>
        <line x1="380" y1="300" x2="380" y2="276" stroke="#e3a824" strokeOpacity="0.5" strokeDasharray="3 3" />
        <text x="380" y="266" textAnchor="middle" fill="#e3a824">HAND-DUG TUNNEL</text>
      </g>
    </svg>
  )
}
